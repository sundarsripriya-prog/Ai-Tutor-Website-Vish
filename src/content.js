// All the words and numbers on the site live in this one file.
// Components only display what is here. Nothing below was invented:
// every fact comes from research.md, and every number is kept exactly.

// Photos are hosted by Unsplash. Each one is credited in CREDITS.md.
function unsplash(id) {
  return "https://images.unsplash.com/photo-" + id + "?w=1600&q=80&auto=format&fit=crop";
}

export const pages = [
  { id: "home", label: "Home" },
  { id: "impacts", label: "Impacts" },
  { id: "recommendation", label: "Recommendation" },
  { id: "references", label: "References" },
];

// ---------------------------------------------------------------- Home

export const home = {
  hero: {
    lead: "A personal tutor for",
    emphasis: "every student",
    lede:
      "AI tutors are programs that teach, explain, and give feedback the way a human tutor would. This site looks at where they came from, what they change, and one ethical problem that needs fixing.",
    image: unsplash("1523240795612-9a054b0db644"),
    imageAlt: "Students laughing together around a laptop in a library",
  },

  whatItIs: {
    heading: "What counts as an AI tutor",
    paragraphs: [
      "An AI tutor is software that uses artificial intelligence to do the job a human tutor does. It answers questions, walks a student through a problem step by step, adjusts the difficulty to match the student, and gives feedback right away instead of days later.",
      "The main users are students in K-12 schools and colleges. Teachers use these tools to prepare lessons, and adults learning on their own use them to practise a language or a skill.",
    ],
    forms: [
      {
        name: "Chatbot tutors",
        example: "Khanmigo",
        text: "A conversation window where the student asks questions and the tutor responds in plain language.",
      },
      {
        name: "Source-grounded study assistants",
        example: "NotebookLM, renamed Gemini Notebook in 2026",
        text: "The student uploads their own notes or readings, and the assistant answers only from that material.",
      },
      {
        name: "Adaptive practice platforms",
        example: "ALEKS, Duolingo",
        text: "The software tracks what the student gets right and wrong, then chooses the next exercise to fit.",
      },
      {
        name: "Wrapper study apps",
        example: "TurboLearn",
        text: "Apps that put a study interface on top of another company's AI model and sell it as a subscription.",
      },
    ],
  },

  classification: {
    heading: "How it is classified",
    intro:
      "Computer scientists sort AI systems by what they can do and how they work. AI tutors fall into three of those categories.",
    items: [
      {
        term: "Narrow AI",
        text: "An AI tutor performs one category of task, which is teaching through language. No AI that exists today is general, meaning able to do any intellectual task a person can, or superhuman across every domain.",
      },
      {
        term: "Limited memory",
        text: "The tutor uses the current conversation and the student's past performance to adapt. Tutoring systems keep what researchers call a student model, a running record of what the learner knows. That record can look like the system understands the student's mind, but it is pattern tracking, not real understanding of another person's mental state.",
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
      "The idea of a machine that teaches is almost a hundred years old. Each generation solved one problem and passed the next one on. Fixed content gave way to systems that model the student, and those gave way to systems that can hold a real conversation.",
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
      { name: "Teaching machines and programmed instruction", role: "supplied the teaching method" },
      { name: "ELIZA", role: "supplied conversation" },
      { name: "Expert systems such as MYCIN, adapted into the GUIDON tutor", role: "supplied stored knowledge" },
      { name: "Transformer-based large language models, from 2017", role: "supplied open-ended fluency" },
    ],
  },

  today: {
    heading: "How people use them today",
    paragraphs: [
      "A student stuck on homework at night opens a chatbot and asks for help with one problem. A language learner completes a short daily lesson that adjusts to their mistakes. A college student uploads lecture notes and asks a study assistant to quiz them on the material.",
      "What these uses share is access. Help that used to depend on a paid tutor, a free teacher, or a willing friend is now available at any hour. The rest of this site asks what that access costs and how to keep it from doing harm.",
    ],
  },
};

// ------------------------------------------------------------- Impacts

export const impacts = {
  hero: {
    lead: "What changes when tutoring is",
    emphasis: "always on",
    lede:
      "AI tutors affect the people who use them, the businesses that sell learning, the cultures that shape how knowledge is framed, and the physical world that powers the servers. Each section below gives the gains and the costs for the people involved.",
    image: unsplash("1558494949-ef010cbdcc31"),
    imageAlt: "Rows of servers with tangled cables inside a data centre",
  },

  sections: [
    {
      id: "economy",
      heading: "Economy",
      paragraphs: [
        "The clearest economic effect is price. One-on-one tutoring help that used to cost 40 to 100 dollars per hour now costs nothing or about 20 dollars per month. The global tutoring industry is estimated at around 100 billion dollars, so a price drop that large reaches families who could never have bought tutoring before.",
        "Two randomised controlled trials, the kind of study that compares a group who used the tool against a similar group who did not, have measured real learning gains. Researchers at Harvard led by Kestin, publishing in Scientific Reports in 2025, ran a trial with 194 students and found that students learned more than twice as much with a purpose-built AI tutor, and did so in less time. A World Bank trial in Edo State, Nigeria, ran for six weeks and gave students after-school English lessons with a GPT-4 based assistant. Students gained 0.23 standard deviations in English and 0.31 standard deviations on a combined measure, an improvement the authors judged equal to 1.5 to 2 years of ordinary schooling for the cost. The largest effects were for female students.",
        "The same technology has displaced workers and companies. Chegg, a homework-help business, lost roughly half its market value in a single day in May 2023 after admitting that ChatGPT was hurting its growth. Duolingo cut about 10 percent of its contractors in early 2024 as AI took over translation work.",
        "A new divide is forming. Families who can pay get frontier tutors. Everyone else gets ad-supported or lower-quality tools. Wrapper apps charge 9.99 to 19.99 dollars a month for a thin layer over another company's model, which means the price does not always reflect the quality.",
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
        "Some people argue that AI tutoring helps the environment by reducing commuting to tutoring centres and cutting printed materials. Those benefits are indirect, and no study has measured them, so they should not be counted as proven.",
      ],
      gains: [
        "Claimed benefits, such as less commuting and fewer printed materials, are indirect and remain unproven.",
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
    image: unsplash("1434030216411-0b793f4b4173"),
    imageAlt: "A student's hand writing on paper with a pen, a notebook beside it",
  },

  evidence: {
    heading: "The evidence",
    intro:
      "The strongest evidence comes from a study by Bastani and colleagues titled \"Generative AI without guardrails can harm learning,\" published in PNAS in 2025. It was a field trial in real high school maths classes with nearly 1,000 students. Students were split into three groups: a control group with no AI, a group using GPT Base, which worked like a standard ChatGPT interface, and a group using GPT Tutor, which gave teacher-designed hints and never gave a direct answer.",
    stats: [
      {
        value: "+48%",
        label: "GPT Base, practice",
        text: "Students using the standard chatbot did 48 percent better on practice problems than the control group.",
      },
      {
        value: "+127%",
        label: "GPT Tutor, practice",
        text: "Students using the guardrailed tutor did 127 percent better on practice problems than the control group.",
      },
      {
        value: "17% worse",
        label: "GPT Base, unassisted exam",
        text: "When the AI was taken away for the exam, the standard chatbot group scored 17 percent worse than students who never had AI at all.",
      },
    ],
    after: [
      "The guardrailed group did not suffer that loss. On the unassisted exam, GPT Tutor students were statistically indistinguishable from the control group, meaning the safeguards prevented harm but did not produce a lasting advantage.",
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
      "Sources are grouped by how much weight they can carry. Peer-reviewed studies come first, institutional reports second, and journalism last. One widely quoted statistic is flagged because it should not be treated as settled.",
    image: unsplash("1481627834876-b7833e8f5570"),
    imageAlt: "Tall library shelves lit by a row of hanging bulbs",
  },

  tiers: [
    {
      name: "Peer reviewed",
      note: "Studies checked by other researchers before publication. These carry the most weight.",
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
          detail: "A review of tutoring effect sizes. Source for the estimate that human tutoring produces gains near 0.8 standard deviations.",
        },
      ],
    },
    {
      name: "Institutional",
      note: "Reports from governments and international bodies. Reliable for data, but not independently reviewed in the same way.",
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
      note: "Useful for context. Use with care, because coverage can be shaped by commercial interests.",
      items: [
        {
          title: "Knowledge at Wharton coverage of the Bastani study",
          detail: "Plain-language reporting on the PNAS findings.",
        },
        {
          title: "TurboLearn review coverage",
          detail: "Affiliate-influenced. The app shows 4.8 stars on the App Store but scored 46 out of 100 on a review-legitimacy check, so its ratings should not be taken at face value.",
        },
      ],
    },
  ],

  contested: {
    heading: "A statistic to be careful with",
    paragraphs: [
      "In 1984, Benjamin Bloom reported that students with a human tutor performed two standard deviations better than students in a normal classroom. This \"two sigma\" finding is quoted widely in AI-tutor marketing as the gain that software could one day match.",
      "Later research does not support a number that large. VanLehn's 2011 review puts human tutoring near 0.8 standard deviations, and modern real-world tutoring programs often land at 0.3 to 0.4. This site does not cite two sigma as settled fact, and neither should anyone else.",
    ],
  },
};

export const footer = {
  text: "A school research project on AI tutors as a computing innovation. Every statistic on this site is traced to a source on the References page.",
};
