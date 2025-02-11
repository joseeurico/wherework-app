import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Dashboard Admin</h1>
      <button 
        onClick={handleLogout} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
