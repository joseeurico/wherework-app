import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/user-management">Manajemen Pengguna</Link></li>
          <li><Link to="/reports">Laporan</Link></li>
          <li><Link to="/settings">Pengaturan</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
