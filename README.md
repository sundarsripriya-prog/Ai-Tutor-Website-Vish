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

## How the project is organised

| Path | What is in it |
|---|---|
| `src/content.js` | Every piece of text and data on the site, with a source link on each row |
| `src/pages/` | The three pages: Home, Impacts, Recommendation |
| `src/components/` | Navigation and the shared pieces the pages reuse |
| `src/styles.css` | The design tokens and all styles |
| `PRD_AI_Tutors_Website.md` | The research document every fact on the site comes from |
| `CREDITS.md` | Every piece of code here that I did not write from scratch |
| `CLAUDE.md` | The rules an AI assistant must follow when editing this repository |

## About the numbers

Every statistic on this site was checked against the original paper, government
report, or company disclosure, and each one links to that source. Several were
corrected during fact-checking, so they are not rounded or restated anywhere in
the code. Three of the strongest sources are working papers rather than
peer-reviewed articles, which the site states on the page rather than hiding.
