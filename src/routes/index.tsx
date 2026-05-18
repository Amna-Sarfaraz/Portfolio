import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bot, BriefcaseBusiness, GraduationCap, Layers3 } from "lucide-react";
import { NoirShell } from "@/components/NoirShell";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Case Opens | The Detective" },
      { name: "description", content: "A problem has been reported. The suspect: complex software. Enter the case." },
    ],
  }),
});

const dossierStats = [
  { label: "Projects Solved", value: "5+", icon: BriefcaseBusiness },
  { label: "Specialisation", value: "LLM · RAG · APIs", icon: Bot },
  { label: "Expected 2028", value: "B.E. SE", icon: GraduationCap },
  { label: "Active Projects", value: "3", icon: Layers3 },
];

const labEvidence = [
  {
    title: "AI Engineering",
    evidence: "EVIDENCE #001",
    items: ["LLM Integration", "RAG Pipelines", "NLP", "OpenAI API"],
  },
  {
    title: "FRONTEND",
    evidence: "EVIDENCE #002",
    items: ["React.js", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend Development",
    evidence: "EVIDENCE #003",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "Programming",
    evidence: "EVIDENCE #004",
    items: ["Python", "C++", "C#"],
  },
  {
    title: "Data and ML",
    evidence: "EVIDENCE #005",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Databases",
    evidence: "EVIDENCE #006",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    evidence: "EVIDENCE #007",
    items: ["Git", "Docker", "n8n", "UiPath", "Postman", "Jibble"],
  },
];

const homeCases = [
  {
    title: "AI Study Partner",
    incident: "INCIDENT REPORT",
    summary:
      "A multi-user AI platform built for collaborative learning — featuring document Q&A, quiz generation, and flashcards powered by LLMs.",
    tags: ["FastAPI", "React", "ChromaDB", "Groq API", "PostgreSQL", "RAG"],
    href: "https://github.com/Amna-Sarfaraz/AI_Study-Partner",
    solved: true,
  },
  {
    title: "Zenith — Exoplanet Detection",
    incident: "INCIDENT REPORT",
    summary:
      "Machine learning models built to detect exoplanets from astronomical datasets using feature engineering and model evaluation.",
    tags: ["Python", "Scikit-learn", "ML", "Pandas", "NumPy"],
    href: "https://github.com/Amna-Sarfaraz/Zenith",
    solved: true,
  },
  {
    title: "AI Voice Agent",
    incident: "INCIDENT REPORT",
    summary:
      "A real-time AI voice agent built from scratch for astronomy research. It captures voice input, transcribes it to text, processes it through a large language model enriched with astronomy domain knowledge, and responds back in natural speech.",
    tags: [
      "Python",
      "Deepgram",
      "OpenAI GPT-4o",
      "Anthropic Claude",
      "ElevenLabs",
      "FAISS",
      "sentence-transformers",
      "asyncio",
      "RAG",
      "WebSockets",
      "sounddevice",
      "astroquery",
    ],
    href: "https://github.com/Amna-Sarfaraz/AIVoice_Agent",
    solved: false,
  },
];

function Index() {
  const [opened, setOpened] = useState(false);
  return (
    <NoirShell>
      <section id="hero" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center px-3 sm:px-4 scroll-mt-20 sm:scroll-mt-28">
        {/* Rain behind */}
        <div className="rain" />
        {/* Desk lamp glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="lamp-glow"
        />
        <div className="relative z-10 max-w-3xl text-center space-y-6 sm:space-y-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="typewriter tracking-[0.3em] sm:tracking-[0.5em] text-noir-gold text-[10px] sm:text-xs"
          >
            FILE No. 0451 — CONFIDENTIAL
          </motion.p>

          <Typewriter
            lines={[
              "A problem has been reported.",
              "The suspect: complex software.",
            ]}
            startDelay={1200}
            onDone={() => setOpened(true)}
          />

          <motion.div
            initial={{ y: 80, opacity: 0, rotate: -2 }}
            animate={opened ? { y: 0, opacity: 1, rotate: -1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="manila mx-auto max-w-md p-4 sm:p-6 text-left"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-12 tape w-20 sm:w-24 h-5 sm:h-6" />
            <div className="border-b-2 border-noir-blood/40 pb-2 mb-3 flex items-center justify-between">
              <span className="typewriter text-[10px] tracking-widest">CASE FILE</span>
              <span className="typewriter text-[10px] tracking-widest">EYES ONLY</span>
            </div>
            <h1 className="headline-serif text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-noir-ink">
              The Mystery of the<br/>Failing Pipeline
            </h1>
            <p className="handwritten text-xl sm:text-2xl text-noir-blood mt-2 sm:mt-3">
              — files attached, proceed with caution.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <a
                href="#cases"
                className="typewriter bg-noir-black text-noir-paper px-5 py-2 text-xs tracking-widest hover:bg-noir-blood transition"
              >
                OPEN CASE FILES →
              </a>
              <a
                href="/AmnaMuhammad_CV.pdf"
                download="AmnaMuhammad_CV.pdf"
                className="typewriter border-2 border-noir-ink px-5 py-2 text-xs tracking-widest hover:bg-noir-ink hover:text-noir-paper transition"
              >
                VIEW EVIDENCE
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={opened ? { opacity: 0.6 } : {}}
            transition={{ delay: 0.6 }}
            className="typewriter text-[10px] tracking-[0.4em] text-noir-gold"
          >
            ▼ SCROLL TO DESCEND ▼
          </motion.p>
        </div>
      </section>

      <section id="profile" className="scroll-mt-20 sm:scroll-mt-28 px-3 sm:px-4 py-10 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-6 sm:mb-10">
            <p className="typewriter text-noir-gold tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs">SECTION II</p>
            <h2 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Profile</h2>
          </header>
          <motion.article
            initial={{ rotate: -1, y: 30, opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="paper relative p-5 sm:p-8 md:p-12"
          >
            <div className="tape absolute -top-4 left-6 sm:left-12 w-20 sm:w-28 h-6 sm:h-7" />
            <div className="tape absolute -top-4 right-6 sm:right-16 w-16 sm:w-24 h-6 sm:h-7" style={{ transform: "rotate(4deg)" }} />
            <div className="space-y-5 text-noir-ink">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <h3 className="headline-serif text-xl sm:text-3xl">SUBJECT BRIEFING</h3>
                <span className="stamp stamp-cleared text-base sm:text-2xl">CLEARED</span>
              </div>
              <div className="ledger-rule pb-4">
                <h4 className="headline-serif text-2xl sm:text-4xl">Amna Muhammad</h4>
              </div>
              <p className="leading-relaxed text-base md:text-lg">
                Software Engineering undergraduate at NED University, Karachi. Focused on AI systems,
                backend development, and intelligent application design. Experienced in building
                API-driven systems and integrating LLM-based features into real-world applications.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://github.com/Amna-Sarfaraz"
                  target="_blank"
                  rel="noreferrer"
                  className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com/in/amna-muhammad123"
                  target="_blank"
                  rel="noreferrer"
                  className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
                >
                  LINKEDIN
                </a>
                <a
                  href="mailto:mohammadamna54@gmail.com"
                  className="typewriter border border-noir-ink/30 px-3 py-1.5 text-[10px] tracking-widest text-noir-ink hover:bg-noir-ink hover:text-noir-paper transition"
                >
                  EMAIL
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 pt-4">
                {dossierStats.map((s) => (
                  <div key={s.label} className="border-2 border-noir-ink/40 p-2 sm:p-3 bg-noir-paper-dark/40">
                    <div className="mb-3 inline-flex items-center justify-center rounded-full border border-noir-ink/30 p-2 text-noir-ink/80">
                      <s.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="headline-serif text-xl sm:text-3xl text-noir-blood">{s.value}</div>
                    <div className="typewriter text-[10px] tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="lab" className="scroll-mt-20 sm:scroll-mt-28 px-3 sm:px-4 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-6 sm:mb-10">
            <p className="typewriter text-noir-gold tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs">SECTION III</p>
            <h2 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Fingerprint Lab</h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {labEvidence.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative bg-noir-charcoal border border-noir-gold/30 p-5 overflow-hidden group"
              >
                <div className="scan-line" />
                <div className="absolute top-3 left-3 typewriter text-[9px] text-noir-gold/60 tracking-widest">
                  {card.evidence}
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <svg viewBox="0 0 64 64" className="w-14 h-14 text-noir-gold flex-shrink-0">
                    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                      <path d="M32 8 C18 8 12 20 12 32 C12 44 16 52 18 56" />
                      <path d="M32 14 C22 14 18 22 18 32 C18 44 22 50 24 54" />
                      <path d="M32 20 C26 20 24 26 24 32 C24 40 26 46 28 52" />
                      <path d="M32 26 C30 26 30 30 30 34 C30 42 32 48 32 50" />
                      <path d="M32 8 C46 8 52 20 52 32 C52 44 48 52 46 56" />
                      <path d="M32 14 C42 14 46 22 46 32 C46 44 42 50 40 54" />
                      <path d="M32 20 C38 20 40 26 40 32 C40 40 38 46 36 52" />
                    </g>
                  </svg>
                  <div className="flex-1">
                    <h3 className="typewriter text-noir-paper text-lg tracking-wide">{card.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="typewriter text-[10px] border border-noir-gold/30 px-2 py-1 text-noir-gold/90 tracking-widest"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="scroll-mt-20 sm:scroll-mt-28 px-3 sm:px-4 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-6 sm:mb-10">
            <p className="typewriter text-noir-gold tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs">SECTION IV</p>
            <h2 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Case Files</h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {homeCases.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, rotate: i % 2 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? -1 : 1 }}
                viewport={{ once: true }}
                className="manila relative p-4 sm:p-5 text-left sm:aspect-[4/3] flex flex-col"
              >
                <span className="absolute -top-3 left-6 bg-[#c8a96b] border-2 border-noir-ink/30 px-4 py-1 typewriter text-[10px] tracking-widest text-noir-ink">
                  CASE
                </span>
                <span
                  className={`stamp self-end text-xs ${card.solved ? "!text-emerald-700 border-emerald-700" : "!text-red-900 border-red-900"}`}
                >
                  {card.solved ? "SOLVED" : "UNSOLVED"}
                </span>
                <p className="typewriter text-[10px] tracking-widest text-noir-ink/70 mt-6">{card.incident}</p>
                <h3 className="headline-serif text-xl sm:text-2xl text-noir-ink mt-2 leading-tight">{card.title}</h3>
                <p className="typewriter text-xs text-noir-ink/80 mt-3">{card.summary}</p>
                {card.tags.length ? (
                  <div className="mt-4">
                    <p className="typewriter text-[10px] tracking-widest text-noir-ink/70 mb-2">EVIDENCE TAGS</p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="typewriter text-[9px] bg-noir-ink/85 text-noir-paper px-2 py-0.5 tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="mt-auto pt-4">
                  {card.href.startsWith("http") ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="typewriter text-[10px] tracking-widest text-noir-ink underline underline-offset-4"
                    >
                      OPEN GITHUB FILE
                    </a>
                  ) : (
                    <Link to="/cases" className="typewriter text-[10px] tracking-widest text-noir-ink underline underline-offset-4">
                      OPEN FULL CASEBOOK
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="chronicle" className="scroll-mt-20 sm:scroll-mt-28 px-3 sm:px-4 py-10 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8 sm:mb-12">
            <p className="typewriter text-noir-gold tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs">SECTION V</p>
            <h2 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">The Chronicle</h2>
          </header>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "AI Software Engineer Intern at Wortholic (Duration: 1.5 Months)",
                body: "Developed backend systems, REST APIs, and LLM-based features using OpenAI APIs. Optimised performance through testing and debugging.",
                label: "THE BAKER STREET HERALD · EXPERIENCE",
              },
              {
                title: "Local Runner-Up & Global Nominee — NASA Space Apps Challenge 2025",
                body: "Also pitched at IBA Tech Tank · Active participant in AI/ML hackathons across Karachi.",
                label: "THE BAKER STREET HERALD · ACHIEVEMENT",
              },
            ].map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
                viewport={{ once: true }}
                className="paper relative p-4 sm:p-6 md:p-8 max-w-3xl mx-auto sm:mx-0"
                style={{ marginLeft: i % 2 ? "auto" : undefined }}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-noir-blood shadow-lg ring-1 ring-black/40" />
                <div className="border-b-4 border-double border-noir-ink/40 pb-2">
                  <span className="typewriter text-[10px] tracking-[0.4em]">{item.label}</span>
                </div>
                <h3 className="headline-serif text-xl sm:text-3xl md:text-4xl mt-3 leading-tight">{item.title}</h3>
                {item.body ? (
                  <p className="mt-3 text-noir-ink leading-relaxed text-sm md:text-base">{item.body}</p>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="telegraph" className="scroll-mt-20 sm:scroll-mt-28 px-3 sm:px-4 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-6 sm:mb-10">
            <p className="typewriter text-noir-gold tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs">SECTION VI</p>
            <h2 className="headline-serif text-3xl sm:text-5xl md:text-6xl mt-2">Send a Telegram</h2>
          </header>
          <motion.div
            initial={{ y: 40, opacity: 0, rotate: 1 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="paper relative p-5 sm:p-8 text-center"
          >
            <div className="tape absolute -top-4 left-6 sm:left-10 w-20 sm:w-28 h-6 sm:h-7" />
            <p className="typewriter text-[10px] tracking-[0.4em] text-noir-ink/70">WESTERN UNION</p>
            <p className="headline-serif text-xl sm:text-2xl text-noir-ink mt-2">— TELEGRAM —</p>
            <p className="mt-5 text-noir-ink leading-relaxed">
              For collaborations, freelance casework, or a stubborn interface that needs proper investigation, send word.
            </p>
            <div className="mt-6">
              <Link
                to="/telegraph"
                className="typewriter inline-block bg-noir-black text-noir-paper px-6 py-3 text-xs tracking-[0.3em] hover:bg-noir-blood transition"
              >
                OPEN TELEGRAPH FORM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </NoirShell>
  );
}
