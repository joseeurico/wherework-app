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
    navigate("/");
  };

  const styles = {
    container: { maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" },
    button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#dc3545", color: "#fff", border: "none", marginTop: "10px" }
  };

  return (
    <div style={styles.container}>
      <h2>User Dashboard</h2>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDashboard;
