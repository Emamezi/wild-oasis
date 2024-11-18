import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kqntyyiksuhjoopllmsl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbnR5eWlrc3Voam9vcGxsbXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NjQzMzAsImV4cCI6MjA0NzE0MDMzMH0.29oLe0vsR_EZB4L9XuP47pd28rvKnOsqq4vD_0UwtHw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
