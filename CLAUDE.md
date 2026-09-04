# AI Tutors Website

An informational React site about AI tutors as a computing innovation, built for a
school research project. The full content spec, verified statistics, source list,
and design tokens are here: @PRD_AI_Tutors_Website.md

## The one rule that matters most

Every number on this site was checked against the original paper. Some were wrong
before they were corrected. Do not change, round, restate, or "simplify" any
statistic, sample size, or finding from the PRD. If a sentence containing a number
needs rewriting, keep the number and its caveat exactly as written.

Examples of caveats that must survive any edit:
- The Nigeria trial had 657 students in the program and 671 in the control group.
- The gender finding carries the authors' own warning about one girls-only school.
- Khanmigo pricing is vendor-stated and not independently audited.
- The guardrailed group avoided harm but did not beat the control group.

## Do not invent content

See PRD Section 13. Every factual claim traces to a source in PRD Section 9.
You may write prose that connects or explains what is already in the PRD.
You may not add a new statistic, study, name, date, quotation, testimonial, or
invented scenario. No lorem ipsum, no "coming soon", no placeholder statistics.
If a section feels thin, leave it thin. A shorter honest page is the right outcome.

## Writing rules for site copy

- No em dashes anywhere.
- Sentence case headings. The only all-caps text is the 12px eyebrow label above a section heading, one per section, as set in design-system.md.
- Explain a statistic in the same sentence that introduces it.
- Attribute findings in prose: "Researchers at Wharton found..." not a bare citation.
- State the limitation whenever a finding has one.

## Code rules

I have to be able to explain every line of this code out loud. Write it so a
first-year student could read it.

- Plain, boring code over clever code. No golf.
- One idea per line. No chained ternaries, no nested ternaries, no chained array
  methods more than one deep.
- Name things in full words. `impactRows`, not `d` or `arr`.
- Prefer an if statement over a ternary when the branches are more than a few words.
- Prefer a named function over an inline arrow when the logic is more than one line.
- Do not create an abstraction that is used only once.
- Do not add a library unless I asked for it. State the reason if you think one is needed.
- Comments explain why, not what. Do not comment obvious lines.
- No TypeScript unless I ask. Plain JSX.

## Attribution rule, non-negotiable

Any code not written from scratch in this repo must be wrapped in the borrowed-code
markers defined in the PRD, and listed in CREDITS.md. This includes UI components
from 21st.dev, shadcn/ui, Tailwind UI, MDN, Stack Overflow, or documentation examples.
If you adapt something, mark it and say what changed.

## Structure

- Content lives in `src/content/`, one file per page. Components stay presentational.
- Page components: `Home`, `Impacts`, `Recommendation`, `References`.
- Visual rules live in `design-system.md`. Content comes only from `research.md`.
- Navigation is `useState` in `App`, not a router.
- Every statistic renders with a working source link.
