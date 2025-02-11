import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center">
          Enter your email and we will send you a link to reset your password.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
