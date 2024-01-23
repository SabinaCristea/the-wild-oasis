import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://usioiuiauydnbpfwfawx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaW9pdWlhdXlkbmJwZndmYXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTMxNzksImV4cCI6MjAyMTU4OTE3OX0.wI2UbBHIjT5ZZBygq5YTXSQyR-xI-4kX2Z4K-eQR8Iw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
