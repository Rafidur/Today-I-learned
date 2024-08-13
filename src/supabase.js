import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qzzyjybcanedfhhomhbg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6enlqeWJjYW5lZGZoaG9taGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MTEyMDUsImV4cCI6MjAzNzQ4NzIwNX0.5jhgyF5MBzrQKTQLGtQXIJut8THvniFa89pXVFLsJlA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
