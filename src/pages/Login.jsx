import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Login pakai email & password
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      return;
    }

    // Ambil user setelah login
    const { user } = data;
    if (user) {
      const role = user.user_metadata?.role;

      // Cek role dan redirect
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
      </form>

      <div style={styles.links}>
        <button onClick={() => navigate("/register")} style={styles.linkButton}>Register</button>
        <button onClick={() => navigate("/forgot/password")} style={styles.linkButton}>Forgot Password?</button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px", width: "100%" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none" },
  error: { color: "red" },
  links: { marginTop: "10px", display: "flex", justifyContent: "space-between" },
  linkButton: { background: "none", border: "none", color: "#007bff", cursor: "pointer" }
};

export default Login;
