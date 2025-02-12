import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    
    return minLength && hasNumber && hasUpperCase;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!validatePassword(password)) {
      setError("Password harus minimal 8 karakter, mengandung angka, dan huruf besar.");
      return;
    }
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role: "user" }, 
        email_confirm: true,
      },
    });
  
    console.log("signUp Response:", data, error); // 🔍 DEBUG 
  
    if (error) {
      setError(error.message);
      alert(`Registrasi gagal: ${error.message}`); // ✅ Alert kalau gagal
    } else {
      alert("Registrasi berhasil! Silakan login."); // ✅ Alert sukses
      console.log("User registered:", data);
      navigate("/");
    }
  
    if (!data?.user) {
      setError("Registrasi gagal, coba lagi.");
      return;
    }
  
    // Insert user ke table profile
    const { error: dbError } = await supabase.from("profiles").insert([
      {
        id: data.user.id, // Pakai ID dari Supabase Auth
        email: data.user.email,
        role: "user",
      }
    ]);
  
    console.log("Insert to profile Response:", dbError); // 🔍 DEBUG
  
    if (dbError) {
      setError(dbError.message);
      return;
    }
  
    console.log("User registered & added to DB:", data);
    navigate("/"); // Redirect ke login
  };
  

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      {error && <p style={styles.error}>{error}</p>}
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
      <button onClick={() => navigate("/")} style={styles.linkButton}>Back to Login</button>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px", width: "100%" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none" },
  error: { color: "red" },
  linkButton: { background: "none", border: "none", color: "#007bff", cursor: "pointer", marginTop: "10px" }
};

export default Register;
