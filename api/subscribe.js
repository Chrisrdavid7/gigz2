// api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      const { email, fields = {}, groups } = req.body || {};
      if (!email) return res.status(400).json({ message: 'email required' });
  
      const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILERLITE_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, fields, groups })
      });
  
      const data = await mlRes.json();
      if (!mlRes.ok) return res.status(mlRes.status).json(data);
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'server_error' });
    }
  }
  