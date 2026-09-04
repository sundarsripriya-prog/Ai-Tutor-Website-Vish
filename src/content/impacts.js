// Everything written on the Impacts page.

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
