# AI Tutors and Instructors: Consolidated Research

One file with the important findings from both research chats. Each section maps to a page of the website.

---

## 1. The innovation in brief (Home page)

AI tutors and instructors are programs that use artificial intelligence to teach, explain, and give feedback the way a human tutor would. They answer questions, walk students through problems, adapt difficulty to the student, and give instant feedback. Primary users are K-12 and college students; teachers and self-learners also use them. Current forms: chatbot tutors (Khanmigo), source-grounded study assistants (NotebookLM, renamed Gemini Notebook in 2026), adaptive practice platforms (ALEKS, Duolingo), and wrapper study apps (TurboLearn).

**Classification**

- **Narrow AI.** It performs one category of task: teaching through language. No AI today is general or superhuman across domains.
- **Limited Memory.** It uses conversation context and student performance data to adapt. Tutoring systems keep a "student model," which resembles Theory of Mind but is pattern tracking, not real understanding of mental states.
- **Generative** in its modern form. Today's tutors create new explanations and problems on the fly. Earlier systems (original ALEKS) were non-generative: rules selecting from pre-written content.

## 2. Historical development (Home page)

| Year | Milestone |
|---|---|
| 1920s | Sidney Pressey builds a mechanical teaching machine |
| 1950s | B.F. Skinner promotes teaching machines and programmed instruction |
| 1960 | PLATO launches at the University of Illinois |
| 1966 | ELIZA, the first chatbot (predecessor technology) |
| 1970 | SCHOLAR (Jaime Carbonell), usually called the first intelligent tutoring system |
| 1982 | "Intelligent tutoring systems" becomes the field's name (Sleeman and Brown) |
| 1998 | Carnegie Learning brings Cognitive Tutor to real classrooms |
| 2012 | Duolingo launches; machine learning reaches mass-market learning apps |
| 2016 | Georgia Tech's "Jill Watson" AI teaching assistant passes as human |
| Nov 2022 | ChatGPT released; students adopt general chatbots as tutors |
| 2023 | Khanmigo (March, GPT-4), Duolingo Max, and the wrapper-app wave |
| 2025 | Guardrail era: dedicated study modes; PNAS evidence on safeguards |

**Predecessor technologies:** teaching machines and programmed instruction (the teaching method), ELIZA (conversation), expert systems like MYCIN adapted into the GUIDON tutor (stored knowledge), transformer-based LLMs from 2017 (open-ended fluency).

**Evolution arc:** Teaching machines → PLATO → SCHOLAR → Cognitive Tutor and ALEKS → Duolingo → Khanmigo and ChatGPT-style tutors. Fixed content → adaptive systems that model the student → systems that genuinely converse.

## 3. Impacts (Impacts page)

### Economic
- **Positive:** One-on-one tutoring help drops from $40-100 per hour to free or about $20 per month, reaching families who could never buy it. The global tutoring industry is estimated around $100 billion.
- **Positive (measured):** Harvard RCT (Kestin et al., Scientific Reports 2025, 194 students): students learned more than twice as much with a purpose-built AI tutor, in less time. World Bank RCT in Edo State, Nigeria (six weeks, GPT-4 Copilot, after-school English): 0.23 SD gain in English, 0.31 SD combined, cost-effectiveness equal to 1.5-2 years of ordinary schooling, largest effects for female students.
- **Negative:** Displacement in the education economy. Chegg lost roughly half its market value in one day in May 2023 after admitting ChatGPT was hurting growth. Duolingo cut about 10% of contractors in early 2024 as AI took over translation work.
- **Negative:** A new divide: frontier tutors for families who pay, ad-supported or low-quality tools for those who don't. Wrapper apps charge $9.99-19.99 monthly for thin layers over other companies' models.

### Cultural
- **Positive:** Language access, including small and endangered languages (Duolingo offers Irish, Welsh, Hawaiian, Navajo). Religious learning access (Quran recitation feedback apps such as Tarteel). Self-directed learner identity; daily practice habits.
- **Negative:** Cultural flattening: models trained mostly on English-language Western data standardize how history, literature, and religion get framed. Habit shift toward asking before thinking. In exam cultures, an always-available tutor erodes rest, weekends, and holidays.

### Environmental
- **Negative:** Data centers used about 4.4% of US electricity in 2023, projected to reach roughly 7-12% by 2028 (DOE / Berkeley Lab). Water for cooling: one study (Li et al.) estimated training GPT-3 consumed about 700,000 liters of freshwater. Hardware depends on critical minerals (IEA), and global e-waste hit a record 62 million tonnes in 2022 (UN).
- **Context:** A single tutoring query is small; the impact comes from billions of queries at scale. Claimed environmental benefits (less commuting, fewer printed materials) are indirect and unproven.

## 4. Ethical concern (Recommendation page)

**The concern:** AI tutors accelerate students in the moment, but the ones that hand over direct answers create dependency. Students appear to be learning while losing the ability to work without the tool.

**The evidence anchor:** Bastani et al., "Generative AI without guardrails can harm learning" (PNAS, 2025). Field RCT, nearly 1,000 high school students, math. Two tutors: GPT Base (standard ChatGPT-style interface) and GPT Tutor (teacher-designed hints, no direct answers).
- Practice performance: GPT Base +48%, GPT Tutor +127% vs. control.
- Unassisted exam: GPT Base scored **17% worse** than students who never had AI. GPT Tutor was statistically indistinguishable from control.
- Students did not perceive their own learning loss; self-assessments were overly optimistic.

**Strongest counterargument:** Dependency is a design flaw, not a property of AI tutoring. The same study proved the fix (guardrails erased the harm), the industry is shipping study modes as defaults, and every cognitive technology since writing has triggered the same fear (Socrates on writing, calculators on arithmetic) without the predicted collapse.

**Response to the counterargument:** The guarded tutor only achieved no harm, not gains, on the unassisted exam. The tools students actually use at midnight are the unguarded kind, one toggle away from the crutch. Calculators arrive after arithmetic fluency is built; answer-giving AI arrives during skill formation. And the study shows students cannot feel the gap, so awareness campaigns alone will not work.

## 5. Recommendation (Recommendation page)

1. **Lock guided study mode at the district administrator level** for school accounts, so answer mode is not one student toggle away.
2. **Centralize hint-writing at the district level.** Teacher-designed, unit-specific hints are what made the safe tutor work in the PNAS study; individual teachers should not each carry that load.
3. **Run regular AI-free checkpoints:** short, low-stakes unassisted quizzes or oral explanations, so the gap between assisted and unassisted ability becomes visible before a test that counts.

## 6. Source list (tiered)

**Peer-reviewed:** Bastani et al., PNAS 2025 (guardrails study). Kestin et al., Scientific Reports 2025 (Harvard physics). VanLehn 2011 review (tutoring effect sizes).
**Institutional:** World Bank policy research working paper 11125, "From Chalkboards to Chatbots" (Nigeria RCT). DOE / Berkeley Lab data center reports. IEA critical minerals data. UN e-waste figures.
**Journalism / reviews (lower tier, use with care):** Knowledge at Wharton coverage of Bastani. TurboLearn review coverage (affiliate-influenced; App Store 4.8 stars vs. a 46/100 review-legitimacy score).

**Flagged as contested:** Bloom's 1984 "two sigma" tutoring finding. Widely quoted in AI-tutor marketing, but later research (VanLehn 2011) puts human tutoring near 0.8 SD and modern real-world programs often at 0.3-0.4. Do not cite two sigma as settled fact.
