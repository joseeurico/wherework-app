import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Register</button>
        </form>
        <p className="text-sm text-center">
          Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
