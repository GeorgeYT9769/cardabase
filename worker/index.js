export default {
  async fetch(request, env) {
    // 1. Handle CORS Preflight Requests (Required when calling from a web browser)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*', // Change '*' to 'https://yourwebsite.com' for better security
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // 2. Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    try {
      const data = await request.json();
      
      // Basic validation to make sure content exists
      if (!data.content) {
        return new Response('Missing content', { 
          status: 400,
          headers: { 'Access-Control-Allow-Origin': '*' }
        });
      }

      // 3. Forward the message to Discord
      // Note: env.DISCORD_WEBHOOK_URL must be set in your Cloudflare Worker Secrets
      const discordResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: data.content,
        }),
      });

      // 4. Return the result back to the frontend
      if (discordResponse.ok) {
        return new Response(JSON.stringify({ success: true }), { 
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
          }
        });
      } else {
        return new Response(JSON.stringify({ error: 'Discord API Error' }), { 
          status: 502,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
          }
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });
    }
  },
};
