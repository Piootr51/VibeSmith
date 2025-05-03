const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://vibesmith.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
let spotifyAccessToken = '';

async function fetchSpotifyToken() {
  const auth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  spotifyAccessToken = response.data.access_token;
}

app.post('/generate-playlist', async (req, res) => {
  const { mood, activity, era, genres } = req.body;

  if (!mood || !activity || !era || !Array.isArray(genres)) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Budowanie promptu
  const genreText = genres.length > 0 ? `genres: ${genres.join(', ')}` : '';
  const prompt = `Suggest 10 songs (artist and title) that fit this mood: ${mood}, activity: ${activity}, era: ${era}${genreText ? `, and ${genreText}` : ''}.`;

  try {
    const gptResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const gptText = gptResponse.data.choices[0].message.content;
    const lines = gptText.split('\n').filter(line => line.trim());
    const songList = lines.map(line => {
      const match = line.match(/\d+\.\s*(.+?)\s*[-–]\s*(.+)/);
      return match ? `${match[1]} ${match[2]}` : line;
    });

    if (!spotifyAccessToken) await fetchSpotifyToken();

    const playlist = [];

    for (let song of songList) {
      const searchRes = await axios.get('https://api.spotify.com/v1/search', {
        headers: { Authorization: `Bearer ${spotifyAccessToken}` },
        params: { q: song, type: 'track', limit: 1 }
      });

      const item = searchRes.data.tracks.items[0];
      if (item) {
        playlist.push({
          title: `${item.name} – ${item.artists[0].name}`,
          url: item.external_urls.spotify,
          image: item.album.images[0]?.url || null
        });
      }
    }

    res.json({ playlist });
  } catch (error) {
    console.error('Error generating playlist:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate playlist' });
  }
});

app.get('/', (req, res) => {
  res.send('VibeSmith backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
