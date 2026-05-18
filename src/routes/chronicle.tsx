import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NoirShell } from "@/components/NoirShell";

export const Route = createFileRoute("/chronicle")({
  component: Chronicle,
  head: () => ({
    meta: [
      { title: "The Chronicle | The Detective" },
      { name: "description", content: "Press clippings documenting prior investigations and roles." },
    ],
  }),
});

const clippings = [
  {
    year: "2024 — PRESENT",
    headline: "Engineer Cracks Performance Mystery at OBSIDIAN LABS",
    role: "Principal Detective / Staff Engineer",
    body: "Lead investigator on a platform serving 14M users monthly. Reduced p95 latency by 62% in a single quarter. Mentors junior officers on case work.",
    tags: ["Next.js", "Rust", "Postgres"],
    rotate: -1.5,
  },
  {
    year: "2021 — 2024",
    headline: "Mysterious Refactor Saves Failing Startup",
    role: "Senior Investigator / Lead Engineer · NORTHWIND CO.",
    body: "Inherited a tangled monolith of unknown provenance. Extracted seven services, instituted observability, recovered the on-call team's sleep.",
    tags: ["Node", "Kubernetes", "Datadog"],
    rotate: 2,
  },
  {
    year: "2019 — 2021",
    headline: "Local Dev Closes 38 Cold Cases in Backlog",
    role: "Field Officer / Software Engineer · MERIDIAN GROUP",
    body: "Shipped a redesigned billing pipeline. Eliminated entire categories of recurring incidents. Witness testimony favorable.",
    tags: ["Python", "Django", "AWS"],
    rotate: -2,
  },
  {
    year: "2018",
    headline: "Promising Recruit Joins the Force",
    role: "Cadet / Junior Engineer · FIRST CASE",
    body: "Began the career. Many bugs. Most survived.",
    tags: ["JavaScript", "PHP"],
    rotate: 1.5,
  },
];

function Chronicle() {
  return (
    <NoirShell>
      <section className="px-4 max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <p className="typewriter text-noir-gold tracking-[0.5em] text-xs">SECTION V</p>
          <h1 className="headline-serif text-5xl md:text-6xl mt-2">The Chronicle</h1>
          <p className="typewriter text-noir-gold/60 mt-3 text-sm">// PRIOR INVESTIGATIONS, AS REPORTED</p>
        </header>

        <div className="space-y-10">
          {clippings.map((c, i) => (
            <motion.article
              key={c.headline}
              initial={{ opacity: 0, y: 60, rotate: c.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="paper relative p-6 md:p-8 max-w-3xl"
              style={{ marginLeft: i % 2 ? "auto" : "0" }}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-noir-blood shadow-lg ring-1 ring-black/40" />
              <div className="flex items-baseline justify-between border-b-4 border-double border-noir-ink/40 pb-2">
                <span className="typewriter text-[10px] tracking-[0.4em]">THE DAILY LEDGER</span>
                <span className="typewriter text-[10px] tracking-[0.3em]">{c.year}</span>
              </div>
              <h2 className="headline-serif text-3xl md:text-4xl mt-3 leading-tight">{c.headline}</h2>
              <p className="typewriter text-xs uppercase tracking-widest text-noir-blood mt-2">{c.role}</p>
              <p className="mt-3 text-noir-ink leading-relaxed text-sm md:text-base columns-1 md:columns-2 gap-6">
                {c.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="typewriter text-[10px] border border-noir-ink/40 px-2 py-0.5 tracking-widest text-noir-ink">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </NoirShell>
  );
}
