import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Admin Dashboard</h2>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/admin/users")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            👥 User Management
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/admin/reports")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            📊 Reports
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <button 
            onClick={() => navigate("/admin/settings")} 
            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          >
            ⚙️ Settings
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

export default AdminDashboard;
