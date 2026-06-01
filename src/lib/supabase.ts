import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SobStory {
  id: string;
  name: string;
  job_title: string;
  story: string;
  created_at: string;
  approved: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  active: boolean;
}
