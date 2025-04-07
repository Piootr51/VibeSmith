👥 Podział ról i zadań:
1. Frontend Developer (HTML/CSS/JS)
Skupia się na wizualnej stronie aplikacji – to, co widzi użytkownik.

Zadania:
 Utworzyć formularz z polem do wpisania nastroju i przyciskiem Generate

 Przygotować miejsce na wyświetlenie playlisty

 Ostylować layout (CSS – responsywnie i czytelnie)

 Obsłużyć kliknięcie przycisku (addEventListener) i wysłać żądanie do backendu (fetch POST)

 Wyświetlić playlistę po otrzymaniu odpowiedzi

 Obsłużyć przypadki błędów (np. brak odpowiedzi z serwera)

2. Backend Developer (Node.js + Express)
Tworzy serwer, który pośredniczy między frontendem a OpenAI API.

Zadania:
 Zainicjować projekt Node.js (npm init)

 Zainstalować potrzebne pakiety: express, cors, dotenv, openai

 Skonfigurować podstawowy serwer Express

 Utworzyć endpoint POST /api/playlist, który:

odbiera nastroje z frontend

tworzy prompt (np. "Stwórz listę 5 piosenek do nastroju: chill")

wysyła zapytanie do OpenAI (ChatGPT lub GPT-4-turbo)

zwraca wynik jako JSON

 Wczytywać klucz API z .env

 Włączyć CORS żeby frontend mógł się połączyć

3. AI Prompt Engineer / API Integrator
Skupia się na jakości odpowiedzi z OpenAI i optymalizacji promptów.

Zadania:
 Stworzyć jasny, zwięzły prompt np.:

"Create a short playlist of 5 popular songs that match a [MOOD] mood. Include artist names."

 Przetestować kilka wersji promptu dla różnych nastrojów

 Zadbać o spójność formatowania (np. numeracja, podział na linijki)

 Wspierać Backend Developera w testowaniu i debugowaniu

 Zapisać finalny prompt i uwagi do pliku prompt-notes.md w repozytorium

4. DevOps / GitHub Manager / Dokumentacja
Odpowiada za repozytorium, organizację pracy i dokumentację projektu.

Zadania:
 Stworzyć publiczne repozytorium na GitHubie

 Dodać plik README.md z:

tytułem: VibeSmith

krótkim opisem projektu

celem projektu (np. "Generating playlists based on user mood using AI")

listą członków zespołu

 Ustawić .gitignore dla node_modules, .env itp.

 Pomóc zespołowi w robieniu pierwszego commita/pusha

 Nadzorować feature-branches i pull requesty

 Tworzyć i zarządzać issues i milestones (np. MVP, Spotify API, UI polish)

 Zająć się wdrożeniem (jeśli zdecydujecie się wrzucić appkę np. na Vercel lub Render)

🔄 Proponowany flow pracy
GitHub Manager tworzy repo i README.md

Frontend Developer tworzy szkielet interfejsu

Backend Developer tworzy API i testuje je lokalnie (np. z Postmanem)

AI Prompt Engineer testuje i ulepsza prompt, podsyła go backendowi

Frontend łączy się z API i wyświetla dane

Wspólne testy i poprawki

Każdy robi commit i merge przez GitHub

Demo MVP 🎉
