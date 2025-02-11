import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Check your email for confirmation!");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      {error && <p style={styles.error}>{error}</p>}
      {message && <p style={styles.success}>{message}</p>}
      <form onSubmit={handleRegister} style={styles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={styles.input}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>

      <div style={styles.links}>
        <button onClick={() => navigate("/")} style={styles.linkButton}>Back to Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px", width: "100%" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#28a745", color: "#fff", border: "none" },
  error: { color: "red" },
  success: { color: "green" },
  links: { marginTop: "10px" },
  linkButton: { background: "none", border: "none", color: "#007bff", cursor: "pointer" }
};

export default Register;
