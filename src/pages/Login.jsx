import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulasi login sukses (cocokin dengan akun admin)
    if (email === "admin@example.com" && password === "admin123") {
      login("dummy-token"); // Simpan token ke localStorage
      navigate("/admin-dashboard"); // Redirect ke dashboard
    } else {
      alert("Login gagal! Coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between text-sm">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;