document.getElementById('playlist-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const mood = document.getElementById('mood-input').value.trim();
  const resultDiv = document.getElementById('playlist-result');
  const loadingDiv = document.getElementById('loading');

  if (!mood) return;

  resultDiv.innerHTML = '';
  loadingDiv.style.display = 'block';

  try {
    const response = await fetch('http://localhost:3001/generate-playlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood })
    });

    const data = await response.json();

    if (data.playlist && data.playlist.length > 0) {
      const list = document.createElement('ul');
      data.playlist.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${song.url}" target="_blank">${song.title}</a>`;
        list.appendChild(li);
      });
      resultDiv.appendChild(list);
    } else {
      resultDiv.textContent = 'No songs found for that mood. Try something else!';
    }
  } catch (error) {
    console.error(error);
    resultDiv.textContent = 'An error occurred. Please try again later.';
  } finally {
    loadingDiv.style.display = 'none';
  }
});
