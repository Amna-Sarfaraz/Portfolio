export const siteContent = {
  identity: {
    name: "Amna",
    title: "Consulting Engineer",
    monogram: "A",
    location: "Karachi, Pakistan",
    availability: "Available for selective collaborations",
    tagline: "A Sherlock Holmes-inspired portfolio of deductions, designs, and solved software mysteries.",
    blurb:
      "I build polished web experiences, investigate product friction, and turn vague technical trouble into deliberate systems.",
    quote:
      "When the impossible has been eliminated, whatever remains, however intricate, must be engineered.",
  },
  stats: [
    { label: "Years in Practice", value: "05" },
    { label: "Cases Closed", value: "18" },
    { label: "Preferred Tools", value: "12" },
    { label: "Open Engagements", value: "02" },
  ],
  methods: [
    {
      name: "React",
      match: 97,
      notes: "My preferred instrument for building interfaces with intent and restraint.",
    },
    {
      name: "TypeScript",
      match: 95,
      notes: "Useful for catching weak alibis before they reach production.",
    },
    {
      name: "UI Systems",
      match: 93,
      notes: "Component libraries, tokens, and design constraints kept in working order.",
    },
    {
      name: "Performance",
      match: 90,
      notes: "I trace friction to the exact line item responsible for it.",
    },
    {
      name: "Python",
      match: 88,
      notes: "Reliable for automation, data cleanup, and practical investigations.",
    },
    {
      name: "Content Design",
      match: 86,
      notes: "Narrative, structure, and interface copy aligned to the product's role.",
    },
    {
      name: "Accessibility",
      match: 91,
      notes: "No interface leaves Baker Street without being readable and usable.",
    },
    {
      name: "Figma",
      match: 84,
      notes: "Where clues become layouts before code makes them inevitable.",
    },
    {
      name: "Git",
      match: 98,
      notes: "Every revision is catalogued. Every footprint has a source.",
    },
  ],
  cases: [
    {
      id: "001",
      title: "The Affair of the Restless Landing Page",
      status: "SOLVED",
      summary:
        "Rebuilt a visually noisy homepage into a clear editorial funnel with stronger hierarchy and calmer motion.",
      stack: ["React", "Tailwind", "Content Strategy"],
      repo: "#",
      demo: "#",
      notes: "The culprit was indecision disguised as decoration.",
    },
    {
      id: "002",
      title: "The Curious Incident of the Sluggish Dashboard",
      status: "SOLVED",
      summary:
        "Investigated slow interactions across a data-heavy dashboard and cut perceived latency with targeted rendering fixes.",
      stack: ["TypeScript", "Performance", "Charts"],
      repo: "#",
      demo: "#",
      notes: "Too many re-renders, too little restraint.",
    },
    {
      id: "003",
      title: "A Study in Broken Responsive Behavior",
      status: "SOLVED",
      summary:
        "Untangled a mobile layout that collapsed under edge cases and rebuilt it with durable spacing and typography rules.",
      stack: ["CSS", "Responsive Design", "QA"],
      repo: "#",
      demo: "#",
      notes: "The evidence was hiding in the smallest viewport.",
    },
    {
      id: "004",
      title: "The Adventure of the Inconsistent Design System",
      status: "ONGOING",
      summary:
        "Standardizing components, tokens, and documentation so future product work stops reinventing itself.",
      stack: ["Design Systems", "Storybook", "Tokens"],
      repo: "#",
      demo: "#",
      notes: "A long case, but a worthwhile one.",
    },
    {
      id: "005",
      title: "The Speckled Trail of Form Abandonment",
      status: "SOLVED",
      summary:
        "Simplified a multi-step inquiry flow to improve completion without sacrificing detail or trust.",
      stack: ["UX Writing", "Forms", "Analytics"],
      repo: "#",
      demo: "#",
      notes: "Most confessions improve when the questions do.",
    },
    {
      id: "006",
      title: "The Empty Room of Unshipped Ideas",
      status: "COLD",
      summary:
        "A backlog of promising concepts awaiting the right brief, timeline, and patron.",
      stack: ["Concepting", "Branding", "Prototyping"],
      repo: "#",
      demo: "#",
      notes: "Dormant, not dead.",
    },
  ],
  chronicle: [
    {
      year: "2025 — PRESENT",
      headline: "Consulting Engineer Curates Digital Casework with Editorial Precision",
      role: "Independent Practice",
      body:
        "Designs and builds web experiences that combine narrative structure, polished UI, and disciplined implementation. Handles the brief, the interface, and the final deductions.",
      tags: ["React", "UI Engineering", "Brand Systems"],
      rotate: -1.5,
    },
    {
      year: "2023 — 2025",
      headline: "Interface Investigations Lead to Cleaner Product Journeys",
      role: "Product and Frontend Work",
      body:
        "Improved flow clarity, visual consistency, and front-end maintainability across fast-moving product surfaces with a bias toward elegant simplification.",
      tags: ["TypeScript", "UX", "Performance"],
      rotate: 2,
    },
    {
      year: "2021 — 2023",
      headline: "Early Cases Establish a Taste for Structure and Storytelling",
      role: "Foundational Project Work",
      body:
        "Built practical interfaces, sharpened design instincts, and developed a habit of treating each bug and awkward flow as something to be properly studied.",
      tags: ["HTML/CSS", "JavaScript", "Visual Design"],
      rotate: -2,
    },
  ],
  telegraph: {
    intro:
      "If you have a product to refine, a portfolio-grade interface to build, or a stubborn digital mystery to solve, send word.",
    response: "Replies usually go out within one business day.",
  },
} as const;

export type SiteContent = typeof siteContent;
