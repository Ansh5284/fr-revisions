# Financial Reporting Revision Hub

A static site (HTML + CSS + JS, no build step) that reads a Google Drive folder and presents it by chapter:

- Slide decks (pptx / Google Slides)
- Infographics (images)
- Modules and notes (PDF / Docs)
- Practice questions and answers

Files are fetched live from the Drive API, so new uploads appear automatically.

## Setup

1. Open `config.js` and paste your `API_KEY` and `CLIENT_ID`.
2. Make sure `ROOT_FOLDER_ID` points to your Drive folder.
3. In GitHub: Settings > Pages > Deploy from a branch > `main` / `(root)`.

The API key and OAuth client ID are public by design in a static site. Protect them with the HTTP referrer and authorised-origin restrictions in Google Cloud Console. Never commit a client secret.
