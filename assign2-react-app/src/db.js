// const express = require('express')
// const app = express();
import { createClient } from '@supabase/supabase-js';

// const supa = require('@supabase/supabase-js')

const supaUrl = 'https://xdazptsihkccawpccuhx.supabase.co'
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYXpwdHNpaGtjY2F3cGNjdWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNzg4ODMsImV4cCI6MjA1NTg1NDg4M30.sieRq6jNFIVu4dMXygNu4jrlHI_DkE7OEP5a-AdIGCk'

const supabase = createClient(supaUrl, supaAnonKey);


export default supabase