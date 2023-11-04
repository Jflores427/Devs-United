import { createClient } from '@supabase/supabase-js'

const URL = 'https://tqjsbqgdhbhhqfseqxtq.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxanNicWdkaGJoaHFmc2VxeHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjMwNzIsImV4cCI6MjAxNDYzOTA3Mn0.f8SJKB_o5ZgATGpgjPEO7MPDQPcPC6NG13tvb_HKEeg';

const supabase = createClient(URL, API_KEY);

export default supabase;