👥 Podział ról i zadań:
---------------------------------------------------------------------------------------------------------------------------------------
1. Frontend Developer (HTML/CSS/JS)
Skupia się na wizualnej stronie aplikacji – to, co widzi użytkownik.

Zadania:
 1. Utworzyć formularz z polem do wpisania nastroju i przyciskiem Generate

 2. Przygotować miejsce na wyświetlenie playlisty

 3. Ostylować layout (CSS – responsywnie i czytelnie)

 4. Obsłużyć kliknięcie przycisku (addEventListener) i wysłać żądanie do backendu (fetch POST)

 5. Wyświetlić playlistę po otrzymaniu odpowiedzi

 6. Obsłużyć przypadki błędów (np. brak odpowiedzi z serwera)
-------------------------------------------------------------------------------------------------------------------------------------------------------------
2. Backend Developer (Node.js + Express)
Tworzy serwer, który pośredniczy między frontendem a OpenAI API.

Zadania:
 1. Zainicjować projekt Node.js (npm init)

 2. Zainstalować potrzebne pakiety: express, cors, dotenv, openai

 3. Skonfigurować podstawowy serwer Express

 4. Utworzyć endpoint POST /api/playlist, który:

- odbiera nastroje z frontend

- tworzy prompt (np. "Stwórz listę 5 piosenek do nastroju: chill")

- wysyła zapytanie do OpenAI (ChatGPT lub GPT-4-turbo)

- zwraca wynik jako JSON

 5. Wczytywać klucz API z .env

 6. Włączyć CORS żeby frontend mógł się połączyć
--------------------------------------------------------------------------------------------------------------------------------------------------------------
3. AI Prompt Engineer / API Integrator
Skupia się na jakości odpowiedzi z OpenAI i optymalizacji promptów.

Zadania:
 1. Stworzyć jasny, zwięzły prompt np.:

"Create a short playlist of 5 popular songs that match a [MOOD] mood. Include artist names."

 2. Przetestować kilka wersji promptu dla różnych nastrojów

 3. Zadbać o spójność formatowania (np. numeracja, podział na linijki)

 4. Wspierać Backend Developera w testowaniu i debugowaniu

 5. Zapisać finalny prompt i uwagi do pliku prompt-notes.md w repozytorium
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
4. DevOps / GitHub Manager / Dokumentacja
Odpowiada za repozytorium, organizację pracy i dokumentację projektu.

Zadania:
 1. Stworzyć publiczne repozytorium na GitHubie

 Dodać plik README.md z:

- tytułem: VibeSmith

- krótkim opisem projektu

- celem projektu (np. "Generating playlists based on user mood using AI")

- listą członków zespołu

 2. Ustawić .gitignore dla node_modules, .env itp.

 3. Pomóc zespołowi w robieniu pierwszego commita/pusha

 4. Nadzorować feature-branches i pull requesty

 5. Tworzyć i zarządzać issues i milestones (np. MVP, Spotify API, UI polish)

 6. Zająć się wdrożeniem (jeśli zdecydujecie się wrzucić appkę np. na Vercel lub Render)
------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔄 Proponowany flow pracy
1. GitHub Manager tworzy repo i README.md

2. Frontend Developer tworzy szkielet interfejsu

3. Backend Developer tworzy API i testuje je lokalnie (np. z Postmanem)

4. AI Prompt Engineer testuje i ulepsza prompt, podsyła go backendowi

5. Frontend łączy się z API i wyświetla dane

6. Wspólne testy i poprawki

7. Każdy robi commit i merge przez GitHub
