
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// This is a test secret key. Replace it by setting a secret in your Supabase project.
const TURNSTILE_SECRET_KEY_TEST = '1x0000000000000000000000000000000AA';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, non_profit_name, email, message, token } = await req.json()

    if (!token) {
        return new Response(JSON.stringify({ error: 'Captcha token is missing.' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        });
    }

    // IMPORTANT: Set your Cloudflare Turnstile secret key in your Supabase project secrets.
    // Go to Project Settings > Edge Functions and add a new secret named CLOUDFLARE_TURNSTILE_SECRET_KEY.
    const secretKey = Deno.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY') || TURNSTILE_SECRET_KEY_TEST;
    
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    
    const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
    });
    
    const outcome = await verificationResponse.json();
    
    if (!outcome.success) {
      console.error('Captcha verification failed:', outcome['error-codes']);
      return new Response(JSON.stringify({ error: 'Invalid captcha token. Please try again.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
    
    // Create Supabase client to interact with the database
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Insert data into the 'contact_submissions' table
    const { error: insertError } = await supabaseClient
      .from('contact_submissions')
      .insert({ name, non_profit_name, email, message });

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      throw insertError;
    }

    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('Function error:', error);
    return new Response(JSON.stringify({ error: error.message || 'An unexpected error occurred.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
