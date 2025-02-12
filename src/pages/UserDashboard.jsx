import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/"); // Redirect ke login kalau tidak ada user
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();  // Hapus session dari localStorage
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Dashboard</h2>
      {user ? <p>Welcome, {user.email}</p> : <p>Loading...</p>}

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/user/profile")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            🧑 Profile
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/user/settings")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            ⚙️ Settings
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/user/reports")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            📊 Reports
          </button>
        </li>
      </ul>

      <button 
        onClick={handleLogout} 
        style={{ width: "100%", padding: "10px", cursor: "pointer", backgroundColor: "red", color: "white" }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default UserDashboard;
