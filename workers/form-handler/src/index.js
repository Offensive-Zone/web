export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    try {
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), {
          status: 400,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }

      const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      const body = {
        from: { address: "sales@offensive-zone.com", name: "Offensive Zone" },
        to: ["arreaza.cesara@gmail.com", "edgardo.krause@gmail.com"],
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        reply_to: email,
      };

      const resp = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${env.ACCOUNT_ID}/email/sending/send`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.CF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!resp.ok) {
        const err = await resp.text();
        console.error("Send error:", resp.status, err);
        return new Response(JSON.stringify({ error: `API error (${resp.status}): ${err.substring(0, 200)}` }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
