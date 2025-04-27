
document.getElementById("playlist-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const mood = document.getElementById("mood").value;
    const activity = document.getElementById("activity").value;
    const genre = document.getElementById("genre").value;
    const combinedPrompt = `${mood} ${activity} ${genre}`.trim();
    
    const resultsDiv = document.getElementById("results");
    const generateBtn = document.getElementById("generate-btn");
    
    generateBtn.disabled = true;
    generateBtn.textContent = "Generowanie...";
    resultsDiv.innerHTML = "<div class='loading'>🎵 Szukamy idealnych utworów...</div>";
    
    try {
        const response = await fetch("https://twoj-backend.onrender.com/generate-playlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mood: combinedPrompt })
        });

        if (!response.ok) throw new Error(`Błąd serwera: ${response.status}`);
        
        const data = await response.json();
        
        if (!data.playlist?.length) {
            resultsDiv.innerHTML = "<div class='error'>Nie znaleziono utworów. Spróbuj innych ustawień!</div>";
            return;
        }

        resultsDiv.innerHTML = `
            <h3>Twoja playlista: ${combinedPrompt}</h3>
            <div class="song-list">
                ${data.playlist.map(track => {
                    const [title, artist] = track.title.split(" – ");
                    return `
                        <div class="song-card">
                            <div class="song-info">
                                <div class="song-title">${title}</div>
                                <div class="song-artist">${artist}</div>
                            </div>
                            <a href="${track.url}" target="_blank" class="spotify-link">Odtwórz</a>
                        </div>
                    `;
                }).join("")}
            </div>
        `;
        
    } catch (error) {
        console.error("Error:", error);
        resultsDiv.innerHTML = `
            <div class="error">
                <p>😢 Nie udało się wygenerować playlisty</p>
                <p class="error-detail">${error.message}</p>
            </div>
        `;
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = "🎧 Wygeneruj playlistę";
    }
});
