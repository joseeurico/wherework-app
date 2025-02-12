import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Reports</h2>
      <p>Reports and analytics here...</p>

      <button 
        onClick={() => navigate("/user/dashboard")} 
        style={{ width: "100%", padding: "10px", cursor: "pointer", backgroundColor: "blue", color: "white" }}
      >
        🔙 Back to Dashboard
      </button>
    </div>
  );
}

export default Reports;
