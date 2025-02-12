import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Profile</h2>
      <p>User profile details here...</p>

      <button 
        onClick={() => navigate("/user/dashboard")} 
        style={{ width: "100%", padding: "10px", cursor: "pointer", backgroundColor: "blue", color: "white" }}
      >
        🔙 Back to Dashboard
      </button>
    </div>
  );
}

export default Profile;
