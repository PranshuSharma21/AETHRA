const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    team: 'Verdant Void',
    models: ['qwen-qwq-32b', 'llama-3.3-70b-versatile', 'IsolationForest', 'XGBoost', 'HoltWinters30d']
  });
});

app.get('/api/nasa-power', async (req, res) => {
  const lat = parseFloat(req.query.lat || 28.6358);
  const lon = parseFloat(req.query.lon || 77.2245);
  const url = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,PRECTOTCORR,RH2M,ALLSKY_SFC_SW_DWN&community=AG&longitude=${lon}&latitude=${lat}&start=20250915&end=20251015&format=JSON`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({ source: 'NASA POWER API', data });
  } catch (error) {
    res.status(502).json({ error: 'Failed to reach NASA POWER API' });
  }
});

app.post('/api/chat', async (req, res) => {
  const { query, activeRegion, telemetryContext, model = 'qwen-qwq-32b' } = req.body || {};
  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  if (!GROQ_API_KEY) {
    return res.status(503).json({ error: 'GROQ_API_KEY environment variable not set on Render' });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: `You are the environmental intelligence assistant built by team Verdant Void. Answer the user's question in 2 to 3 concise, factual sentences using the live satellite telemetry context. Active region: ${activeRegion}. All stations context: ${telemetryContext}`
          },
          { role: 'user', content: query }
        ],
        temperature: 0.2,
        max_tokens: 240
      })
    });

    const data = await groqRes.json();
    const rawText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    const cleanAnswer = (rawText || 'Unable to generate response.').replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    res.json({ answer: cleanAnswer, model });
  } catch (err) {
    res.status(500).json({ error: 'Upstream LLM request failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Verdant Void backend listening on port ${PORT}`);
});