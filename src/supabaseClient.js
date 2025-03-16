import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and API key
const SUPABASE_URL = "https://qijvnwgbyiieoojxmdfb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpanZud2dieWlpZW9vanhtZGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNTE1MzMsImV4cCI6MjA1NzYyNzUzM30.DXIeq_a3rF2y9qTWOnkg4fm_ICmaNS50rmhRCkASHl4";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
