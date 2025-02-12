import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("profiles").select("id, email, role");
      if (error) {
        console.error("Error fetching users:", error);
        setError("Gagal mengambil data pengguna");
      } else {
        setUsers(data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      // Ambil session untuk mendapatkan token akses
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !sessionData?.session) {
        alert("User tidak terautentikasi!");
        return;
      }
  
      const accessToken = sessionData.session.access_token;
  
      // Kirim request ke Supabase Edge Function untuk menghapus user
      const response = await fetch("https://mvzzvidpleenjtqixbfw.supabase.co/functions/v1/deleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId }),
      });
  
      // Parse responsenya
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Gagal menghapus user");
      }
  
      alert("User berhasil dihapus!");
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Update UI
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(`Error: ${error.message}`);
    }
  };
  

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Manajemen Pengguna</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table border="1" width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{ backgroundColor: "red", color: "white", padding: "5px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/admin/dashboard">
        <button style={{ marginTop: "20px" }}>Kembali ke Dashboard</button>
      </Link>
    </div>
  );
};

export default UserManagement;
