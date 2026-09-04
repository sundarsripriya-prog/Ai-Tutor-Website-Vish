// Everything written on the Home page.

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
