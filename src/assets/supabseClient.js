import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://stjrdjxugpuvmvhqobik.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0anJkanh1Z3B1dm12aHFvYmlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDA4MTQ5NiwiZXhwIjoyMDM1NjU3NDk2fQ.EoouqyFRLi7pRyQLnVM3Mi82M-8ofD7VWaKGFIl-ofU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
