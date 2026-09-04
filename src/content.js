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
// "frame" is the color shown behind an image whose shape does not match the
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
    image: "/images/robot.png",
    imageAlt: "A robot thinking in front of a board covered in math and chemistry formulas",
  },

  whatItIs: {
    heading: "What counts as an AI tutor",
    paragraphs: [
      "An AI tutor is software that uses artificial intelligence to do the job a human tutor does. It answers questions, walks a student through a problem step by step, adjusts the difficulty to match the student, and gives feedback immediately instead of days later.",
      "The main users are students in K-12 schools and colleges. Teachers use the same tools to prepare lessons, and adults learning on their own use them to practice a language or build a skill.",
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
      "The idea of a machine that teaches is almost a hundred years old. The story falls into three eras. In the first, machines delivered fixed content in a fixed order. In the second, systems began to model the student and adapt to what each learner knew. In the third, the systems learned to hold a real conversation. Each era solved the problem the previous one could not, and each handed a new problem to the next.",
    eras: [
      {
        id: "fixed",
        name: "Fixed content",
        span: "1920s to 1960s",
        summary:
          "The first teaching machines could present material, check an answer, and move on. Every student saw the same content in the same order. The machine could not tell one learner from another, but it established the loop that every later system still uses: present, respond, correct, advance.",
        events: [
          {
            year: "1920s",
            title: "Pressey's mechanical teaching machine",
            text: "Sidney Pressey builds a mechanical device that presents a question, accepts an answer, and moves forward. It is the first attempt to put teaching inside a machine.",
          },
          {
            year: "1950s",
            title: "Skinner and programmed instruction",
            text: "B.F. Skinner promotes teaching machines and a method called programmed instruction, which breaks a lesson into small steps and gives feedback after each one. This method is the direct ancestor of the practice loop inside modern tutoring apps.",
          },
          {
            year: "1960",
            title: "PLATO",
            text: "PLATO, an early computer-based education system, launches at the University of Illinois. Teaching moves from mechanical devices to computers, and lessons can now be stored and delivered electronically.",
          },
          {
            year: "1966",
            title: "ELIZA",
            text: "ELIZA, the first chatbot, shows that a program can hold a text conversation. It does not teach anything, but it proves that a machine can talk back, which is the capability every conversational tutor depends on.",
          },
        ],
      },
      {
        id: "adaptive",
        name: "Systems that model the student",
        span: "1970 to 2012",
        summary:
          "The second era added memory. Instead of showing every student the same path, these systems kept a record of what each learner had answered and used it to decide what to show next. Researchers call this record a student model, and it is still the core of adaptive learning today.",
        events: [
          {
            year: "1970",
            title: "SCHOLAR",
            text: "Jaime Carbonell builds SCHOLAR, usually called the first intelligent tutoring system. It is the first program that tries to reason about what the student knows rather than simply play back a fixed lesson.",
          },
          {
            year: "1982",
            title: "The field gets its name",
            text: "Sleeman and Brown name the field intelligent tutoring systems. A scattered set of experiments becomes a recognized area of research with a shared goal.",
          },
          {
            year: "1998",
            title: "Cognitive Tutor in classrooms",
            text: "Carnegie Learning brings Cognitive Tutor into real classrooms. For the first time, an intelligent tutoring system moves from the laboratory to everyday school use.",
          },
          {
            year: "Same era",
            title: "ALEKS",
            text: "ALEKS uses assessment to decide which topics a student is ready for. The original system is not generative: it follows rules to pick from explanations and problems that people wrote in advance.",
          },
          {
            year: "2012",
            title: "Duolingo",
            text: "Duolingo launches and brings machine learning to a mass-market learning app. Adaptive instruction, once limited to schools and research projects, reaches millions of ordinary users on their phones.",
          },
        ],
      },
      {
        id: "conversational",
        name: "Systems that converse",
        span: "2016 to today",
        summary:
          "The third era combined the student model with fluent language. Built on transformer-based large language models, these tutors can write a new explanation or a new problem on the spot and answer a question the designer never anticipated. That power is also the source of the ethical concern this site examines.",
        events: [
          {
            year: "2016",
            title: "Jill Watson",
            text: "Georgia Tech's AI teaching assistant, Jill Watson, answers student questions in an online course without students realizing it is not human. It is the first sign that an AI can pass as a teaching assistant.",
          },
          {
            year: "Nov 2022",
            title: "ChatGPT",
            text: "ChatGPT is released. Students begin using a general chatbot as a tutor, even though it was never designed for teaching and will hand over a direct answer on request.",
          },
          {
            year: "2023",
            title: "Purpose-built tutors arrive",
            text: "Khanmigo launches in March on GPT-4, Duolingo Max follows, and a wave of wrapper study apps appears. For the first time, companies build products around the idea of an AI tutor rather than a general assistant.",
          },
          {
            year: "2025",
            title: "The guardrail era",
            text: "Companies ship dedicated study modes that guide instead of answer, and a study published in PNAS shows why: tutors without safeguards can harm learning. Design, not the underlying model, becomes the deciding factor.",
          },
        ],
      },
    ],
    arcHeading: "The arc in one line",
    arc: ["Teaching machines", "PLATO", "SCHOLAR", "Cognitive Tutor and ALEKS", "Duolingo", "Khanmigo and ChatGPT-style tutors"],
    predecessorsHeading: "What it was built from",
    predecessorsIntro:
      "No single invention produced the AI tutor. Four older technologies each contributed one capability, and a modern tutor is what you get when all four are combined.",
    predecessors: [
      {
        name: "Teaching machines and programmed instruction",
        role: "The teaching method",
        text: "Small steps, an answer from the student, and immediate feedback. This is the pattern inside every practice session an AI tutor runs.",
      },
      {
        name: "ELIZA",
        role: "Conversation",
        text: "The first chatbot showed that a program could carry on a text exchange with a person. Without that, a tutor could only quiz, not discuss.",
      },
      {
        name: "Expert systems such as MYCIN, adapted into the GUIDON tutor",
        role: "Stored knowledge",
        text: "Expert systems captured a specialist's knowledge as rules. GUIDON adapted MYCIN's medical knowledge into a tutor, proving that stored expertise could be used to teach.",
      },
      {
        name: "Transformer-based large language models, from 2017",
        role: "Open-ended fluency",
        text: "Transformers gave machines the ability to write fluent, original text about almost anything. This is what lets a modern tutor explain a topic in a new way instead of replaying a script.",
      },
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
      "Two randomized controlled trials, the kind of study that compares a group who used the tool against a similar group who did not, have measured real learning gains from AI tutoring.",
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
        "The clearest economic effect is price. One-on-one tutoring that used to cost 40 to 100 dollars per hour now costs nothing or about 20 dollars per month. That is not a discount. It is a change in who can take part. The global tutoring industry is estimated at around 100 billion dollars, and almost all of that money came from families who could afford an hourly rate. An AI tutor at 20 dollars a month, or free, reaches the far larger group of families who could never have bought tutoring at all.",
        "The gains are not only theoretical. The Harvard trial with 194 students found that a purpose-built AI tutor produced more than twice the learning in less time. The World Bank trial in Nigeria ran for six weeks and found gains equal to 1.5 to 2 years of ordinary schooling for the cost. When a cheap intervention produces results like that, the economics of education shift: a school that could not afford one extra teacher can afford an AI tutor for every student.",
        "The same technology has displaced workers and companies. Chegg, a homework-help business built on answering student questions, lost roughly half its market value in a single day in May 2023 after admitting that ChatGPT was hurting its growth. Duolingo cut about 10 percent of its contractors in early 2024 as AI took over translation work. In both cases the people replaced were the ones who did the teaching or content work by hand, which is exactly the labour an AI tutor automates.",
        "A new divide is forming underneath the headline price drop. Families who can pay get frontier tutors built on the most capable models. Everyone else gets ad-supported or lower-quality tools. Wrapper apps charge 9.99 to 19.99 dollars a month for a thin layer over another company's model, so a family paying that price may be getting less than a family paying nothing for a well-built free tool. The price no longer signals the quality, and most families have no way to tell the difference.",
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
        "AI tutors widen access to languages and traditions that mainstream education often ignores. Duolingo offers Irish, Welsh, Hawaiian, and Navajo, all languages with small or endangered speaker communities. For a language like that, the number of people who want to learn it can be far larger than the number of teachers able to teach it, and an app removes that limit. Apps such as Tarteel give feedback on Quran recitation, bringing religious learning to people who have no teacher nearby. In each case the tool reaches a learner that the existing system could not.",
        "The tools also change how people see themselves. Daily practice habits spread with them, and so does the identity of a self-directed learner, someone who studies because they chose to rather than because a class required it. That identity used to be rare and expensive to build. An app that rewards a daily streak makes it ordinary.",
        "The same tools can flatten culture. The models behind them are trained mostly on English-language Western data, so they tend to standardize how history, literature, and religion are framed, regardless of where the student lives. A student in one country and a student in another may receive the same framing of the same event, and neither can see what was left out.",
        "There is also a shift in habit. When help is always one message away, students learn to ask before they think, and the pause in which a person works something out for themselves becomes shorter. In cultures built around high-stakes exams, a tutor that is available at every hour erodes rest, weekends, and holidays, because there is no longer a natural point at which studying has to stop.",
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
        "A single tutoring question uses very little energy. The environmental cost comes from billions of questions asked at scale, and from building and cooling the hardware that answers them. Every answer an AI tutor gives is produced in a data center, so as tutoring moves onto these tools, the demand on that infrastructure grows with it.",
        "Electricity is the first cost. Data centers used about 4.4 percent of United States electricity in 2023, and the Department of Energy and Berkeley Lab project that share will reach roughly 7 to 12 percent by 2028. That is a large share of a national grid moving to one kind of building within five years.",
        "Water is the second. The servers have to be cooled, and cooling takes fresh water. One study by Li and colleagues estimated that training GPT-3 alone consumed about 700,000 liters of fresh water, and that figure covers only the training of one model, not the years of questions answered afterwards.",
        "Materials are the third. The hardware depends on critical minerals, according to the International Energy Agency, which must be mined and refined before a chip exists. At the other end of the cycle, the United Nations reports that global electronic waste reached a record 62 million tonnes in 2022, and every device and server eventually joins that pile.",
        "Some argue that AI tutoring helps the environment by reducing travel to tutoring centers and cutting printed materials. Those benefits are plausible, but they are indirect and have not been measured, so this site does not count them as proven.",
      ],
      gains: [
        "Less travel to tutoring centers and fewer printed materials, an indirect benefit that has not yet been measured.",
      ],
      costs: [
        "Data centers used about 4.4 percent of US electricity in 2023, projected at roughly 7 to 12 percent by 2028.",
        "Training GPT-3 was estimated to consume about 700,000 liters of fresh water.",
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
      "The strongest evidence comes from a study by Bastani and colleagues, \"Generative AI without guardrails can harm learning,\" published in PNAS in 2025. It was a field trial in real high school math classes with nearly 1,000 students. Students were split into three groups: a control group with no AI, a group using GPT Base, which worked like a standard ChatGPT interface, and a group using GPT Tutor, which gave teacher-designed hints and never gave a direct answer.",
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
      "The two panels of the chart tell the whole story. On the left, both AI groups look like a success, and the standard chatbot group looks like a clear win. On the right, the same standard chatbot group has fallen below students who had no help at all. Every signal a teacher normally watches, such as practice scores and completed homework, pointed in the wrong direction. The harm only became visible when the tool was removed.",
      "The reason is what the students did with the tool. A standard chatbot will give the answer when asked, and students asked. They finished more problems and finished them correctly, but the work of reasoning through each one was done by the software. The guardrailed tutor gave hints and refused to give answers, so students still had to do that work themselves, which is why their unassisted performance held.",
      "The students did not notice. Their self-assessments of how much they had learned were overly optimistic, so the students who lost the most ability were also confident that they had improved. This is the part of the finding that matters most for policy: a student cannot be expected to fix a problem they cannot feel.",
    ],
  },

  objection: {
    heading: "The strongest objection",
    argument:
      "Dependency is a design flaw, not a property of AI tutoring. The same study proved the fix: adding guardrails erased the harm. The industry is now shipping study modes as defaults. And every cognitive technology since writing has triggered the same fear. Socrates worried that writing would weaken memory, and teachers worried that calculators would end arithmetic, yet the predicted collapse never came.",
    responseHeading: "Why the objection does not hold",
    response: [
      "The objection is right that the fix exists, and this site does not argue for banning AI tutors. But the guarded tutor only achieved no harm on the unassisted exam. It did not produce gains. Safe is not the same as better, and a district that adopts the safe version should expect protection, not a leap in results.",
      "The objection describes what should be built and says nothing about what gets used. The tools students actually reach for at midnight are the unguarded kind, and even in products that have a study mode, the safe mode is often one toggle away from the answer mode. A safeguard the student can switch off is not a safeguard at the moment the student is most tempted to switch it off.",
      "The calculator comparison does not hold. Calculators arrive after arithmetic fluency is built, so they remove work the student has already learned to do. Answer-giving AI arrives during skill formation, when the student has not yet learned the thing being skipped. Removing work before it has been learned is not the same as removing it afterwards.",
      "The study shows students cannot feel the gap. Awareness campaigns and responsible-use guidance depend on people noticing a problem in themselves, and this is a problem they do not notice. That rules out any solution that relies on students choosing the harder path on their own.",
    ],
  },

  plan: {
    heading: "What schools should do",
    intro:
      "These three steps follow directly from what worked in the PNAS study. Each one moves a decision away from the individual student or teacher and onto the district, where it can be enforced. The first two prevent the harm. The third catches it when prevention fails.",
    steps: [
      {
        title: "Lock guided study mode at the district level",
        text: "School accounts should have guided study mode set by a district administrator, so answer mode is not one student toggle away. Study modes already exist in most products, but today the student controls the switch. Moving that control to the district turns a feature a student can ignore into a rule that applies to every account, including the one being used late at night on a hard problem.",
      },
      {
        title: "Centralize hint-writing",
        text: "Teacher-designed, unit-specific hints are what made the safe tutor work in the PNAS study. The tutor was not safe because it was vague. It was safe because teachers had written hints for the exact mistakes students make in that unit. That is real work, and it should not fall on every individual teacher. Districts should write and maintain those hints centrally and share them, the same way they already share pacing guides and curriculum materials.",
      },
      {
        title: "Run regular AI-free checkpoints",
        text: "Short, low-stakes quizzes or spoken explanations done without AI make the gap between assisted and unassisted ability visible before a test that counts. Guardrails can fail, and students still have unguarded tools at home, so prevention alone is not enough. The PNAS study showed that students cannot feel the gap themselves, which means someone has to measure it. A two-minute explanation given out loud is enough to show whether the student can do the work without the tool.",
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
          detail: "PNAS, 2025. Field trial with nearly 1,000 high school students in math. Source of the +48, +127, and 17 percent worse findings.",
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
          title: "US Department of Energy and Berkeley Lab data center reports",
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
