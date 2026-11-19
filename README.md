# The Signal — Chapter 01

*"The radio picked up a voice."*

A slow-build sci-fi manga web reader. A quiet city morning, a school radio club, and a voice on the airwaves that knows a name it shouldn't — ending with the sky tearing open. Built with React + Vite, one image page at a time with a tap to advance.

**Author:** [jouhar-coder](https://github.com/jouhar-coder) · [See my other projects on GitHub](https://github.com/jouhar-coder?tab=repositories)

## What it is

A paged manga reader for Chapter 01 of *The Signal*:

1. Quiet radio-girl cover
2. Morning walk (Kaito & Aya)
3. Classroom radio club
4. Rooftop signal — the radio says Aya's name
5. The phones go dark
6. The masked stranger — "WE SEE YOU"

Pages are plain images with captions and dialogue from `src/dialogue.js`, so the story text is easy to edit without touching the reader code.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Tap or click to turn pages.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Project layout

| Path | What it is |
|---|---|
| `src/main.jsx` | The reader UI and page order (`PAGE_LAST` controls the page count) |
| `src/dialogue.js` | Captions and speech for every page |
| `src/style.css` | Styling |
| `public/generated/` | Manga page art (`manga-cover.jpg`, `page-one.jpg`, …) |

## Editing the story

Add or change lines in `src/dialogue.js`, and update the page list / `PAGE_LAST` in `src/main.jsx` if you add pages. Art lives in `public/generated/`.

## Tech

React 19 · Vite 7 · lucide-react
