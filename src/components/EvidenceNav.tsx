import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

const items = [
  { to: "/", label: "Hero", note: "OPEN", rotate: -6, color: "bg-yellow-100" },
  { to: "/dossier", label: "Dossier", note: "DOSSIER", rotate: 4, color: "bg-amber-100" },
  { to: "/lab", label: "Fingerprint Lab", note: "LAB", rotate: -3, color: "bg-stone-100" },
  { to: "/cases", label: "Case Files", note: "CASES", rotate: 5, color: "bg-orange-100" },
  { to: "/chronicle", label: "Chronicle", note: "PRESS", rotate: -4, color: "bg-yellow-50" },
  { to: "/telegraph", label: "Telegraph", note: "WIRE", rotate: 3, color: "bg-amber-50" },
] as const;

export function EvidenceNav() {
  const loc = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <div className="relative pointer-events-auto rounded-sm border border-noir-blood/30 bg-gradient-to-b from-[#3a2418] to-[#241208] px-3 py-2 shadow-2xl backdrop-blur-sm">
          {/* corkboard texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "radial-gradient(rgba(200,150,80,.3) 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
          {/* red string */}
          <div className="absolute left-6 right-6 top-1/2 string" style={{ transform: "rotate(-1deg)" }} />
          <div className="relative flex items-center justify-between gap-2 flex-wrap">
            <Link to="/" className="typewriter text-noir-gold text-sm tracking-[0.3em] px-2">
              ◆ THE CASE
            </Link>
            <div className="flex flex-wrap gap-2">
              {items.slice(1).map((it) => {
                const active = loc.pathname === it.to;
                return (
                  <motion.div
                    key={it.to}
                    whileHover={{ rotate: 0, scale: 1.08, y: -2 }}
                    style={{ rotate: it.rotate }}
                    className="relative"
                  >
                    {/* pin */}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-noir-blood shadow-md ring-1 ring-black/40 z-10" />
                    <Link
                      to={it.to}
                      className={`${it.color} block typewriter text-[10px] tracking-widest px-3 py-1 text-noir-ink shadow-md ${active ? "ring-2 ring-noir-blood" : ""}`}
                    >
                      {it.note}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
