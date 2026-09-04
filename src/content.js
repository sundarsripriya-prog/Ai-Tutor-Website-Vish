// Every piece of text and data on this site lives in this file, so the components
// stay presentational and every fact can be checked in one place.
//
// The numbers here were checked against the original papers, government reports,
// and company disclosures. Several were wrong in earlier drafts and were corrected.
// Do not round them, restate them, or separate a number from the caveat next to it.
//
// Quoting rule used throughout this file: strings use double quotes, except where
// the sentence itself contains a double quote, in which case the string uses
// single quotes instead.
//
// Every row carries an "id". React uses it as the list key, which is more stable
// and easier to explain than the position of the item in the array.

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const pages = [
  { id: "home", label: "Home" },
  { id: "impacts", label: "Impacts" },
  { id: "recommendation", label: "Recommendation" },
  { id: "sources", label: "Sources" },
];

export const siteTitle = "AI tutors and instructors";

// ---------------------------------------------------------------------------
// Home page, PRD section 6.1, the hero
// ---------------------------------------------------------------------------

export const heroHeading = "AI tutors and instructors";

export const heroThesis =
  "An AI tutor is software that teaches a student one to one, answering questions, explaining steps, and adapting to what the student gets wrong. The research on whether these tools help is not mixed in the way people assume. It is precise. The same AI model can improve a student's learning or damage it, and the difference is whether the tutor is built to give answers or built to withhold them.";

// The signature comparison. These two numbers are the whole site in two figures.
// They come from the same study, the same students, and the same tutor.
export const heroComparison = {
  left: {
    figure: "48% better",
    label: "on practice problems, using an unrestricted AI tutor",
  },
  right: {
    figure: "17% worse",
    label: "on the exam taken without AI, the same students",
  },
  caption: 'Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024.',
  captionUrl: "https://papers.ssrn.com/abstract=4895486",
};

// ---------------------------------------------------------------------------
// Home page, PRD section 6.2, what an AI tutor is
// ---------------------------------------------------------------------------

export const whatItIsHeading = "What an AI tutor is";

export const whatItIsDefinition =
  "Software that delivers individualized instruction, evaluates student responses, and adjusts what it presents next based on the student's performance.";

export const classificationIntro = "AI tutors sit across three categories.";

export const classificationCategories = [
  {
    id: "narrow-ai",
    term: "Narrow AI",
    description:
      "Every current system performs one bounded task, teaching within a subject domain. None generalizes beyond what it was built for.",
  },
  {
    id: "limited-memory",
    term: "Limited memory",
    description:
      "These systems retain a record of a student's prior answers and use it to shape later instruction. That memory is a performance log, not an understanding of the student.",
  },
  {
    id: "generative-ai",
    term: "Generative AI",
    description:
      "The current generation produces original explanations and responses rather than selecting from pre-written branches, which is what separates Khanmigo and GPT-based tutors from earlier systems.",
  },
];

export const classificationDistinction = {
  label: "An important distinction to state plainly",
  text: "Tracking which problems a student misses is not the same as understanding that the student is confused, bored, or discouraged. Systems that model another mind's mental state, sometimes called Theory of Mind AI, do not exist. An AI tutor is a pattern tracker with a conversational interface.",
};

// ---------------------------------------------------------------------------
// Home page, PRD section 6.3, the history
//
// PRD section 12 records these dates as the one part of the document that was
// not re-verified against a primary source. They are transcribed as written.
// ---------------------------------------------------------------------------

export const timelineHeading = "Where AI tutors came from";

export const timelineFraming =
  "The lineage from ELIZA to modern chatbots shows the same pattern repeating. A system that produces fluent language is repeatedly mistaken for a system that understands. AI tutors inherit both the capability and the misreading.";

export const timelineEntries = [
  {
    id: "teaching-machines",
    era: "1920s to 1950s",
    development: "Pressey and Skinner teaching machines",
    whyItMatters:
      "Established the core loop still in use: present, respond, correct, advance",
  },
  {
    id: "plato",
    era: "1960s",
    development: "PLATO computer-based education system",
    whyItMatters: "First large-scale networked instruction",
  },
  {
    id: "scholar",
    era: "1970s",
    development: "SCHOLAR",
    whyItMatters:
      "Early attempt at a system that could hold a dialogue about a subject",
  },
  {
    id: "cognitive-tutor",
    era: "1980s to 1990s",
    development: "Cognitive Tutor",
    whyItMatters:
      "Instruction driven by a model of how students actually solve problems",
  },
  {
    id: "aleks",
    era: "1990s onward",
    development: "ALEKS",
    whyItMatters: "Assessment-driven adaptive sequencing at scale",
  },
  {
    id: "duolingo-timeline",
    era: "2010s",
    development: "Duolingo",
    whyItMatters: "Adaptive instruction reaching a mass consumer audience",
  },
  {
    id: "khanmigo-timeline",
    era: "2023 onward",
    development: "Khanmigo and GPT-based tutors",
    whyItMatters:
      "Generative models producing original explanations rather than scripted branches",
  },
];

// ---------------------------------------------------------------------------
// Home page, PRD section 6.4, applications in use today
// ---------------------------------------------------------------------------

export const applicationsHeading = "Applications in use today";

export const applications = [
  {
    id: "khanmigo",
    name: "Khanmigo",
    description:
      "Khan Academy's AI tutor, built to guide students through problems rather than solve them. Khan Academy's founder stated in October 2025 that it costs districts roughly 10 to 15 dollars per student per year and expected to reach one million United States students in the 2025 to 2026 school year, up from about 40,000 two years earlier.",
    sources: [
      {
        label: "AASA",
        url: "https://www.aasa.org/resources/resource/a-conversation-with-sal-khan",
      },
    ],
  },
  {
    id: "duolingo",
    name: "Duolingo",
    description:
      "Language instruction at consumer scale, reporting more than 50 million daily active users in late 2025. In 2025 the company described itself as AI-first and released 148 courses built with generative AI, roughly doubling in one year what had previously taken twelve.",
    sources: [
      {
        label: "Duolingo investor relations",
        url: "https://investors.duolingo.com/news-releases/news-release-details/duolingo-surpasses-50-million-daily-active-users-grows-dau-36",
      },
      {
        label: "TechCrunch",
        url: "https://techcrunch.com/2025/04/30/duolingo-launches-148-courses-created-with-ai-after-sharing-plans-to-replace-contractors-with-ai",
      },
    ],
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot in classrooms",
    description:
      "Used as the intervention in the World Bank's Nigeria trial, where 657 students worked with GPT-4 under teacher supervision in a six-week after-school program.",
    sources: [
      {
        label: "World Bank",
        url: "https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee",
      },
    ],
  },
  {
    id: "tutor-copilot",
    name: "Tutor CoPilot",
    description:
      "A Stanford system that assists human tutors in real time rather than replacing them, tested with roughly 900 tutors and 1,800 K-12 students.",
    sources: [
      { label: "Stanford, arXiv", url: "https://arxiv.org/abs/2410.03017" },
    ],
  },
  {
    id: "chegg",
    name: "Chegg",
    description:
      "A homework-help company that shows the other side of the innovation. Its business was built on human-answered questions and has been displaced by generative AI.",
    sources: [
      {
        label: "CNBC",
        url: "https://www.cnbc.com/2025/10/27/chegg-slashes-45percent-of-workforce-blames-new-realities-of-ai.html",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Impacts page, the three domains the reader can switch between
// ---------------------------------------------------------------------------

export const impactDomains = [
  { id: "economic", label: "Economic" },
  { id: "cultural", label: "Cultural" },
  { id: "environmental", label: "Environmental" },
];

// ---------------------------------------------------------------------------
// Impacts page, PRD section 7.2, economic
// ---------------------------------------------------------------------------

export const economicHeading = "Economic impact";

export const economicFraming =
  "AI tutors change who pays for instruction and who gets paid for it. The evidence below covers three groups: the families buying tutoring, the people whose jobs are tutoring, and the districts spending public money on the software.";

export const economicImpacts = [
  {
    id: "economic-families-positive",
    stakeholder: "Students and families",
    valence: "positive",
    impact:
      "AI tutoring produced large gains at a per-student cost far below private tutoring.",
    evidence:
      "A World Bank trial in Nigeria gave 657 students a six-week Copilot (GPT-4) tutoring program, with 671 as controls. It cost about $48 per student and raised scores 0.31 standard deviations, which the authors equate to roughly two extra years of schooling.",
    sources: [
      {
        label: "World Bank",
        url: "https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee",
      },
    ],
  },
  {
    id: "economic-families-negative",
    stakeholder: "Students and families",
    valence: "negative",
    impact:
      "Only students with a device and connection can reach the tutor, and the gains skew toward those already ahead.",
    evidence:
      "The same trial found that students with higher starting scores and wealthier families gained significantly more (p<0.05). NCES reports that 78% of children whose parents did not finish high school have home internet through a computer, versus 98% of children of college graduates.",
    sources: [
      {
        label: "NCES",
        url: "https://nces.ed.gov/programs/coe/indicator/cch/home-internet-access",
      },
    ],
  },
  {
    id: "economic-tutors-positive",
    stakeholder: "Human tutors and tutoring companies",
    valence: "positive",
    impact:
      "AI coaching raises the effectiveness of weaker tutors instead of replacing them, at negligible cost.",
    evidence:
      "In Stanford's Tutor CoPilot trial, roughly 900 tutors and 1,800 K-12 students took part. Students whose tutors used the AI were 4 percentage points more likely to master a math topic, and 9 points more likely for the weakest tutors. It costs about $20 per tutor a year.",
    sources: [
      { label: "Stanford, arXiv", url: "https://arxiv.org/abs/2410.03017" },
    ],
  },
  {
    id: "economic-tutors-negative",
    stakeholder: "Human tutors and tutoring companies",
    valence: "negative",
    impact:
      "Where AI replaces tutors instead of coaching them, tutoring and content jobs are cut at scale.",
    evidence:
      "Chegg cut 248 jobs in May 2025 and 388 more in October, losing over half its staff in six months, and blamed the new realities of AI. Duolingo had already released about 10% of its contractors in late 2023 after shifting lesson writing to GPT-4.",
    sources: [
      {
        label: "CNBC",
        url: "https://www.cnbc.com/2025/10/27/chegg-slashes-45percent-of-workforce-blames-new-realities-of-ai.html",
      },
    ],
  },
  {
    id: "economic-districts-positive",
    stakeholder: "School districts and taxpayers",
    valence: "positive",
    impact:
      "Per-pupil pricing lets a fixed budget give every student a tutor rather than a selected few.",
    evidence:
      "Sal Khan told the administrators' association AASA in October 2025 that Khanmigo costs districts $10 to $15 per student a year, and expected to reach one million United States students in 2025 to 2026, up from about 40,000. These are vendor figures, not independently audited.",
    sources: [
      {
        label: "AASA",
        url: "https://www.aasa.org/resources/resource/a-conversation-with-sal-khan",
      },
    ],
  },
  {
    id: "economic-districts-negative",
    stakeholder: "School districts and taxpayers",
    valence: "negative",
    impact:
      "Districts buy AI tutors faster than anyone can prove they work, and federal policy encourages it without a vetting standard.",
    evidence:
      "Stateline reported that districts are spending billions on AI tools while struggling to judge which are worth buying, and that the Education Department has provided little guidance on AI purchases. The US AI-in-education market generated about $2.5 billion last year. The Department's July 2025 grant priority steers federal money toward AI high-impact tutoring but sets no standard of evidence.",
    sources: [
      {
        label: "Stateline",
        url: "https://stateline.org/2026/08/12/schools-spend-billions-on-ai-but-struggle-to-figure-out-whats-worth-it/",
      },
      {
        label: "Federal Register",
        url: "https://www.federalregister.gov/documents/2025/07/21/2025-13650/proposed-priority-and-definitions-secretarys-supplemental-priority-and-definitions-on-advancing",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Impacts page, PRD section 7.3, cultural
// ---------------------------------------------------------------------------

export const culturalHeading = "Cultural impact";

export const culturalFraming =
  "Beyond cost, AI tutors change what a classroom feels like, who feels able to ask a question, what teachers trust, and which version of a language the world learns.";

export const culturalImpacts = [
  {
    id: "cultural-students-positive",
    stakeholder: "Students",
    valence: "positive",
    impact:
      "A tutor that never judges lowers the social cost of asking questions, which helps students who stay quiet in class.",
    evidence:
      "In the World Bank Nigeria trial, girls gained significantly more than boys (+0.42, p<0.05), narrowing a gender gap that existed beforehand. The authors caution the result may come from one girls-only school that had scored lower than the others.",
    sources: [
      {
        label: "World Bank",
        url: "https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee",
      },
    ],
  },
  {
    id: "cultural-students-negative",
    stakeholder: "Students",
    valence: "negative",
    impact:
      "Students use the tutor as a crutch and end up weaker on their own than students who never had one.",
    evidence:
      "Wharton researchers studied nearly 1,000 Turkish high school math students. Those using an unrestricted GPT-4 tutor later scored 17% worse on an exam taken without AI than students who never had it (p<0.05). A version built to withhold answers erased the harm.",
    sources: [
      { label: "SSRN", url: "https://papers.ssrn.com/abstract=4895486" },
    ],
  },
  {
    id: "cultural-teachers-positive",
    stakeholder: "Teachers",
    valence: "positive",
    impact:
      "AI assistants let one teacher differentiate for a whole room, changing what struggling students can expect.",
    evidence:
      "Gallup and the Walton Family Foundation surveyed 2,232 United States public K-12 teachers. Nearly 60% agreed AI makes materials more accessible for students with disabilities, and weekly users reported saving 5.9 hours a week.",
    sources: [
      {
        label: "Gallup",
        url: "https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx",
      },
    ],
  },
  {
    id: "cultural-teachers-negative",
    stakeholder: "Teachers",
    valence: "negative",
    impact:
      "The people expected to run these tools mostly do not believe they help, so district purchases conflict with classroom practice.",
    evidence:
      "Pew Research Center surveyed 2,531 United States public K-12 teachers. A quarter said AI does more harm than good in schools, and only 6% said more good than harm. In the Gallup survey, 57% said weekly student AI use would reduce independent thinking.",
    sources: [
      {
        label: "Pew",
        url: "https://www.pewresearch.org/short-reads/2024/05/15/a-quarter-of-u-s-teachers-say-ai-tools-do-more-harm-than-good-in-k-12-education/",
      },
    ],
  },
  {
    id: "cultural-irish-positive",
    stakeholder: "Minority language communities (Irish)",
    valence: "positive",
    impact:
      "AI language tutors reach far more learners than the speaker community itself, turning an inherited language into a chosen one.",
    evidence:
      "Ireland's 2022 census counted nearly 72,000 daily Irish speakers outside school, down 2% since 2016. Duolingo's Language Reports show Irish was the most-studied language in Ireland in 2020 and 2021, with about 1.10 million learners worldwide.",
    sources: [
      {
        label: "CSO Ireland",
        url: "https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducation/",
      },
      {
        label: "Duolingo",
        url: "https://blog.duolingo.com/2021-duolingo-language-report/",
      },
    ],
  },
  {
    id: "cultural-irish-negative",
    stakeholder: "Minority language communities (Irish)",
    valence: "negative",
    impact:
      "Replacing native speakers with AI means the version taught worldwide is one no community actually speaks.",
    evidence:
      "Duolingo cut about 10% of its contractors in late 2023, declared itself AI-first, and released 148 AI-built courses in April 2025. Former contractors told The Washington Post that courses they wrote now contain numerous errors.",
    sources: [
      {
        label: "Washington Post",
        url: "https://www.washingtonpost.com/technology/2024/01/10/duolingo-ai-layoffs/",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Impacts page, PRD section 7.4, environmental
//
// This table has a different column shape from the two above, because it states
// hypotheses about physical systems rather than impacts that were observed.
// ---------------------------------------------------------------------------

export const environmentalHeading = "Environmental impact";

export const environmentalFraming =
  "The environmental section works differently from the two above. Rather than observed impacts on stakeholders, it states four hypotheses about the physical systems an AI tutor depends on, the consequence each would produce, and the evidence bearing on it.";

export const environmentalHypotheses = [
  {
    id: "environmental-energy",
    label: "Energy system",
    hypothesis:
      "As AI tutors spread into everyday classrooms, every student question will trigger a model inference in a data center, raising electricity demand faster than the grid adds clean power.",
    consequence:
      "Utilities meet the extra load with fossil-fuel plants, so CO2 emissions rise and regional grids strain at peak hours.",
    valence: "negative",
    evidence:
      "Duolingo reported over 50 million daily users in late 2025. The Department of Energy and Berkeley Lab found United States data centers used 176 TWh of electricity in 2023, 4.4% of the national total and triple the 58 TWh used in 2014, and project 325 to 580 TWh by 2028.",
    sources: [
      {
        label: "DOE",
        url: "https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers",
      },
      {
        label: "Duolingo",
        url: "https://investors.duolingo.com/news-releases/news-release-details/duolingo-surpasses-50-million-daily-active-users-grows-dau-36",
      },
    ],
  },
  {
    id: "environmental-materials",
    label: "Components and materials",
    hypothesis:
      "An AI tutor for every student needs both a school device and a share of GPU server capacity, raising demand for mined and refined critical minerals.",
    consequence:
      "Mining and refining of copper, silicon, gallium, and rare earths increases in a few countries, bringing land damage and pollution.",
    valence: "negative",
    evidence:
      "U.S. PIRG cites an Education Week survey finding 90% of middle and high schools already give every student a device. The International Energy Agency estimates data center construction could raise global demand for copper by 2%, rare earths by 3%, and gallium by over 11% by 2030.",
    sources: [
      {
        label: "IEA",
        url: "https://www.iea.org/reports/energy-and-ai/ai-and-energy-security",
      },
      {
        label: "PIRG",
        url: "https://pirg.org/edfund/resources/chromebook-churn-report-highlights-problems-of-short-lived-laptops-in-schools/",
      },
    ],
  },
  {
    id: "environmental-waste",
    label: "Waste",
    hypothesis:
      "Because an AI tutor only runs on a supported device, schools will replace student laptops on a short cycle, creating e-waste faster than it can be recycled.",
    consequence:
      "Laptops with working parts are landfilled once software support ends, releasing toxic materials and stranding recoverable metals.",
    valence: "negative",
    evidence:
      "U.S. PIRG found school Chromebooks typically last four years, and only one-third of that e-waste is properly recycled. Google has since extended updates to 10 years for models released from 2021, helping newer devices only. Worldwide, the UN counted 62 million tonnes of e-waste in 2022.",
    sources: [
      {
        label: "PIRG",
        url: "https://pirg.org/edfund/resources/chromebook-churn-report-highlights-problems-of-short-lived-laptops-in-schools/",
      },
      {
        label: "UN",
        url: "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
      },
    ],
  },
  {
    id: "environmental-water",
    label: "Natural systems",
    hypothesis:
      "The data centers answering students' tutoring questions will be cooled by evaporating local freshwater, and many sit in watersheds already under stress.",
    consequence:
      "Aquifers and reservoirs lose water to evaporation, putting AI tutor servers in competition with farms and households in dry regions.",
    valence: "negative",
    evidence:
      "Li and colleagues, in Communications of the ACM (2025), estimate that 20 to 50 questions, about one tutoring session, use roughly 500 mL of freshwater once cooling and electricity generation are both counted. Bloomberg found about two-thirds of United States data centers built since 2022 sit in high water-stress areas.",
    sources: [
      { label: "ACM", url: "https://arxiv.org/pdf/2304.03271" },
      {
        label: "Bloomberg",
        url: "https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/",
      },
    ],
  },
];

// This note is required on the page. A reader who sees four negatives in a row
// should know the selection was not slanted to produce them.
export const environmentalNote =
  "All four hypotheses came out negative. That is the honest reading of the available evidence, not a framing choice.";

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.1, the ethical concern
// ---------------------------------------------------------------------------

export const concernHeading = "The concern";

export const concernStatement =
  "AI tutors accelerate students in the moment, but the ones that hand over the direct answers create dependency, meaning students appear to be learning while losing the ability to work without the tool.";

export const concernLens =
  "Human dependence, because the harm is not that the AI is wrong or unfair but that students lose the ability to work without it. Transparency is a secondary lens, because the harm hides inside work that looks like success.";

export const concernStakeholders = [
  {
    id: "concern-students",
    name: "Students, K-12 and college",
    description:
      "They carry the dependency directly and cannot detect it in themselves.",
  },
  {
    id: "concern-teachers",
    name: "Teachers",
    description:
      "The only people positioned to notice the gap between assisted and unassisted performance, and currently unable to see it in normal classwork.",
  },
  {
    id: "concern-districts",
    name: "School districts",
    description:
      "They control procurement, and therefore control whether students ever meet a guardrailed tutor.",
  },
  {
    id: "concern-developers",
    name: "AI tutor developers",
    description:
      "They decide whether the tool withholds answers or hands them over, which the evidence shows determines whether students learn or become dependent.",
  },
];

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.2, the counterargument
// ---------------------------------------------------------------------------

export const counterArgumentHeading =
  "The strongest argument against this concern";

export const counterArgument =
  "This concern blames the AI when the evidence blames the design. The same students, the same tool, and the same subject showed no harm at all once the tutor was built to withhold answers, which makes dependency a fixable engineering choice rather than a reason to restrict AI tutors. The harm is real, but it is a product defect, not a technology problem, and the fix belongs to developers rather than students.";

export const counterArgumentAnswer =
  "That is correct as far as it goes, and it is the reason this site does not argue for banning AI tutors. What it leaves out is which tool students actually reach for. Khanmigo has guardrails and costs districts money. General-purpose chatbots have none and are free. When a student is stuck on homework late at night, the tool that wins is the one that answers fastest. The counterargument is right about what should be built and silent about what gets used, and that gap is where policy has to operate.";

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.3, the eight options considered
//
// These are ranked, so the rank number is part of the content rather than a
// decoration added by the component.
// ---------------------------------------------------------------------------

export const optionsHeading = "Options considered";

export const solutionOptions = [
  {
    id: "option-teacher-hints",
    rank: 1,
    name: "Teacher-loaded hint guardrails",
    description:
      "Teachers load the tutor ahead of time with hints for the mistakes they know students make in that unit, so the AI can guide but cannot hand over the answer.",
  },
  {
    id: "option-locked-study-mode",
    rank: 2,
    name: "Locked study-mode for school accounts",
    description:
      "The district sets every student account to guided learning mode and disables answer mode, the same way a school blocks websites on school laptops.",
  },
  {
    id: "option-attempt-first",
    rank: 3,
    name: "Attempt-first gating",
    description:
      "The tutor will not help until the student submits their own attempt, even a wrong one.",
  },
  {
    id: "option-ai-after-attempt",
    rank: 4,
    name: "AI-after-attempt classroom policy",
    description:
      "A teacher rule that work is done unaided first, and AI is used only afterward to check it and explain mistakes.",
  },
  {
    id: "option-teach-back",
    rank: 5,
    name: "Teach-back mode",
    description:
      "After the AI helps, the student explains the concept back to it while it plays a confused beginner and probes for gaps.",
  },
  {
    id: "option-fading-scaffolds",
    rank: 6,
    name: "Fading scaffolds",
    description:
      "Help shrinks automatically as mastery grows, from full walkthroughs early to nothing by assessment.",
  },
  {
    id: "option-closed-book",
    rank: 7,
    name: "Tutor-run closed-book sessions",
    description:
      "The AI periodically quizzes the student from memory on older material before unlocking help.",
  },
  {
    id: "option-grade-the-struggle",
    rank: 8,
    name: "Grade the struggle",
    description:
      "Students submit AI chat logs with homework, and the rubric awards points for attempting before asking.",
  },
];

export const rankingNotes = [
  {
    id: "ranking-why-first",
    label: "Why number one ranked first",
    text: "It is the only option with a randomized controlled trial behind it, and that trial tested this exact concern.",
  },
  {
    id: "ranking-why-last",
    label: "Why number eight ranked last",
    text: "Chat logs are easy to fake, so it ends up rewarding the appearance of struggle, which is the same problem as the original concern.",
  },
  {
    id: "ranking-hardest-comparison",
    label: "The hardest comparison",
    text: "Choosing between what is proven and what is easy to scale. Teacher-loaded hints have a trial behind them, but that trial covered one course over a few weeks, so how well it holds across a district for a year is unknown. Locked study-mode has never been tested, but a district administrator turns it on once and every student is covered. Measured evidence beat a reasonable guess.",
  },
];

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.4, the recommendation itself
// ---------------------------------------------------------------------------

export const recommendationHeading = "What should be done";

export const recommendationLead =
  "Society should stop asking whether schools allow AI and start regulating how the AI behaves when a student is stuck.";

export const recommendationParts = [
  {
    id: "part-one",
    label: "Part one",
    text: "Districts should only license AI tutors that withhold direct answers by default, with the setting locked at the administrator level. Study mode already exists in most AI products, but the student controls the toggle, which makes it useless at 11pm on a hard problem.",
  },
  {
    id: "part-two",
    label: "Part two",
    text: "Teachers should supply the hints, not build the whole system. The proven version had teachers pre-loading hints for mistakes they expected, but that workload only survives if it is written once at the district level and shared, the way pacing guides already are.",
  },
  {
    id: "part-three",
    label: "Part three",
    text: "Schools should run short AI-free checkpoints on a regular schedule. Brief unassisted quizzes or two-minute oral explanations catch the gap between assisted and unassisted performance, since guardrails can fail and students still have unguarded tools at home.",
  },
];

export const recommendationSummary =
  "Guardrails to prevent the harm, checkpoints to catch it when prevention fails.";

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.5, why this recommendation
// ---------------------------------------------------------------------------

export const whyHeading = "Why this recommendation";

export const whyThisRecommendation = [
  {
    id: "why-not-ban",
    label: "Why not ban AI tutors",
    text: "The same study shows a well-designed tutor caused no harm, so banning throws away a tool that works when built correctly.",
  },
  {
    id: "why-not-students",
    label: "Why not put the responsibility on students",
    text: "Students will not voluntarily make their homework harder, and the study found their self-perception was already wrong. They believed they were learning while they were not.",
  },
  {
    id: "why-both",
    label: "Why both guardrails and checkpoints are needed",
    text: "Prevention alone cannot tell you whether it worked. Students with the unrestricted tutor did 48 percent better on practice work while getting worse at the skill, so every signal a teacher normally watches pointed the wrong way.",
  },
];

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.6, the evidence
// ---------------------------------------------------------------------------

export const evidenceHeading = "The evidence";

export const studyDesign =
  "Researchers at Wharton randomly split nearly 1,000 Turkish high school math students into three groups. One had no AI. One had an unrestricted GPT-4 tutor. One had the same GPT-4 model loaded with teacher-written hints and built to refuse direct answers. All three then took the same exam with no AI available.";

export const studyGroups = [
  {
    id: "group-control",
    group: "No AI (control)",
    result: "Baseline",
  },
  {
    id: "group-unrestricted",
    group: "Unrestricted GPT-4 tutor",
    result: "17 percent worse than control",
  },
  {
    id: "group-guardrailed",
    group: "Guardrailed GPT-4 tutor",
    result: "No significant difference from control",
  },
];

export const thirdGroupNote =
  "Two groups would only show that AI hurt. The third group is what proves the technology was not the problem.";

export const evidenceNotes = [
  {
    id: "evidence-mechanism",
    label: "The mechanism",
    text: "The unrestricted tutor was only right about half the time, and students mostly just asked it for answers instead of working, which is why blocking answers is the specific fix rather than general advice about responsible use.",
  },
  {
    id: "evidence-why-checkpoints",
    label: "Why checkpoints are necessary",
    text: "That same group got 48 percent more practice problems right while actually getting worse at math, so everything teachers normally look at made the AI seem like it was helping.",
  },
];

// This limitation is not hedging. It belongs on the page because leaving it off
// would overstate what the study found.
export const evidenceLimitation = {
  id: "evidence-limitation",
  label: "Honest limitation",
  text: "The guardrailed group avoided harm but did not outperform the control group, so the fix removes damage rather than producing a gain. The study is also a working paper rather than a peer-reviewed article.",
};

export const evidenceSource = {
  label: 'Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024',
  url: "https://papers.ssrn.com/abstract=4895486",
};

// ---------------------------------------------------------------------------
// Recommendation page, PRD section 8.7, who is affected
// ---------------------------------------------------------------------------

export const whoIsAffectedHeading = "Who is affected";

export const whoIsAffected =
  "Students are influenced most, since they lose the shortcut and their practice scores will likely drop, but they gain the ability to perform without the tool. Teachers are affected both ways, gaining visibility they currently lack while absorbing the work of hints and oral checks, which is why hint-writing belongs at the district level. Districts and developers hold the real power, since districts control procurement with no evidence standard and developers decide whether the tutor withholds answers at all.";

// ---------------------------------------------------------------------------
// The source list, PRD section 9, rendered in the footer
//
// Sources are grouped by how much weight they carry, not alphabetically. Where a
// source has a limitation, that limitation travels with it.
// ---------------------------------------------------------------------------

export const sourceTiers = [
  {
    id: "tier-1",
    name: "Tier 1: Core evidence",
    description:
      "These three carry the site's argument. Everything in the Recommendation page rests on the first one.",
  },
  {
    id: "tier-2",
    name: "Tier 2: Institutional evidence",
    description:
      "Government, intergovernmental, and large-sample survey research, used in preference to journalism whenever both cover the same fact.",
  },
  {
    id: "tier-3",
    name: "Tier 3: Journalism and primary company disclosure",
    description:
      "Used for events and figures no research paper covers. Each is original reporting or a company reporting on itself, never an aggregator.",
  },
  {
    id: "tier-4",
    name: "Tier 4: Use with a stated caveat",
    description:
      "Two sources are load-bearing but weaker than the rest. Their limitation appears next to any claim they support.",
  },
];

export const sources = [
  {
    id: "source-1",
    number: 1,
    tier: "tier-1",
    name: 'Bastani et al., "Generative AI Can Harm Learning," Wharton, 2024',
    supports:
      "The central finding. Three-group design, 17% worse on the AI-free exam, 48% better on practice, tutor correct about 51% of the time, guardrails erased the harm",
    url: "https://papers.ssrn.com/abstract=4895486",
    note: "Working paper, not peer-reviewed",
  },
  {
    id: "source-2",
    number: 2,
    tier: "tier-1",
    name: "World Bank, Edo State Nigeria AI tutoring trial",
    supports:
      "657 treatment and 671 control, $48 per student, 0.31 SD, plus the SES and gender heterogeneity findings and the authors' own caveats",
    url: "https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee",
    note: "Working paper, not peer-reviewed",
  },
  {
    id: "source-3",
    number: 3,
    tier: "tier-1",
    name: 'Wang et al., "Tutor CoPilot," Stanford',
    supports:
      "900 tutors, 1,800 students, +4pp mastery, +9pp for lowest-rated tutors, about $20 per tutor per year",
    url: "https://arxiv.org/abs/2410.03017",
    note: "Working paper. A later version reports 700+ tutors and 1,000 students",
  },
  {
    id: "source-4",
    number: 4,
    tier: "tier-2",
    name: "NCES, Children's Internet Access at Home (2021 ACS)",
    supports:
      "78% versus 98% home internet through a computer, by parental education",
    url: "https://nces.ed.gov/programs/coe/indicator/cch/home-internet-access",
    note: "",
  },
  {
    id: "source-5",
    number: 5,
    tier: "tier-2",
    name: "Federal Register",
    supports:
      "The July 2025 proposed grant priority naming AI high-impact tutoring, with no evidence standard",
    url: "https://www.federalregister.gov/documents/2025/07/21/2025-13650/proposed-priority-and-definitions-secretarys-supplemental-priority-and-definitions-on-advancing",
    note: "",
  },
  {
    id: "source-6",
    number: 6,
    tier: "tier-2",
    name: "Gallup and Walton Family Foundation",
    supports:
      "2,232 teachers. 5.9 hours saved weekly, nearly 60% on accessibility, 57% on independent thinking",
    url: "https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx",
    note: "",
  },
  {
    id: "source-7",
    number: 7,
    tier: "tier-2",
    name: "Pew Research Center",
    supports:
      "2,531 teachers. 25% say more harm than good, 6% more good than harm",
    url: "https://www.pewresearch.org/short-reads/2024/05/15/a-quarter-of-u-s-teachers-say-ai-tools-do-more-harm-than-good-in-k-12-education/",
    note: "",
  },
  {
    id: "source-8",
    number: 8,
    tier: "tier-2",
    name: "Central Statistics Office Ireland, Census 2022",
    supports:
      "Nearly 72,000 daily Irish speakers outside the education system, down 2% since 2016",
    url: "https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducation/",
    note: "",
  },
  {
    id: "source-9",
    number: 9,
    tier: "tier-2",
    name: "Department of Energy and Lawrence Berkeley National Laboratory",
    supports:
      "58 TWh in 2014 to 176 TWh in 2023, 4.4% of US electricity, 325 to 580 TWh projected by 2028",
    url: "https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers",
    note: "",
  },
  {
    id: "source-10",
    number: 10,
    tier: "tier-2",
    name: "International Energy Agency, Energy and AI",
    supports: "Copper 2%, rare earths 3%, gallium over 11% by 2030",
    url: "https://www.iea.org/reports/energy-and-ai/ai-and-energy-security",
    note: "",
  },
  {
    id: "source-11",
    number: 11,
    tier: "tier-2",
    name: "UN Global E-waste Monitor 2024",
    supports: "62 million tonnes generated in 2022, 22.3% formally recycled",
    url: "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
    note: "",
  },
  {
    id: "source-12",
    number: 12,
    tier: "tier-2",
    name: 'Li et al., "Making AI Less Thirsty," Communications of the ACM 68(7), 2025',
    supports: "About 500 mL of freshwater per 20 to 50 query conversation",
    url: "https://arxiv.org/pdf/2304.03271",
    note: "",
  },
  {
    id: "source-13",
    number: 13,
    tier: "tier-3",
    name: "CNBC",
    supports: "Chegg cut 248 jobs May 2025 and 388 October 2025",
    url: "https://www.cnbc.com/2025/10/27/chegg-slashes-45percent-of-workforce-blames-new-realities-of-ai.html",
    note: "Matches Chegg's SEC filing",
  },
  {
    id: "source-14",
    number: 14,
    tier: "tier-3",
    name: "Bloomberg",
    supports: "Duolingo cut about 10% of contractors, late 2023",
    url: "https://www.bloomberg.com/news/articles/2024-01-08/duolingo-cuts-10-of-contractors-in-move-to-greater-use-of-ai",
    note: "Paywalled",
  },
  {
    id: "source-15",
    number: 15,
    tier: "tier-3",
    name: "Washington Post",
    supports: "Contractors report errors in courses they had written",
    url: "https://www.washingtonpost.com/technology/2024/01/10/duolingo-ai-layoffs/",
    note: "Paywalled",
  },
  {
    id: "source-16",
    number: 16,
    tier: "tier-3",
    name: "TechCrunch",
    supports: "148 AI-built courses released April 2025",
    url: "https://techcrunch.com/2025/04/30/duolingo-launches-148-courses-created-with-ai-after-sharing-plans-to-replace-contractors-with-ai",
    note: "Only source for this specific figure",
  },
  {
    id: "source-17",
    number: 17,
    tier: "tier-3",
    name: "Stateline",
    supports:
      "Districts spending billions with little federal guidance, $2.5B US AI-education market",
    url: "https://stateline.org/2026/08/12/schools-spend-billions-on-ai-but-struggle-to-figure-out-whats-worth-it/",
    note: "Widely syndicated, also carried by Education Week",
  },
  {
    id: "source-18",
    number: 18,
    tier: "tier-3",
    name: "Duolingo investor relations",
    supports: "More than 50 million daily active users",
    url: "https://investors.duolingo.com/news-releases/news-release-details/duolingo-surpasses-50-million-daily-active-users-grows-dau-36",
    note: "Company's own disclosure",
  },
  {
    id: "source-19",
    number: 19,
    tier: "tier-3",
    name: "Duolingo Language Report",
    supports: "Irish most-studied language in Ireland, 2020 and 2021",
    url: "https://blog.duolingo.com/2021-duolingo-language-report/",
    note: "Company's own data",
  },
  {
    id: "source-20",
    number: 20,
    tier: "tier-3",
    name: "Google",
    supports:
      "Chromebook updates extended to 10 years for 2021 and later models",
    url: "https://blog.google/products-and-platforms/products/education/automatic-update-extension-chromebook/",
    note: "Company's own announcement",
  },
  {
    id: "source-21",
    number: 21,
    tier: "tier-3",
    name: "Bloomberg",
    supports:
      "About two-thirds of US data centers built since 2022 sit in high water-stress areas",
    url: "https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/",
    note: "Paywalled. Analysis of World Resources Institute and DC Byte data",
  },
  {
    id: "source-22",
    number: 22,
    tier: "tier-4",
    name: "AASA School Administrator, interview with Sal Khan",
    supports: "Khanmigo pricing and adoption figures",
    url: "https://www.aasa.org/resources/resource/a-conversation-with-sal-khan",
    note: "Vendor's own figures, stated in an interview, not independently audited. Always say so",
  },
  {
    id: "source-23",
    number: 23,
    tier: "tier-4",
    name: "U.S. PIRG, Chromebook Churn",
    supports:
      "Four-year device lifespan, one-third of e-waste recycled, 90% of middle and high schools give every student a device",
    url: "https://pirg.org/edfund/resources/chromebook-churn-report-highlights-problems-of-short-lived-laptops-in-schools/",
    note: "An advocacy organization with a right-to-repair position. The 90% figure is PIRG citing a March 2021 Education Week survey, so it is second-hand",
  },
];

// The site states its own weaknesses rather than hiding them. This is what makes
// the rest of the argument credible.
export const knownWeaknesses = [
  {
    id: "weakness-working-papers",
    text: "Three Tier 1 sources are working papers, not peer-reviewed articles. This is normal in education economics and does not make them unreliable, but the site says so once.",
  },
  {
    id: "weakness-paywalled",
    text: "Three sources are paywalled, both Bloomberg pieces and the Washington Post. They are the original reporting so they stay, but a reader may not be able to open them.",
  },
  {
    id: "weakness-environmental-scope",
    text: "The environmental sources describe AI infrastructure in general, not AI tutors specifically. DOE, IEA, UN, and Li et al. measure data centers and devices across all uses. The connection to AI tutors is an inference the hypotheses make explicit, which is why that section is framed as hypotheses rather than measured impacts.",
  },
  {
    id: "weakness-second-hand",
    text: "One figure is second-hand. The 90% device statistic is PIRG quoting Education Week, and it is cited as such.",
  },
];

// ---------------------------------------------------------------------------
// The sidebar menu
//
// Each page lists the sections inside it. The anchor is the id put on that
// section in the page file, so clicking the link scrolls down to it.
// ---------------------------------------------------------------------------

export const pageSections = {
  home: [
    { id: "home-what", anchor: "what-it-is", label: "What an AI tutor is" },
    { id: "home-history", anchor: "history", label: "Where they came from" },
    { id: "home-applications", anchor: "applications", label: "In use today" },
  ],
  impacts: [
    { id: "impacts-economic", anchor: "economic", label: "Economic" },
    { id: "impacts-cultural", anchor: "cultural", label: "Cultural" },
    { id: "impacts-environmental", anchor: "environmental", label: "Environmental" },
  ],
  recommendation: [
    { id: "rec-concern", anchor: "concern", label: "The concern" },
    { id: "rec-counter", anchor: "counterargument", label: "The argument against" },
    { id: "rec-options", anchor: "options", label: "Options considered" },
    { id: "rec-proposal", anchor: "proposal", label: "What should be done" },
    { id: "rec-evidence", anchor: "evidence", label: "The evidence" },
  ],
  sources: [
    { id: "sources-list", anchor: "source-list", label: "Full source list" },
    { id: "sources-weaknesses", anchor: "weaknesses", label: "Known weaknesses" },
  ],
};
