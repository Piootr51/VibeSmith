document.getElementById("playlist-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const activity = document.getElementById("activity").value;
  const genre = document.getElementById("genre").value;
  const combinedPrompt = `${mood} ${activity} ${genre}`.trim();

  const resultsDiv = document.getElementById("results");
  const generateBtn = document.getElementById("generate-btn");

  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";
  resultsDiv.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>🎵 Finding your vibe...</p>
    </div>
  `;

  try {
    const response = await fetch("https://vibesmith-backend.onrender.com/generate-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood: combinedPrompt })
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();

    if (!data.playlist?.length) {
      resultsDiv.innerHTML = "<div class='error'>No tracks found. Try different options!</div>";
      return;
    }

    resultsDiv.innerHTML = `
      <h3>Your playlist: ${combinedPrompt}</h3>
      <div class="song-list">
        ${data.playlist.map(track => {
          const [title, artist] = track.title.split(" – ");
          return `
            <div class="song-card">
              ${track.image ? `<img src="${track.image}" alt="Album cover" class="album-cover" />` : ""}
              <div class="song-info">
                <div class="song-title">${title}</div>
                <div class="song-artist">${artist}</div>
              </div>
              <a href="${track.url}" target="_blank" class="spotify-link">Play</a>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } catch (error) {
    console.error("Error:", error);
    resultsDiv.innerHTML = `
      <div class="error">
        <p>😢 Failed to generate playlist</p>
        <p class="error-detail">${error.message}</p>
      </div>
    `;
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = "🎧 Generate Playlist";
  }
});
