// Everything written on the Recommendation page.

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
