// Everything written on the References page.

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
