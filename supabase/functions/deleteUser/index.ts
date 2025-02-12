import { serve } from "sift";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

serve(async (req) => {
  try {
    const { userId } = await req.json();
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized request" }), { status: 401 });
    }

    const accessToken = authHeader.replace("Bearer ", "");

    const supabaseUrl = Deno.env.get("https://mvzzvidpleenjtqixbfw.supabase.co")!;
    const supabaseAnonKey = Deno.env.get("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12enp2aWRwbGVlbmp0cWl4YmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMTM1ODEsImV4cCI6MjA1NDg4OTU4MX0.-awLGtPnflkv1Ate961YSGWmkQRESO-jGktmhYx-p7k")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: `Bearer ${accessToken}` } },
    });

    // Hapus dari profiles
    const { error: profileError } = await supabase.from("profiles").delete().eq("id", userId);
    if (profileError) throw profileError;

    // Hapus dari Supabase Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);
    if (authError) throw authError;

    return new Response(JSON.stringify({ message: "User deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
