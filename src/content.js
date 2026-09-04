// All the words and numbers on the site live in this one file.
// Components only display what is here. Nothing below was invented:
// every fact comes from research.md, and every number is kept exactly.

export const pages = [
  { id: "home", label: "Home" },
  { id: "impacts", label: "Impacts" },
  { id: "recommendation", label: "Recommendation" },
  { id: "references", label: "References" },
];

// Official product images, saved in public/images and credited in CREDITS.md.
// "frame" is the colour shown behind an image whose shape does not match the
// card, so the whole image is visible instead of being cropped.
export const products = [
  {
    id: "khanmigo",
    name: "Khanmigo",
    maker: "Khan Academy",
    type: "Chatbot tutor",
    url: "https://www.khanmigo.ai/",
    image: "/images/khanmigo.png",
    frame: "#eee5fb",
    text: "Launched in March 2023 on GPT-4. The student types a question and Khanmigo guides them through the problem in plain language, in a conversation window, instead of handing over the answer.",
  },
  {
    id: "notebooklm",
    name: "Gemini Notebook",
    maker: "Google, renamed from NotebookLM in 2026",
    type: "Source-grounded study assistant",
    url: "https://notebooklm.google/",
    image: "/images/notebooklm.png",
    frame: "#ffffff",
    text: "The student uploads their own notes, readings, or lecture slides, and the assistant answers only from that material. This keeps the tutor tied to what the class actually covered.",
  },
  {
    id: "claude",
    name: "Claude for Education",
    maker: "Anthropic",
    type: "Guided study mode",
    url: "https://www.anthropic.com/education",
    image: "/images/claude-education.jpg",
    frame: "#d97757",
    text: "Part of the guardrail era that began in 2025. A learning mode that asks the student questions and gives hints rather than direct answers, the approach the PNAS study found avoids harm.",
  },
  {
    id: "chatgpt",
    name: "ChatGPT study mode",
    maker: "OpenAI",
    type: "Guided study mode",
    url: "https://openai.com/index/chatgpt-study-mode/",
    image: "/images/chatgpt-study.png",
    frame: "#5ec8f5",
    text: "A dedicated study mode inside the general chatbot most students already use. It works through a problem step by step instead of giving the answer straight away.",
  },
  {
    id: "duolingo",
    name: "Duolingo Max",
    maker: "Duolingo",
    type: "Adaptive practice platform",
    url: "https://blog.duolingo.com/duolingo-max/",
    image: "/images/duolingo-max.png",
    frame: "#000000",
    text: "Duolingo launched in 2012 and brought machine learning to a mass-market learning app. Lessons track what the learner gets right and wrong, then choose the next exercise to fit. Max added generative AI features in 2023.",
  },
  {
    id: "turbo",
    name: "Turbo AI",
    maker: "TurboLearn",
    type: "Wrapper study app",
    url: "https://www.turbolearn.ai/",
    image: "/images/turbolearn.png",
    frame: "#0e0a1f",
    text: "A study interface built on top of another company's AI model. Wrapper apps like this charge 9.99 to 19.99 dollars a month for a thin layer over a model they did not build.",
  },
];

// ---------------------------------------------------------------- Home

export const home = {
  hero: {
    lead: "A personal tutor for",
    emphasis: "every student",
    lede:
      "AI tutors are programs that teach, explain, and give feedback the way a human tutor would. This site explains where they came from, what they change for students, schools, and the wider world, and the one design decision that decides whether they help or harm.",
    image: "/images/gemini-notebook-cover.png",
    imageAlt: "Gemini Notebook, Google's source-grounded study assistant",
  },

  whatItIs: {
    heading: "What counts as an AI tutor",
    paragraphs: [
      "An AI tutor is software that uses artificial intelligence to do the job a human tutor does. It answers questions, walks a student through a problem step by step, adjusts the difficulty to match the student, and gives feedback immediately instead of days later.",
      "The main users are students in K-12 schools and colleges. Teachers use the same tools to prepare lessons, and adults learning on their own use them to practise a language or build a skill.",
    ],
  },

  classification: {
    heading: "How it is classified",
    intro:
      "Computer scientists sort AI systems by what they can do and how they work. AI tutors fall into three of those categories.",
    items: [
      {
        term: "Narrow AI",
        text: "An AI tutor performs one category of task: teaching through language. No AI that exists today is general, meaning able to do any intellectual task a person can, or superhuman across every field.",
      },
      {
        term: "Limited memory",
        text: "The tutor uses the current conversation and the student's past performance to adapt. Tutoring systems keep what researchers call a student model, a running record of what the learner knows. That record can look like understanding of the student's mind, but it is pattern tracking, not real insight into another person's mental state.",
      },
      {
        term: "Generative",
        text: "Modern tutors write new explanations and new practice problems on the spot. Earlier systems, such as the original ALEKS, were not generative. They followed rules to pick from explanations and problems that people had written in advance.",
      },
    ],
  },

  history: {
    heading: "A century of teaching machines",
    intro:
      "The idea of a machine that teaches is almost a hundred years old. Each generation solved one problem and handed the next one on. Fixed content gave way to systems that model the student, and those gave way to systems that can hold a real conversation.",
    timeline: [
      { year: "1920s", text: "Sidney Pressey builds a mechanical teaching machine." },
      { year: "1950s", text: "B.F. Skinner promotes teaching machines and programmed instruction, a method that breaks lessons into small steps with immediate feedback." },
      { year: "1960", text: "PLATO, an early computer-based education system, launches at the University of Illinois." },
      { year: "1966", text: "ELIZA, the first chatbot, shows that a program can hold a text conversation." },
      { year: "1970", text: "Jaime Carbonell builds SCHOLAR, usually called the first intelligent tutoring system." },
      { year: "1982", text: "Sleeman and Brown give the field its name: intelligent tutoring systems." },
      { year: "1998", text: "Carnegie Learning brings Cognitive Tutor into real classrooms." },
      { year: "2012", text: "Duolingo launches, bringing machine learning to a mass-market learning app." },
      { year: "2016", text: "Georgia Tech's AI teaching assistant, Jill Watson, answers student questions online without students realising it is not human." },
      { year: "Nov 2022", text: "ChatGPT is released. Students begin using general chatbots as tutors." },
      { year: "2023", text: "Khanmigo launches in March on GPT-4, Duolingo Max follows, and a wave of wrapper study apps appears." },
      { year: "2025", text: "The guardrail era begins. Companies ship dedicated study modes, and research published in PNAS shows why safeguards matter." },
    ],
    predecessorsHeading: "What it was built from",
    predecessors: [
      { name: "Teaching machines and programmed instruction", role: "the teaching method" },
      { name: "ELIZA", role: "conversation" },
      { name: "Expert systems such as MYCIN, adapted into the GUIDON tutor", role: "stored knowledge" },
      { name: "Transformer-based large language models, from 2017", role: "open-ended fluency" },
    ],
  },

  today: {
    heading: "The tools students use today",
    intro:
      "Four kinds of AI tutor are in wide use: chatbot tutors, source-grounded study assistants, adaptive practice platforms, and wrapper study apps. They differ in where the knowledge comes from and in whether the tool gives answers or guides the student toward them. The products below are the best-known example of each kind.",
    closing:
      "What these tools share is access. Help that once depended on a paid tutor, a free teacher, or a willing friend is now available at any hour. The rest of this site asks what that access costs and how to keep it from doing harm.",
  },
};

// ------------------------------------------------------------- Impacts

export const impacts = {
  hero: {
    lead: "What changes when tutoring is",
    emphasis: "always on",
    lede:
      "AI tutors affect the people who use them, the businesses that sell learning, the cultures that shape how knowledge is framed, and the physical world that powers the servers. Each section below gives the gains and the costs for the people involved.",
    image: "/images/duolingo-max.png",
    imageAlt: "Duolingo Max, the AI-powered tier of the Duolingo language app",
  },

  measured: {
    heading: "Measured in trials",
    intro:
      "Two randomised controlled trials, the kind of study that compares a group who used the tool against a similar group who did not, have measured real learning gains from AI tutoring.",
    stats: [
      { id: "harvard", value: "2x", label: "Harvard, 194 students", text: "Researchers led by Kestin, publishing in Scientific Reports in 2025, found students learned more than twice as much with a purpose-built AI tutor, in less time." },
      { id: "nigeria-sd", value: "0.31 SD", label: "Nigeria, combined score", text: "A World Bank trial in Edo State ran six weeks of after-school English with a GPT-4 assistant. Students gained 0.23 standard deviations in English and 0.31 on a combined measure." },
      { id: "nigeria-years", value: "1.5 to 2 yrs", label: "Nigeria, cost-effectiveness", text: "The authors judged the gain equal to 1.5 to 2 years of ordinary schooling for the cost. The largest effects were for female students." },
    ],
  },

  sections: [
    {
      id: "economy",
      heading: "Economy",
      paragraphs: [
        "The clearest economic effect is price. One-on-one tutoring that used to cost 40 to 100 dollars per hour now costs nothing or about 20 dollars per month. The global tutoring industry is estimated at around 100 billion dollars, so a price drop that large reaches families who could never have bought tutoring before.",
        "The same technology has displaced workers and companies. Chegg, a homework-help business, lost roughly half its market value in a single day in May 2023 after admitting that ChatGPT was hurting its growth. Duolingo cut about 10 percent of its contractors in early 2024 as AI took over translation work.",
        "A new divide is forming. Families who can pay get frontier tutors, and everyone else gets ad-supported or lower-quality tools. Wrapper apps charge 9.99 to 19.99 dollars a month for a thin layer over another company's model, so the price does not always reflect the quality.",
      ],
      gains: [
        "Tutoring that cost 40 to 100 dollars per hour now costs nothing or about 20 dollars per month.",
        "Harvard trial with 194 students: more than twice the learning in less time with a purpose-built tutor.",
        "Nigeria trial: gains equal to 1.5 to 2 years of ordinary schooling, largest for girls.",
      ],
      costs: [
        "Chegg lost roughly half its market value in one day in May 2023.",
        "Duolingo cut about 10 percent of contractors in early 2024 as AI took over translation.",
        "A paid tier for some families and a lower-quality tier for the rest.",
      ],
    },
    {
      id: "culture",
      heading: "Culture",
      paragraphs: [
        "AI tutors widen access to languages and traditions that mainstream education often ignores. Duolingo offers Irish, Welsh, Hawaiian, and Navajo, all languages with small or endangered speaker communities. Apps such as Tarteel give feedback on Quran recitation, bringing religious learning to people without a nearby teacher. Daily practice habits and the identity of a self-directed learner spread with these tools.",
        "The same tools can flatten culture. The models behind them are trained mostly on English-language Western data, so they tend to standardise how history, literature, and religion are framed, regardless of where the student lives. There is also a shift in habit: students learn to ask before they think. In cultures built around high-stakes exams, a tutor that is available at every hour erodes rest, weekends, and holidays.",
      ],
      gains: [
        "Language access for small and endangered languages such as Irish, Welsh, Hawaiian, and Navajo.",
        "Religious learning access through tools such as Tarteel.",
        "Daily practice habits and a self-directed learner identity.",
      ],
      costs: [
        "Cultural flattening from models trained mostly on English-language Western data.",
        "A habit of asking before thinking.",
        "In exam cultures, an always-available tutor erodes rest.",
      ],
    },
    {
      id: "environment",
      heading: "Environment",
      paragraphs: [
        "A single tutoring question uses very little energy. The environmental cost comes from billions of questions asked at scale, and from building and cooling the hardware that answers them.",
        "Data centres used about 4.4 percent of United States electricity in 2023, and the Department of Energy and Berkeley Lab project that share will reach roughly 7 to 12 percent by 2028. Cooling those centres takes water: one study by Li and colleagues estimated that training GPT-3 alone consumed about 700,000 litres of fresh water. The hardware depends on critical minerals, according to the International Energy Agency, and the United Nations reports that global electronic waste reached a record 62 million tonnes in 2022.",
        "Some argue that AI tutoring helps the environment by reducing travel to tutoring centres and cutting printed materials. Those benefits are indirect and have not been measured, so this site does not count them as proven.",
      ],
      gains: [
        "Less travel to tutoring centres and fewer printed materials, an indirect benefit that has not yet been measured.",
      ],
      costs: [
        "Data centres used about 4.4 percent of US electricity in 2023, projected at roughly 7 to 12 percent by 2028.",
        "Training GPT-3 was estimated to consume about 700,000 litres of fresh water.",
        "Global e-waste hit a record 62 million tonnes in 2022, and hardware depends on critical minerals.",
      ],
    },
  ],

  callout: {
    text: "The largest gains and the most serious harm come from the same design choice: whether the tutor gives answers or withholds them.",
    linkLabel: "Read the recommendation",
    linkTo: "recommendation",
  },
};

// ------------------------------------------------------ Recommendation

export const recommendation = {
  hero: {
    lead: "Faster now,",
    emphasis: "weaker later",
    lede:
      "AI tutors speed students up in the moment. The ones that hand over direct answers also create dependency. Students appear to be learning while losing the ability to work without the tool, and they cannot feel it happening.",
    image: "/images/claude-education.jpg",
    imageAlt: "Claude for Education by Anthropic",
  },

  evidence: {
    heading: "The evidence",
    intro:
      "The strongest evidence comes from a study by Bastani and colleagues, \"Generative AI without guardrails can harm learning,\" published in PNAS in 2025. It was a field trial in real high school maths classes with nearly 1,000 students. Students were split into three groups: a control group with no AI, a group using GPT Base, which worked like a standard ChatGPT interface, and a group using GPT Tutor, which gave teacher-designed hints and never gave a direct answer.",
    // Each value is a percentage change against the control group.
    // The chart draws its bar widths from these numbers.
    chart: [
      {
        id: "practice",
        title: "Practice problems, with the AI available",
        rows: [
          { id: "base", label: "GPT Base", value: 48, display: "+48%" },
          { id: "tutor", label: "GPT Tutor", value: 127, display: "+127%" },
        ],
      },
      {
        id: "exam",
        title: "Final exam, with the AI taken away",
        rows: [
          { id: "base", label: "GPT Base", value: -17, display: "17% worse" },
          { id: "tutor", label: "GPT Tutor", value: 0, display: "Same as control" },
        ],
      },
    ],
    chartNote: "Every bar is measured against students who never had AI. Both panels use the same scale.",
    after: [
      "Students with the standard chatbot did 48 percent better on practice problems, then scored 17 percent worse than students who never had AI once the tool was taken away for the exam. Students with the guardrailed tutor did 127 percent better on practice and were statistically indistinguishable from the control group on the exam. The safeguards prevented harm but did not produce a lasting advantage.",
      "The students did not notice. Their self-assessments of how much they had learned were overly optimistic, so the students who lost the most ability were also confident that they had improved.",
    ],
  },

  objection: {
    heading: "The strongest objection",
    argument:
      "Dependency is a design flaw, not a property of AI tutoring. The same study proved the fix: adding guardrails erased the harm. The industry is now shipping study modes as defaults. And every cognitive technology since writing has triggered the same fear. Socrates worried that writing would weaken memory, and teachers worried that calculators would end arithmetic, yet the predicted collapse never came.",
    responseHeading: "Why the objection does not hold",
    response: [
      "The guarded tutor only achieved no harm on the unassisted exam. It did not produce gains. Safe is not the same as better.",
      "The tools students actually reach for at midnight are the unguarded kind, and the safe mode is often one toggle away from the answer mode.",
      "Calculators arrive after arithmetic fluency is built. Answer-giving AI arrives during skill formation, when the student has not yet learned the thing being skipped.",
      "The study shows students cannot feel the gap. Awareness campaigns depend on people noticing a problem, and this is a problem they do not notice.",
    ],
  },

  plan: {
    heading: "What schools should do",
    intro:
      "These three steps follow directly from what worked in the PNAS study. Each one moves a decision away from the individual student or teacher and onto the district, where it can be enforced.",
    steps: [
      {
        title: "Lock guided study mode at the district level",
        text: "School accounts should have guided study mode set by a district administrator, so answer mode is not one student toggle away.",
      },
      {
        title: "Centralise hint-writing",
        text: "Teacher-designed, unit-specific hints are what made the safe tutor work in the PNAS study. Districts should write and maintain those hints centrally rather than asking every teacher to carry that load alone.",
      },
      {
        title: "Run regular AI-free checkpoints",
        text: "Short, low-stakes quizzes or spoken explanations done without AI make the gap between assisted and unassisted ability visible before a test that counts.",
      },
    ],
  },

  closing: {
    text: "The goal is not to remove AI tutors from schools. It is to make sure the version students use is the one that was shown to help, and to catch dependency before an exam does.",
    linkLabel: "See the sources",
    linkTo: "references",
  },
};

// ---------------------------------------------------------- References

export const references = {
  hero: {
    lead: "Where every",
    emphasis: "number comes from",
    lede:
      "Every statistic on this site traces to one of the sources below. They are grouped by type: peer-reviewed studies, institutional reports, and journalism.",
  },

  tiers: [
    {
      name: "Peer reviewed",
      note: "Studies checked by other researchers before publication.",
      items: [
        {
          title: "Bastani et al., \"Generative AI without guardrails can harm learning\"",
          detail: "PNAS, 2025. Field trial with nearly 1,000 high school students in maths. Source of the +48, +127, and 17 percent worse findings.",
        },
        {
          title: "Kestin et al., Scientific Reports",
          detail: "2025. Harvard physics trial with 194 students. Source of the finding that students learned more than twice as much with a purpose-built tutor.",
        },
        {
          title: "VanLehn, 2011 review",
          detail: "A review of tutoring effect sizes across many studies.",
        },
      ],
    },
    {
      name: "Institutional",
      note: "Reports from governments and international bodies.",
      items: [
        {
          title: "World Bank policy research working paper 11125, \"From Chalkboards to Chatbots\"",
          detail: "The Nigeria trial in Edo State. Source of the 0.23 and 0.31 standard deviation gains.",
        },
        {
          title: "US Department of Energy and Berkeley Lab data centre reports",
          detail: "Source of the 4.4 percent electricity figure for 2023 and the 7 to 12 percent projection for 2028.",
        },
        {
          title: "International Energy Agency critical minerals data",
          detail: "Source for the hardware supply chain's dependence on critical minerals.",
        },
        {
          title: "United Nations e-waste figures",
          detail: "Source of the record 62 million tonnes of electronic waste in 2022.",
        },
      ],
    },
    {
      name: "Journalism and reviews",
      note: "Reporting that explains the research for a general audience.",
      items: [
        {
          title: "Knowledge at Wharton coverage of the Bastani study",
          detail: "Plain-language reporting on the PNAS findings.",
        },
        {
          title: "TurboLearn review coverage",
          detail: "Reporting on wrapper study apps and how they are priced.",
        },
      ],
    },
  ],
};

export const footer = {
  text: "A school research project on AI tutors as a computing innovation. Every statistic on this site is traced to a source on the References page.",
};
