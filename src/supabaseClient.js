import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mvzzvidpleenjtqixbfw.supabase.co"; // Ganti dengan URL dari Supabase
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12enp2aWRwbGVlbmp0cWl4YmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMTM1ODEsImV4cCI6MjA1NDg4OTU4MX0.-awLGtPnflkv1Ate961YSGWmkQRESO-jGktmhYx-p7k"; // Ganti dengan Anon Key dari Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
