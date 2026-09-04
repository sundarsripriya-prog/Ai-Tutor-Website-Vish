# Product Requirements Document
## AI Tutors and Instructors: An Informational Site

**Project type:** Multi-component React website
**Subject:** AI tutors and instructors as a computing innovation
**Author:** Vishwajit
**Status:** Ready to build

---

## 1. How to use this document

This PRD contains every piece of researched content the site needs, already verified against primary sources, plus the structure to organize it. Sections 6 through 8 are copy-ready: the text can go into components close to as written. Section 9 is the source list. Section 10 is the AI Log deliverable.

Two things to check before you publish:

- **Section 6.2 (history) needs date verification.** Those items came from earlier research rounds and were not re-verified in the most recent fact-check pass. Confirm each date against a primary source before it goes live.
- **Everything in Sections 7 and 8 has been verified** against the original papers, government reports, and company disclosures. Do not paraphrase the numbers loosely. The precision is what makes the site credible.

---

## 2. Project summary

### 2.1 What this site is

An informational site explaining what AI tutors are, where they came from, what they are doing to students, teachers, school budgets, language communities, and the environment, and what should be done about the central ethical problem they create.

### 2.2 The site's argument

Most coverage of AI in education asks whether schools should allow it. This site argues that is the wrong question. The evidence shows the same AI model can help or harm students depending entirely on whether it is built to withhold answers. The question is not whether AI tutors are permitted, but how they behave when a student is stuck.

That thesis should be visible on the Home page and paid off on the Recommendation page.

### 2.3 Success criteria

| Requirement | Where it is satisfied |
|---|---|
| Home component with history and applications | Section 6 |
| Impacts component covering culture, economy, environment for stakeholders | Section 7 |
| Recommendation component with ethical concern and recommendation | Section 8 |
| Multiple React components, minimum three pages | Section 5 |
| Working navigation between sections | Section 5.3 |
| Informational tone, written for a reader | Section 4 |
| Clear section organization and logical flow | Sections 6 through 8 |
| Appropriate headings | Specified per page |
| Intentional design choices | Section 3 |
| Repository link | Already obtained |
| AI Log, 5 prompts | Section 10 |

---

## 3. Design direction

### 3.1 The design idea

The site is about a gap: what a student can do with the tool versus without it. The design should make that gap a visible structural motif rather than decoration. Anywhere two numbers are compared, show them as a paired measurement with the distance between them emphasized. This is the signature element. Everything else stays quiet.

Avoid the default informational-site look of identical rounded cards in a three-column grid. The content is comparative, not modular.

### 3.2 Tokens

**Color**

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1A1D21` | Body text, headings |
| `--paper` | `#FCFCFA` | Page background |
| `--rule` | `#D8D6D0` | Hairlines, table borders |
| `--measured` | `#2F5D50` | Verified findings, positive impacts |
| `--deficit` | `#9E3B2E` | Harms, negative impacts, the gap |
| `--muted` | `#6B6862` | Captions, source attributions, dates |

Two accent colors only. Green marks what was measured and held up. Red marks the deficit. Do not use them decoratively, only semantically, so a reader learns the code within one screen.

**Type**

Two families, clearly distinct:
- Display and headings: a sturdy serif with real weight contrast
- Body and data: a neutral sans at a comfortable reading size

Body copy at 17 to 18px, line height 1.6, measure capped at 68 characters. Data tables may use tabular figures.

Do not use all caps labels, do not put an eyebrow above every heading, and do not accent one word of a headline in a different color.

**Layout**

Single column of text at a constrained measure, with data tables and comparison blocks allowed to break wider than the text column. That contrast between narrow prose and wide evidence is the layout's personality. Left aligned throughout.

**Motion**

One orchestrated moment only. Suggested: on the Home page, the two numbers in the signature comparison count into place once on load. Nothing else animates on scroll.

---

## 4. Audience, voice, and tone

**Audience:** A general reader who has heard AI is in schools and does not know what the research says. Assume no background in education policy or statistics.

**Voice rules**

- Explain a statistic in the same sentence you introduce it. Never let a number sit unexplained.
- Attribute findings inline in prose: "Researchers at Wharton found..." rather than a bare citation marker.
- Name the limitation whenever you state a finding that has one. This is a credibility asset, not a weakness.
- No second person instructions to the reader, no "as you can see," no rhetorical questions as headings.
- Sentence case headings.
- No em dashes anywhere in the site copy.

---

## 5. Architecture

### 5.1 Site map

```
/
├── Home                 What AI tutors are, where they came from, where they are used
├── Impacts              Economic, cultural, environmental
│   ├── Economic
│   ├── Cultural
│   └── Environmental
└── Recommendation       The ethical concern, the options, the recommendation
```

### 5.2 Component tree

```
App
├── Nav                     persistent, marks active page
├── Home
│   ├── Hero                thesis statement + signature comparison
│   ├── WhatItIs            definition and classification
│   ├── Timeline            history, chronological
│   └── Applications        current tools in use
├── Impacts
│   ├── ImpactTabs          switches between the three domains
│   ├── StakeholderTable    reusable, takes rows as props
│   └── HypothesisTable     environmental, different column shape
├── Recommendation
│   ├── ConcernStatement    the thesis and the lens
│   ├── CounterArgument     the strongest case against, then the answer
│   ├── SolutionRanking     the eight options
│   ├── TheRecommendation   three-part proposal
│   └── EvidenceBlock       what supports it, including limits
└── Shared
    ├── Section             heading + constrained text column
    ├── StatPair            the signature two-number comparison
    ├── SourceNote          inline attribution with link
    └── Footer              full source list
```

### 5.3 Navigation

Use React state in `App` to switch pages rather than a router. It satisfies the requirement, it has no dependencies, and it will not break if the site is opened from a file path.

```jsx
const [page, setPage] = useState('home');
```

`Nav` receives `page` and `setPage`. The active item must be visually distinct and marked with `aria-current="page"`.

### 5.4 Reusable data shape

Keep all content in a separate `content.js` so components stay presentational.

```js
export const economicImpacts = [
  {
    stakeholder: 'Students and families',
    valence: 'positive',
    impact: '...',
    evidence: '...',
    source: { label: 'World Bank', url: '...' }
  },
  // ...
];
```

`StakeholderTable` maps over an array of this shape. One component renders all three impact domains.

### 5.5 CLAUDE.md, copy and paste into the repository root

Claude Code does not have access to Claude.ai project chats. The two are separate products with separate context systems. Claude Code loads `CLAUDE.md` files from the filesystem when it starts, so this file is how the research reaches the build.

Save the block below as `CLAUDE.md` at the top level of the repository, next to `package.json`. Save this PRD in the same folder so the `@` import resolves.

```markdown
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
- Sentence case headings. No all-caps labels. No eyebrow labels above headings.
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

- Content lives in `src/content.js`. Components stay presentational.
- Page components: `Home`, `Impacts`, `Recommendation`.
- Navigation is `useState` in `App`, not a router.
- Every statistic renders with a working source link.
```

### 5.6 Code standards

The purpose of these rules is that you can be asked about any line and answer without hesitating. AI-written code tends to compress several ideas into one line, which reads as impressive and is hard to defend.

**What to reject if it appears in generated code**

| Reject | Ask for instead |
|---|---|
| `const c = r.filter(x => x.v === 'positive').map(x => x.s)` | Two separate steps with real names |
| Nested ternaries inside JSX | An if statement above the return, or a small helper |
| A `utils.js` with one function used once | Put the function next to where it is used |
| Optional chaining stacked three deep | Check the thing exists first, on its own line |
| A component that takes eight props | Split it, or pass one object with a named shape |
| `useMemo` or `useCallback` on a static list | Nothing. This site has no performance problem |

**A concrete before and after**

Hard to explain:

```jsx
{rows.filter(r => r.domain === active).map((r, i) => (
  <tr key={i} className={r.valence === 'positive' ? 'pos' : r.valence === 'negative' ? 'neg' : ''}>
```

Easy to explain:

```jsx
// Only show the rows for the tab the reader has open.
const visibleRows = rows.filter(row => row.domain === activeDomain);

// Green for positive impacts, red for negative. Set in CSS.
function rowClass(valence) {
  if (valence === 'positive') return 'impact-positive';
  return 'impact-negative';
}

// ...

{visibleRows.map(row => (
  <tr key={row.id} className={rowClass(row.valence)}>
```

Same behavior, and every line has one job you can point at.

**Give every content row a stable `id` in `content.js`** rather than using the array index as a React key. It is better practice and it is easier to explain than "the index of the item in the array."

### 5.7 Attribution convention for borrowed UI

Anything you did not write yourself gets marked in place and logged in one file. Two mechanisms, both simple.

**Mechanism one: in-file markers**

Wrap borrowed code in a comment block that names the source, the URL, and what you changed. The closing marker matters as much as the opening one, because it shows exactly where your own code resumes.

```jsx
/* === BORROWED CODE START ===================================
   Component: Animated Tabs
   From:      21st.dev
   URL:       https://21st.dev/components/animated-tabs
   Retrieved: 2026-08-31
   Changes:   Replaced their color classes with our tokens
              (--measured, --deficit). Renamed the `items` prop
              to `domains`. Removed the icon slot, unused here.
   =========================================================== */

export function ImpactTabs({ domains, active, onChange }) {
  // ... borrowed implementation, with my edits ...
}

/* === BORROWED CODE END ===================================== */
```

For a single borrowed line rather than a block, one comment above it is enough:

```jsx
// From MDN: pattern for respecting the reduced-motion setting.
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

**Mechanism two: `CREDITS.md` in the repository root**

One table, so a reader sees every outside dependency in one place without opening any component.

```markdown
# Credits

Code in this repository that I did not write from scratch. Every entry is also
marked inline with BORROWED CODE START and END comments at the location listed.

| What | Source | URL | Where it lives | What I changed |
|---|---|---|---|---|
| Animated tabs component | 21st.dev | https://21st.dev/... | `src/components/ImpactTabs.jsx` | Swapped colors to our tokens, renamed a prop, removed the icon slot |
| Reduced-motion media query | MDN | https://developer.mozilla.org/... | `src/components/StatPair.jsx` | Used as written |
| Table base styles | Tailwind docs | https://tailwindcss.com/... | `src/styles.css` | Changed border color and cell padding |

Everything not listed here was written for this project.
```

**Why this is worth the small effort:** if you are asked "did you write this," you have an answer that is specific, checkable, and immediately visible in the file. Unmarked borrowed code is the thing that actually causes problems, not borrowed code itself.

**Rule of thumb for what needs marking:** if you could not rewrite it from memory, mark it. Copying four lines from a docs page counts. Reading a docs page and then writing your own version does not.

### 5.8 Tech stack and file tree

**Stack, decided. Do not substitute.**

| Choice | Decision | Reason |
|---|---|---|
| Build tool | Vite (`npm create vite@latest -- --template react`) | Fast, minimal config, plain JSX |
| Language | JavaScript with JSX. No TypeScript | One less thing to explain |
| Styling | Plain CSS in `src/styles.css`, using CSS custom properties for the tokens in Section 3.2 | Every style is readable in one file and traceable to a token |
| Routing | None. `useState` in `App` | Satisfies the navigation requirement with no dependency |
| Dependencies | React and ReactDOM only, unless a UI component is deliberately borrowed and credited | Fewer things to justify |

If a UI library such as 21st.dev or shadcn/ui is used for a single component, that is fine, but it must follow Section 5.7 and appear in `CREDITS.md`.

**File tree to create**

```
ai-tutors-site/
├── CLAUDE.md                      the file from Section 5.5
├── CREDITS.md                     the table from Section 5.7
├── PRD_AI_Tutors_Website.md       this document
├── README.md                      what the site is, how to run it
├── index.html
├── package.json
└── src/
    ├── main.jsx                   mounts App
    ├── App.jsx                    holds page state, renders Nav + current page
    ├── styles.css                 tokens and all styles
    ├── content.js                 ALL text and data, no content in components
    ├── components/
    │   ├── Nav.jsx
    │   ├── Section.jsx            heading + constrained text column
    │   ├── StatPair.jsx           the signature two-number comparison
    │   ├── StakeholderTable.jsx   renders economic and cultural tables
    │   ├── HypothesisTable.jsx    renders the environmental table
    │   ├── SourceNote.jsx         inline attribution with link
    │   └── Footer.jsx             full source list
    └── pages/
        ├── Home.jsx
        ├── Impacts.jsx
        └── Recommendation.jsx
```

**StatPair spec.** Takes two labelled figures and renders them side by side with the contrast between them as the visual point, plus a caption for the citation.

```jsx
<StatPair
  left={{ figure: '48% better', label: 'on practice problems, using an unrestricted AI tutor' }}
  right={{ figure: '17% worse', label: 'on the exam taken without AI, the same students' }}
  caption='Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024.'
/>
```

Left figure uses `--measured`, right uses `--deficit`. On screens narrower than 640px the two figures stack, and the caption stays below both.

**Responsive rules.** One breakpoint at 640px. Below it: single column, tables become stacked blocks where each row shows its labels, navigation collapses to a horizontal row of text links. Do not build a hamburger menu for three links.

**Accessibility floor.** Visible focus outline on every link and button. `aria-current="page"` on the active nav item. Positive and negative impacts carry a text label, never color alone. Any motion wrapped in a `prefers-reduced-motion` check.

---

## 6. Home page

### 6.1 Hero

**Heading:** AI tutors and instructors

**Thesis paragraph:**

> An AI tutor is software that teaches a student one to one, answering questions, explaining steps, and adapting to what the student gets wrong. The research on whether these tools help is not mixed in the way people assume. It is precise. The same AI model can improve a student's learning or damage it, and the difference is whether the tutor is built to give answers or built to withhold them.

**Signature comparison (StatPair component):**

Label the two numbers from the Wharton study:

| 48% better | 17% worse |
|---|---|
| on practice problems, using an unrestricted AI tutor | on the exam taken without AI, the same students |

Caption underneath: *Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024.*

This single comparison is the whole site in two numbers. It belongs above the fold.

### 6.2 What an AI tutor is

**Definition.** Software that delivers individualized instruction, evaluates student responses, and adjusts what it presents next based on the student's performance.

**Classification.** AI tutors sit across three categories:

- **Narrow AI.** Every current system performs one bounded task, teaching within a subject domain. None generalizes beyond what it was built for.
- **Limited memory.** These systems retain a record of a student's prior answers and use it to shape later instruction. That memory is a performance log, not an understanding of the student.
- **Generative AI.** The current generation produces original explanations and responses rather than selecting from pre-written branches, which is what separates Khanmigo and GPT-based tutors from earlier systems.

**An important distinction to state plainly:** tracking which problems a student misses is not the same as understanding that the student is confused, bored, or discouraged. Systems that model another mind's mental state, sometimes called Theory of Mind AI, do not exist. An AI tutor is a pattern tracker with a conversational interface.

### 6.3 Timeline

**VERIFY ALL DATES IN THIS SECTION BEFORE PUBLISHING.**

Present chronologically. Numbered markers are appropriate here because this genuinely is a sequence.

| Era | Development | Why it matters |
|---|---|---|
| 1920s to 1950s | Pressey and Skinner teaching machines | Established the core loop still in use: present, respond, correct, advance |
| 1960s | PLATO computer-based education system | First large-scale networked instruction |
| 1970s | SCHOLAR | Early attempt at a system that could hold a dialogue about a subject |
| 1980s to 1990s | Cognitive Tutor | Instruction driven by a model of how students actually solve problems |
| 1990s onward | ALEKS | Assessment-driven adaptive sequencing at scale |
| 2010s | Duolingo | Adaptive instruction reaching a mass consumer audience |
| 2023 onward | Khanmigo and GPT-based tutors | Generative models producing original explanations rather than scripted branches |

**Framing sentence to include:** The lineage from ELIZA to modern chatbots shows the same pattern repeating. A system that produces fluent language is repeatedly mistaken for a system that understands. AI tutors inherit both the capability and the misreading.

### 6.4 Applications in use today

Write each as two or three sentences of prose, not as cards.

**Khanmigo.** Khan Academy's AI tutor, built to guide students through problems rather than solve them. Khan Academy's founder stated in October 2025 that it costs districts roughly 10 to 15 dollars per student per year and expected to reach one million United States students in the 2025 to 2026 school year, up from about 40,000 two years earlier.

**Duolingo.** Language instruction at consumer scale, reporting more than 50 million daily active users in late 2025. In 2025 the company described itself as AI-first and released 148 courses built with generative AI, roughly doubling in one year what had previously taken twelve.

**Microsoft Copilot in classrooms.** Used as the intervention in the World Bank's Nigeria trial, where 657 students worked with GPT-4 under teacher supervision in a six-week after-school program.

**Tutor CoPilot.** A Stanford system that assists human tutors in real time rather than replacing them, tested with roughly 900 tutors and 1,800 K-12 students.

**Chegg.** A homework-help company that shows the other side of the innovation. Its business was built on human-answered questions and has been displaced by generative AI.

---

## 7. Impacts page

### 7.1 Page structure

Three sections, either as tabs or as stacked sections with in-page anchors. Each opens with one paragraph of framing before the table.

The economic and cultural tables share a column shape. The environmental table uses a different one because it presents hypotheses rather than observed impacts. Say so in the framing text so the shift is not confusing.

### 7.2 Economic impact

**Framing paragraph:**

> AI tutors change who pays for instruction and who gets paid for it. The evidence below covers three groups: the families buying tutoring, the people whose jobs are tutoring, and the districts spending public money on the software.

**Table columns:** Stakeholder | Impact | Economic impact | Supporting evidence | Source

| Stakeholder | Impact | Description | Evidence | Source |
|---|---|---|---|---|
| Students and families | Positive | AI tutoring produced large gains at a per-student cost far below private tutoring. | A World Bank trial in Nigeria gave 657 students a six-week Copilot (GPT-4) tutoring program, with 671 as controls. It cost about $48 per student and raised scores 0.31 standard deviations, which the authors equate to roughly two extra years of schooling. | World Bank |
| Students and families | Negative | Only students with a device and connection can reach the tutor, and the gains skew toward those already ahead. | The same trial found that students with higher starting scores and wealthier families gained significantly more (p<0.05). NCES reports that 78% of children whose parents did not finish high school have home internet through a computer, versus 98% of children of college graduates. | NCES |
| Human tutors and tutoring companies | Positive | AI coaching raises the effectiveness of weaker tutors instead of replacing them, at negligible cost. | In Stanford's Tutor CoPilot trial, roughly 900 tutors and 1,800 K-12 students took part. Students whose tutors used the AI were 4 percentage points more likely to master a math topic, and 9 points more likely for the weakest tutors. It costs about $20 per tutor a year. | Stanford, arXiv |
| Human tutors and tutoring companies | Negative | Where AI replaces tutors instead of coaching them, tutoring and content jobs are cut at scale. | Chegg cut 248 jobs in May 2025 and 388 more in October, losing over half its staff in six months, and blamed the new realities of AI. Duolingo had already released about 10% of its contractors in late 2023 after shifting lesson writing to GPT-4. | CNBC |
| School districts and taxpayers | Positive | Per-pupil pricing lets a fixed budget give every student a tutor rather than a selected few. | Sal Khan told the administrators' association AASA in October 2025 that Khanmigo costs districts $10 to $15 per student a year, and expected to reach one million United States students in 2025 to 2026, up from about 40,000. These are vendor figures, not independently audited. | AASA |
| School districts and taxpayers | Negative | Districts buy AI tutors faster than anyone can prove they work, and federal policy encourages it without a vetting standard. | Stateline reported that districts are spending billions on AI tools while struggling to judge which are worth buying, and that the Education Department has provided little guidance on AI purchases. The US AI-in-education market generated about $2.5 billion last year. The Department's July 2025 grant priority steers federal money toward AI high-impact tutoring but sets no standard of evidence. | Stateline, Federal Register |

### 7.3 Cultural impact

**Framing paragraph:**

> Beyond cost, AI tutors change what a classroom feels like, who feels able to ask a question, what teachers trust, and which version of a language the world learns.

| Stakeholder | Impact | Description | Evidence | Source |
|---|---|---|---|---|
| Students | Positive | A tutor that never judges lowers the social cost of asking questions, which helps students who stay quiet in class. | In the World Bank Nigeria trial, girls gained significantly more than boys (+0.42, p<0.05), narrowing a gender gap that existed beforehand. The authors caution the result may come from one girls-only school that had scored lower than the others. | World Bank |
| Students | Negative | Students use the tutor as a crutch and end up weaker on their own than students who never had one. | Wharton researchers studied nearly 1,000 Turkish high school math students. Those using an unrestricted GPT-4 tutor later scored 17% worse on an exam taken without AI than students who never had it (p<0.05). A version built to withhold answers erased the harm. | SSRN |
| Teachers | Positive | AI assistants let one teacher differentiate for a whole room, changing what struggling students can expect. | Gallup and the Walton Family Foundation surveyed 2,232 United States public K-12 teachers. Nearly 60% agreed AI makes materials more accessible for students with disabilities, and weekly users reported saving 5.9 hours a week. | Gallup |
| Teachers | Negative | The people expected to run these tools mostly do not believe they help, so district purchases conflict with classroom practice. | Pew Research Center surveyed 2,531 United States public K-12 teachers. A quarter said AI does more harm than good in schools, and only 6% said more good than harm. In the Gallup survey, 57% said weekly student AI use would reduce independent thinking. | Pew |
| Minority language communities (Irish) | Positive | AI language tutors reach far more learners than the speaker community itself, turning an inherited language into a chosen one. | Ireland's 2022 census counted nearly 72,000 daily Irish speakers outside school, down 2% since 2016. Duolingo's Language Reports show Irish was the most-studied language in Ireland in 2020 and 2021, with about 1.10 million learners worldwide. | CSO Ireland, Duolingo |
| Minority language communities (Irish) | Negative | Replacing native speakers with AI means the version taught worldwide is one no community actually speaks. | Duolingo cut about 10% of its contractors in late 2023, declared itself AI-first, and released 148 AI-built courses in April 2025. Former contractors told The Washington Post that courses they wrote now contain numerous errors. | Washington Post |

### 7.4 Environmental impact

**Framing paragraph:**

> The environmental section works differently from the two above. Rather than observed impacts on stakeholders, it states four hypotheses about the physical systems an AI tutor depends on, the consequence each would produce, and the evidence bearing on it.

**Table columns:** Hypothesis | Environmental consequence | Positive or negative | Supporting evidence | Source

| Hypothesis | Consequence | Sign | Evidence | Source |
|---|---|---|---|---|
| **Energy system.** As AI tutors spread into everyday classrooms, every student question will trigger a model inference in a data center, raising electricity demand faster than the grid adds clean power. | Utilities meet the extra load with fossil-fuel plants, so CO2 emissions rise and regional grids strain at peak hours. | Negative | Duolingo reported over 50 million daily users in late 2025. The Department of Energy and Berkeley Lab found United States data centers used 176 TWh of electricity in 2023, 4.4% of the national total and triple the 58 TWh used in 2014, and project 325 to 580 TWh by 2028. | DOE, Duolingo |
| **Components and materials.** An AI tutor for every student needs both a school device and a share of GPU server capacity, raising demand for mined and refined critical minerals. | Mining and refining of copper, silicon, gallium, and rare earths increases in a few countries, bringing land damage and pollution. | Negative | U.S. PIRG cites an Education Week survey finding 90% of middle and high schools already give every student a device. The International Energy Agency estimates data center construction could raise global demand for copper by 2%, rare earths by 3%, and gallium by over 11% by 2030. | IEA, PIRG |
| **Waste.** Because an AI tutor only runs on a supported device, schools will replace student laptops on a short cycle, creating e-waste faster than it can be recycled. | Laptops with working parts are landfilled once software support ends, releasing toxic materials and stranding recoverable metals. | Negative | U.S. PIRG found school Chromebooks typically last four years, and only one-third of that e-waste is properly recycled. Google has since extended updates to 10 years for models released from 2021, helping newer devices only. Worldwide, the UN counted 62 million tonnes of e-waste in 2022. | PIRG, UN |
| **Natural systems.** The data centers answering students' tutoring questions will be cooled by evaporating local freshwater, and many sit in watersheds already under stress. | Aquifers and reservoirs lose water to evaporation, putting AI tutor servers in competition with farms and households in dry regions. | Negative | Li and colleagues, in Communications of the ACM (2025), estimate that 20 to 50 questions, about one tutoring session, use roughly 500 mL of freshwater once cooling and electricity generation are both counted. Bloomberg found about two-thirds of United States data centers built since 2022 sit in high water-stress areas. | ACM, Bloomberg |

**Note for the page:** All four hypotheses came out negative. That is the honest reading of the available evidence, not a framing choice. Say so on the page in one sentence so a reader does not assume the selection was slanted.

---

## 8. Recommendation page

### 8.1 The ethical concern

**Heading:** The concern

**Statement, presented prominently:**

> AI tutors accelerate students in the moment, but the ones that hand over the direct answers create dependency, meaning students appear to be learning while losing the ability to work without the tool.

**Lens:** Human dependence, because the harm is not that the AI is wrong or unfair but that students lose the ability to work without it. Transparency is a secondary lens, because the harm hides inside work that looks like success.

**Stakeholders to name:**

- **Students, K-12 and college.** They carry the dependency directly and cannot detect it in themselves.
- **Teachers.** The only people positioned to notice the gap between assisted and unassisted performance, and currently unable to see it in normal classwork.
- **School districts.** They control procurement, and therefore control whether students ever meet a guardrailed tutor.
- **AI tutor developers.** They decide whether the tool withholds answers or hands them over, which the evidence shows determines whether students learn or become dependent.

### 8.2 The strongest argument against this concern

Present the counterargument fairly before answering it. This section is a credibility asset.

**The counterargument:**

> This concern blames the AI when the evidence blames the design. The same students, the same tool, and the same subject showed no harm at all once the tutor was built to withhold answers, which makes dependency a fixable engineering choice rather than a reason to restrict AI tutors. The harm is real, but it is a product defect, not a technology problem, and the fix belongs to developers rather than students.

**The answer:**

> That is correct as far as it goes, and it is the reason this site does not argue for banning AI tutors. What it leaves out is which tool students actually reach for. Khanmigo has guardrails and costs districts money. General-purpose chatbots have none and are free. When a student is stuck on homework late at night, the tool that wins is the one that answers fastest. The counterargument is right about what should be built and silent about what gets used, and that gap is where policy has to operate.

### 8.3 Options considered

Present the eight ranked, with a short description each. Numbered markers are appropriate here because it is an ordered ranking.

1. **Teacher-loaded hint guardrails.** Teachers load the tutor ahead of time with hints for the mistakes they know students make in that unit, so the AI can guide but cannot hand over the answer.
2. **Locked study-mode for school accounts.** The district sets every student account to guided learning mode and disables answer mode, the same way a school blocks websites on school laptops.
3. **Attempt-first gating.** The tutor will not help until the student submits their own attempt, even a wrong one.
4. **AI-after-attempt classroom policy.** A teacher rule that work is done unaided first, and AI is used only afterward to check it and explain mistakes.
5. **Teach-back mode.** After the AI helps, the student explains the concept back to it while it plays a confused beginner and probes for gaps.
6. **Fading scaffolds.** Help shrinks automatically as mastery grows, from full walkthroughs early to nothing by assessment.
7. **Tutor-run closed-book sessions.** The AI periodically quizzes the student from memory on older material before unlocking help.
8. **Grade the struggle.** Students submit AI chat logs with homework, and the rubric awards points for attempting before asking.

**Why number one ranked first:** It is the only option with a randomized controlled trial behind it, and that trial tested this exact concern.

**Why number eight ranked last:** Chat logs are easy to fake, so it ends up rewarding the appearance of struggle, which is the same problem as the original concern.

**Hardest comparison, worth including on the page:** Choosing between what is proven and what is easy to scale. Teacher-loaded hints have a trial behind them, but that trial covered one course over a few weeks, so how well it holds across a district for a year is unknown. Locked study-mode has never been tested, but a district administrator turns it on once and every student is covered. Measured evidence beat a reasonable guess.

### 8.4 The recommendation

**Heading:** What should be done

**Lead sentence:** Society should stop asking whether schools allow AI and start regulating how the AI behaves when a student is stuck.

**Part one.** Districts should only license AI tutors that withhold direct answers by default, with the setting locked at the administrator level. Study mode already exists in most AI products, but the student controls the toggle, which makes it useless at 11pm on a hard problem.

**Part two.** Teachers should supply the hints, not build the whole system. The proven version had teachers pre-loading hints for mistakes they expected, but that workload only survives if it is written once at the district level and shared, the way pacing guides already are.

**Part three.** Schools should run short AI-free checkpoints on a regular schedule. Brief unassisted quizzes or two-minute oral explanations catch the gap between assisted and unassisted performance, since guardrails can fail and students still have unguarded tools at home.

**Summary line:** Guardrails to prevent the harm, checkpoints to catch it when prevention fails.

### 8.5 Why this recommendation

**Why not ban AI tutors.** The same study shows a well-designed tutor caused no harm, so banning throws away a tool that works when built correctly.

**Why not put the responsibility on students.** Students will not voluntarily make their homework harder, and the study found their self-perception was already wrong. They believed they were learning while they were not.

**Why both guardrails and checkpoints are needed.** Prevention alone cannot tell you whether it worked. Students with the unrestricted tutor did 48 percent better on practice work while getting worse at the skill, so every signal a teacher normally watches pointed the wrong way.

### 8.6 The evidence

**The study design is the core.** Researchers at Wharton randomly split nearly 1,000 Turkish high school math students into three groups. One had no AI. One had an unrestricted GPT-4 tutor. One had the same GPT-4 model loaded with teacher-written hints and built to refuse direct answers. All three then took the same exam with no AI available.

| Group | Result on the AI-free exam |
|---|---|
| No AI (control) | Baseline |
| Unrestricted GPT-4 tutor | 17 percent worse than control |
| Guardrailed GPT-4 tutor | No significant difference from control |

Two groups would only show that AI hurt. The third group is what proves the technology was not the problem.

**The mechanism.** The unrestricted tutor was only right about half the time, and students mostly just asked it for answers instead of working, which is why blocking answers is the specific fix rather than general advice about responsible use.

**Why checkpoints are necessary.** That same group got 48 percent more practice problems right while actually getting worse at math, so everything teachers normally look at made the AI seem like it was helping.

**Honest limitation, and it belongs on the page.** The guardrailed group avoided harm but did not outperform the control group, so the fix removes damage rather than producing a gain. The study is also a working paper rather than a peer-reviewed article.

### 8.7 Who is affected

> Students are influenced most, since they lose the shortcut and their practice scores will likely drop, but they gain the ability to perform without the tool. Teachers are affected both ways, gaining visibility they currently lack while absorbing the work of hints and oral checks, which is why hint-writing belongs at the district level. Districts and developers hold the real power, since districts control procurement with no evidence standard and developers decide whether the tutor withholds answers at all.

---

## 9. Source list

Sources are grouped by how much weight they carry, not alphabetically. When a claim could be supported by two sources, cite the one in the higher tier. When a source has a limitation, that limitation is stated here and must travel with the claim.

### Tier 1: Core evidence

These three carry the site's argument. Everything in the Recommendation page rests on the first one.

| # | Source | What it supports | URL | Status |
|---|---|---|---|---|
| 1 | Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024 | The central finding. Three-group design, 17% worse on the AI-free exam, 48% better on practice, tutor correct about 51% of the time, guardrails erased the harm | https://papers.ssrn.com/abstract=4895486 | Working paper, not peer-reviewed |
| 2 | World Bank, Edo State Nigeria AI tutoring trial | 657 treatment and 671 control, $48 per student, 0.31 SD, plus the SES and gender heterogeneity findings and the authors' own caveats | https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee | Working paper, not peer-reviewed |
| 3 | Wang et al., "Tutor CoPilot," Stanford | 900 tutors, 1,800 students, +4pp mastery, +9pp for lowest-rated tutors, about $20 per tutor per year | https://arxiv.org/abs/2410.03017 | Working paper. A later version reports 700+ tutors and 1,000 students |

### Tier 2: Institutional evidence

Government, intergovernmental, and large-sample survey research. Use these in preference to journalism whenever both cover the same fact.

| # | Source | What it supports | URL |
|---|---|---|---|
| 4 | NCES, Children's Internet Access at Home (2021 ACS) | 78% versus 98% home internet through a computer, by parental education | https://nces.ed.gov/programs/coe/indicator/cch/home-internet-access |
| 5 | Federal Register | The July 2025 proposed grant priority naming AI high-impact tutoring, with no evidence standard | https://www.federalregister.gov/documents/2025/07/21/2025-13650/proposed-priority-and-definitions-secretarys-supplemental-priority-and-definitions-on-advancing |
| 6 | Gallup and Walton Family Foundation | 2,232 teachers. 5.9 hours saved weekly, nearly 60% on accessibility, 57% on independent thinking | https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx |
| 7 | Pew Research Center | 2,531 teachers. 25% say more harm than good, 6% more good than harm | https://www.pewresearch.org/short-reads/2024/05/15/a-quarter-of-u-s-teachers-say-ai-tools-do-more-harm-than-good-in-k-12-education/ |
| 8 | Central Statistics Office Ireland, Census 2022 | Nearly 72,000 daily Irish speakers outside the education system, down 2% since 2016 | https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducation/ |
| 9 | Department of Energy and Lawrence Berkeley National Laboratory | 58 TWh in 2014 to 176 TWh in 2023, 4.4% of US electricity, 325 to 580 TWh projected by 2028 | https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers |
| 10 | International Energy Agency, Energy and AI | Copper 2%, rare earths 3%, gallium over 11% by 2030 | https://www.iea.org/reports/energy-and-ai/ai-and-energy-security |
| 11 | UN Global E-waste Monitor 2024 | 62 million tonnes generated in 2022, 22.3% formally recycled | https://ewastemonitor.info/the-global-e-waste-monitor-2024/ |
| 12 | Li et al., "Making AI Less Thirsty," Communications of the ACM 68(7), 2025 | About 500 mL of freshwater per 20 to 50 query conversation | https://arxiv.org/pdf/2304.03271 |

### Tier 3: Journalism and primary company disclosure

Used for events and figures no research paper covers. Each is original reporting or a company reporting on itself, never an aggregator.

| # | Source | What it supports | URL | Note |
|---|---|---|---|---|
| 13 | CNBC | Chegg cut 248 jobs May 2025 and 388 October 2025 | https://www.cnbc.com/2025/10/27/chegg-slashes-45percent-of-workforce-blames-new-realities-of-ai.html | Matches Chegg's SEC filing |
| 14 | Bloomberg | Duolingo cut about 10% of contractors, late 2023 | https://www.bloomberg.com/news/articles/2024-01-08/duolingo-cuts-10-of-contractors-in-move-to-greater-use-of-ai | Paywalled |
| 15 | Washington Post | Contractors report errors in courses they had written | https://www.washingtonpost.com/technology/2024/01/10/duolingo-ai-layoffs/ | Paywalled |
| 16 | TechCrunch | 148 AI-built courses released April 2025 | https://techcrunch.com/2025/04/30/duolingo-launches-148-courses-created-with-ai-after-sharing-plans-to-replace-contractors-with-ai | Only source for this specific figure |
| 17 | Stateline | Districts spending billions with little federal guidance, $2.5B US AI-education market | https://stateline.org/2026/08/12/schools-spend-billions-on-ai-but-struggle-to-figure-out-whats-worth-it/ | Widely syndicated, also carried by Education Week |
| 18 | Duolingo investor relations | More than 50 million daily active users | https://investors.duolingo.com/news-releases/news-release-details/duolingo-surpasses-50-million-daily-active-users-grows-dau-36 | Company's own disclosure |
| 19 | Duolingo Language Report | Irish most-studied language in Ireland, 2020 and 2021 | https://blog.duolingo.com/2021-duolingo-language-report/ | Company's own data |
| 20 | Google | Chromebook updates extended to 10 years for 2021 and later models | https://blog.google/products-and-platforms/products/education/automatic-update-extension-chromebook/ | Company's own announcement |
| 21 | Bloomberg | About two-thirds of US data centers built since 2022 sit in high water-stress areas | https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/ | Paywalled. Analysis of World Resources Institute and DC Byte data |

### Tier 4: Use with a stated caveat

Two sources are load-bearing but weaker than the rest. Their limitation must appear next to any claim they support.

| # | Source | What it supports | URL | Required caveat |
|---|---|---|---|---|
| 22 | AASA School Administrator, interview with Sal Khan | Khanmigo pricing and adoption figures | https://www.aasa.org/resources/resource/a-conversation-with-sal-khan | Vendor's own figures, stated in an interview, not independently audited. Always say so |
| 23 | U.S. PIRG, Chromebook Churn | Four-year device lifespan, one-third of e-waste recycled, 90% of middle and high schools give every student a device | https://pirg.org/edfund/resources/chromebook-churn-report-highlights-problems-of-short-lived-laptops-in-schools/ | An advocacy organization with a right-to-repair position. The 90% figure is PIRG citing a March 2021 Education Week survey, so it is second-hand |

### Known weaknesses, state these rather than hide them

1. **Three Tier 1 sources are working papers, not peer-reviewed articles.** This is normal in education economics and does not make them unreliable, but the site should say so once.
2. **Three sources are paywalled** (both Bloomberg pieces and the Washington Post). They are the original reporting so they stay, but a reader may not be able to open them.
3. **The environmental sources describe AI infrastructure in general, not AI tutors specifically.** DOE, IEA, UN, and Li et al. measure data centers and devices across all uses. The connection to AI tutors is an inference the hypotheses make explicit, which is exactly why that chart is framed as hypotheses rather than measured impacts. Do not present these as measurements of AI tutoring.
4. **One figure is second-hand.** The 90% device statistic is PIRG quoting Education Week. Cite it as such.

### Rule for the builder

Do not add sources. If a sentence needs support that is not in this list, the sentence should not be on the site.

---

## 10. AI Log deliverable

Five prompts required, each with the prompt used, what AI produced, changes made, and why. Draft below based on the actual research process. **Adjust the wording to match what you actually typed.**

### Prompt 1

**Prompt used:** Asked the AI to state the strongest counterargument to my ethical concern before explaining anything else, giving me the simple verdict first.

**What AI produced:** A verdict saying my original concern, that AI tutors teach biased and generalized information, measured AI against a bias-free education that has never existed, and that the learning gains were measured while the memorization harm was hypothetical.

**Changes made:** I abandoned the bias concern entirely and replaced it with dependency.

**Why:** The counterargument was correct. Every textbook is biased, so I had no standard to measure against, and I had no evidence for the harm I was claiming. Dependency was what I had actually been sensing, and it had a controlled trial behind it.

### Prompt 2

**Prompt used:** Asked for the ranking of eight possible solutions and specifically which comparisons were hardest.

**What AI produced:** A ranked list with teacher-loaded hint guardrails first and grade the struggle last, plus a comparison between the top two options that claimed teacher hint-writing "will not survive a real school year."

**Changes made:** I kept the ranking but cut the claim about the workload failing, and replaced it with the fact that the trial only covered one course over a few weeks.

**Why:** I asked where the workload claim came from and there was no source behind it. It was an inference stated as a fact. The narrower version is defensible because it describes what the study actually covered.

### Prompt 3

**Prompt used:** Asked the AI to fact-check every source in my impact charts and fix anything wrong.

**What AI produced:** After opening the original papers rather than working from summaries, it found that a sample size in my chart was wrong, said 800 students when the World Bank paper reported 657 in the program and 671 in the control group, and that I had stated a gender finding without the authors' own warning attached.

**Changes made:** Corrected the sample size, separated the two effect sizes that had been conflated, and added the caution about the girls-only school.

**Why:** The number was simply wrong, and omitting the authors' caveat would have overstated a finding they themselves flagged as uncertain.

### Prompt 4

**Prompt used:** Asked whether a specific figure in my evidence section was actually needed.

**What AI produced:** A recommendation to cut it, on the grounds that it was vendor-reported pricing from an interview rather than research, that the product was not part of the study, and that it answered a cost objection my recommendation never raised.

**Changes made:** Removed the pricing evidence from the recommendation section, leaving four points all drawn from the same study.

**Why:** Mixing a marketing figure into a research-based argument weakened it. The evidence is stronger when every point comes from the trial.

### Prompt 5

**Prompt used:** Asked the AI to reformat the charts so each fits on one page with readable body text.

**What AI produced:** A version that rendered as three pages in its own preview but overflowed in Word, splitting a row so a single word appeared alone on a new page.

**Changes made:** Shortened every evidence cell, locked table rows so they cannot split across pages, and rebuilt with extra vertical headroom.

**Why:** The AI was checking its output in one renderer and I was reading it in another. It could not see the actual problem until I sent a screenshot, which showed that verifying the output myself was necessary.

---

## 11. Build checklist

**Structure**
- [ ] Three page components exist: Home, Impacts, Recommendation
- [ ] Navigation switches between all three and marks the active page
- [ ] Content lives in a separate data file, not hardcoded in JSX
- [ ] At least three shared reusable components

**Content**
- [ ] Home covers definition, classification, history, and applications
- [ ] Impacts covers economic, cultural, and environmental with named stakeholders
- [ ] Recommendation states the concern, the lens, the counterargument, the ranking, and the proposal
- [ ] Every statistic has a source link
- [ ] The peer-review limitation note appears somewhere on the site

**Quality**
- [ ] Timeline dates verified against primary sources
- [ ] No em dashes in site copy
- [ ] Headings in sentence case, no all-caps labels
- [ ] Readable at 375px width
- [ ] Keyboard focus visible on nav and links
- [ ] Color is not the only signal for positive versus negative, add a text label

**Code I can explain**
- [ ] `CLAUDE.md` and `PRD_AI_Tutors_Website.md` both sit in the repository root
- [ ] `CREDITS.md` exists and lists every piece of outside code
- [ ] Every borrowed block is wrapped in BORROWED CODE START and END markers
- [ ] Each borrowed marker names the source, the URL, and what changed
- [ ] No chained ternaries and no array method chains more than one deep
- [ ] Variables are full words, not single letters
- [ ] React keys come from a stable `id`, not the array index
- [ ] Read every file top to bottom and rewrite any line you could not explain out loud

**Deliverables**
- [ ] Repository link
- [ ] AI Log with five prompts, filled in with your actual wording

---

## 12. Open items

1. **Timeline dates need verification.** Section 6.2 is the only unverified content in this document.
2. **Decide whether to include the environmental positive alternative.** Earlier research produced a positive energy-system hypothesis about AI tutoring replacing travel to tutoring centers, supported by an Open University study finding distance learning courses produced 85% fewer CO2 emissions per student. It was cut because the study predates generative AI. It could be included on the site with that limitation stated.
3. **Two paywalled sources.** Consider adding a note so readers are not surprised.

---

## 13. Content rules for whoever builds this

This section exists because the site will be built by an AI coding assistant working from this document. These are hard constraints, not preferences.

### 13.1 Do not invent content

Every factual claim on this site traces to a source in Section 9. If a page needs a sentence that is not already written in this PRD, that sentence may describe, connect, or explain what is already here, but it may not introduce a new fact.

**Specifically forbidden:**

- New statistics, percentages, dollar figures, dates, or sample sizes that do not appear in this document
- New named studies, researchers, companies, or products
- Quotations attributed to anyone
- Testimonials, fictional student or teacher voices, or invented scenarios
- Placeholder text such as lorem ipsum, "Coming soon," or `[insert statistic here]`
- Rounded or restated versions of the verified numbers
- Stock photography of students or classrooms, or any image standing in for evidence

**If a section feels thin, leave it thin.** A shorter honest page is the correct outcome. Do not pad.

### 13.2 Numbers are frozen

The following were corrected during fact-checking and must appear exactly as written:

| Fact | Correct form | What it was corrected from |
|---|---|---|
| Nigeria trial sample | 657 in the program, 671 in the control group | An earlier draft said 800 students |
| Nigeria effect size | 0.31 standard deviations, about two extra years of schooling | An earlier draft conflated this with the 0.24 English figure |
| Gender finding | Must carry the authors' caution about one girls-only school | The caveat was originally omitted |
| Duolingo users | More than 50 million daily active users | An earlier draft said 50.5 million |
| Chromebook lifespan | Four years, plus the note that Google extended updates to 10 years for 2021 and later models | The extension was originally missing |
| Khanmigo pricing | $10 to $15 per student per year, stated as vendor figures not independently audited | The audit caveat was originally missing |

### 13.3 Limitations stay visible

Three statements must survive to the published site. They are not hedging, they are what makes the argument credible:

1. The guardrailed group in the Wharton study avoided harm but did not outperform the control group.
2. Three of the strongest sources are working papers rather than peer-reviewed articles.
3. All four environmental hypotheses came out negative, which is the honest reading of the evidence rather than a framing choice.

### 13.4 Where the prose is not yet written

Sections 6.4, 7.2, 7.3, and 7.4 give framing sentences and full evidence text, but leave the connective prose to the builder. In those places, write only what links the verified material together. When in doubt, use the evidence sentence as written and add nothing.

---

## 14. Research completed but not used on the site

Recorded so nothing is lost and so it is clear what was deliberately left out.

**Superseded by the change in ethical concern.** The project originally framed the concern around AI tutors teaching biased or generalized information. That was abandoned after the counterargument showed it measured AI against a bias-free education that has never existed, and that the harm was unevidenced while the benefits were measured. The dependency concern replaced it. This history belongs in the AI Log and the reflection, not on the site.

**Sources gathered in earlier rounds that were never independently verified.** Do not put any of these on the site without checking them first:

| Item | Status | Possible use |
|---|---|---|
| Bloom's two-sigma finding on one-to-one tutoring | Not verified in the fact-check pass | Historical framing on the Home page for why one-to-one tutoring is the goal |
| Kestin et al. Harvard physics RCT, 2025 | Not verified | A second positive-outcome study alongside the World Bank trial |
| LAUSD "Ed" chatbot collapse | Not verified | A concrete district-level failure for the Recommendation page |
| *Peter W. v. San Francisco Unified*, 1976 | Not verified | Legal context for district liability |
| FERPA and COPPA student data exposure | Not verified | Only relevant if a privacy angle is added |
| Chegg stock decline after ChatGPT launch | Partly verified, the 99% figure appeared in reporting | Could strengthen the tutoring-companies row |
| China's 2021 private tutoring ban | Not verified | Economic context, tangential to the current thesis |

**Also completed and available:** the classification reasoning in Section 6.2 came from earlier work on why AI tutors qualify as Narrow, Limited Memory, and Generative AI but not Theory of Mind. That reasoning is already incorporated.
