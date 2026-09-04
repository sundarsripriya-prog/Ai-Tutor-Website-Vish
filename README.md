# AI tutors and instructors

An informational site about AI tutors as a computing innovation. It covers what
these tools are, where they came from, what they are doing to students, teachers,
school budgets, language communities, and the environment, and what should be
done about the central ethical problem they create.

The site's argument: the same AI model can help or harm a student depending on
whether it is built to withhold answers. The useful question is not whether
schools allow AI tutors, but how those tutors behave when a student is stuck.

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints, normally http://localhost:5173.

To produce the production build:

```bash
npm run build
npm run preview
```

## How the project is organized

| Path | What is in it |
|---|---|
| `src/content/` | Every piece of text and data on the site, one file per page |
| `src/App.jsx` | Remembers which page is open and shows it |
| `src/pages/` | The four pages: Home, Impacts, Recommendation, References |
| `src/components/` | Navigation and the shared pieces the pages reuse |
| `src/styles.css` | The design tokens and all styles |
| `research.md` | The research every fact on the site comes from |
| `design-system.md` | The colors, type, spacing, and component rules the site follows |
| `public/images/` | Official product images used on the site, credited in CREDITS.md |
| `PRD_AI_Tutors_Website.md` | The original project brief |
| `CREDITS.md` | Every piece of code here that I did not write from scratch |
| `CLAUDE.md` | The rules an AI assistant must follow when editing this repository |

## About the numbers

Every statistic on this site comes from `research.md` and is listed with its
source on the References page. Numbers are never rounded or restated in the code.
