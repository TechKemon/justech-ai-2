// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dtyewgvsiloakbxstsqr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0eWV3Z3ZzaWxvYWtieHN0c3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTU3MDUsImV4cCI6MjA2Mzg3MTcwNX0.o9JpjFpxMesXyqZR1xxDprz7pAgBWJBbrthAc5niGwI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);