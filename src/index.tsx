import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {SessionContextProvider} from "@supabase/auth-helpers-react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient("https://ephggfeoiybtnxmhdfek.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaGdnZmVvaXlidG54bWhkZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1MjI1MDMsImV4cCI6MjAzNTA5ODUwM30.9C5OT_r7lzxMHR1-8nErE2B-6_Q9fRnP0OCz5JnlfaE")

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <SessionContextProvider supabaseClient={supabase}>
        <App/>
    </SessionContextProvider>
);

