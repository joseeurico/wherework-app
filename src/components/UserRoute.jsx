import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

function UserRoute() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error.message);
        setLoading(false);
        return;
      }

      if (data.user && data.user.user_metadata?.role === "user") {
        setUser(data.user);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
}

export default UserRoute;
