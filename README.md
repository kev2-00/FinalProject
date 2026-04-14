# Ethics & Law Quiz

This project is a browser-based quiz app that lets users answer scenario questions about:

- CFAA
- DMCA
- Responsible Disclosure & Privacy

It is built with plain HTML, CSS, and JavaScript, with quiz content stored in JSON and bundled into `js/data.js`.

## Project Structure

- `index.html` - main entry point for the app
- `css/` - styles for the interface
- `js/quiz.js` - quiz flow, topic selection, scoring, and question rendering
- `js/results.js` - results screen rendering
- `js/data.js` - generated question bank used by the browser
- `data/` - source JSON files for quiz questions
- `scripts/sync_quiz_data.py` - rebuilds `js/data.js` from the JSON files in `data/`

## How to Run

This project does not need a build step.

### Option 1: Open It Directly

Because the quiz data is already bundled into `js/data.js`, you can run the project by opening the HTML file directly:

1. Select a topic
2. Start the quiz in your browser

### Option 2: Run a Local Server

If you prefer to serve it locally:

1. Open PowerShell
2. Change into the project folder:



3. Start a simple local server:

```powershell
python -m http.server 8000
```

4. Open this URL in your browser:


http://localhost:8000
```

## Requirements

- A modern web browser
- Python 3 only if you want to run the local server or rebuild `js/data.js`
