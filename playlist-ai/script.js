document.getElementById('playlist-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const mood = document.getElementById('mood-input').value;
  const resultDiv = document.getElementById('playlist-result');

  // Placeholder playlist generation
  const fakePlaylist = [
    "1. Happy – Pharrell Williams",
    "2. Walking on Sunshine – Katrina and the Waves",
    "3. Best Day of My Life – American Authors",
    "4. Can't Stop the Feeling! – Justin Timberlake",
    "5. Uptown Funk – Bruno Mars"
  ];

  resultDiv.textContent = `🎶 VibeSmith Playlist for mood: "${mood}"\n\n` + fakePlaylist.join('\n');
});