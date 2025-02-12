import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user || session.user.user_metadata?.role !== "admin") {
        navigate("/");
      } else {
        setUser(session.user);
      }
    };

    fetchSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user.email}</p>
      
      <ul>
        <li>
          <button onClick={() => navigate("/admin/users")}>👥 User Management</button>
        </li>
        <li>
          <button onClick={() => navigate("/admin/reports")}>📊 Reports</button>
        </li>
        <li>
          <button onClick={() => navigate("/admin/settings")}>⚙️ Settings</button>
        </li>
      </ul>

      <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white" }}>
        🚪 Logout
      </button>
    </div>
  );
}

const handleLogout = async () => {
  await supabase.auth.signOut();
  localStorage.clear();  // Hapus session dari localStorage
  navigate("/");
};


export default AdminDashboard;

