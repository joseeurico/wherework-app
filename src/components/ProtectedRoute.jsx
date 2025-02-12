import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function ProtectedRoute({ role }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation(); // Detect perubahan route

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (data?.session) {
        const userData = data.session.user;
        if (userData?.user_metadata?.role === role) {
          setUser(userData);
        }
      }

      setLoading(false);
    };

    checkUser();
  }, [location.pathname]); // Cek ulang setiap kali route berubah

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" replace={true} />;

  return <Outlet />;
}

export default ProtectedRoute;
