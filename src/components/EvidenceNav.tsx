import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  { href: "/#hero", note: "OPEN", rotate: -6, color: "bg-yellow-100" },
  { href: "/#profile", note: "PROFILE", rotate: 4, color: "bg-amber-100" },
  { href: "/#lab", note: "LAB", rotate: -3, color: "bg-stone-100" },
  { href: "/#cases", note: "CASES", rotate: 5, color: "bg-orange-100" },
  { href: "/#chronicle", note: "PRESS", rotate: -4, color: "bg-yellow-50" },
  { href: "/#telegraph", note: "WIRE", rotate: 3, color: "bg-amber-50" },
] as const;

export function EvidenceNav() {
  const loc = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 pt-2 sm:pt-3">
        <div className="relative pointer-events-auto rounded-sm border border-noir-blood/30 bg-gradient-to-b from-[#3a2418] to-[#241208] px-3 py-2 shadow-2xl backdrop-blur-sm">
          {/* corkboard texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "radial-gradient(rgba(200,150,80,.3) 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
          {/* red string — hidden on mobile */}
          <div className="absolute left-6 right-6 top-1/2 string hidden sm:block" style={{ transform: "rotate(-1deg)" }} />

          <div className="relative flex items-center justify-between gap-2">
            <Link to="/" className="typewriter text-noir-gold text-sm tracking-[0.3em] px-2 shrink-0">
              ◆ AMNA
            </Link>

            {/* Desktop nav items */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {items.slice(1).map((it) => {
                const active = loc.pathname === "/" && loc.href.includes(it.href.slice(1));
                return (
                  <motion.div
                    key={it.href}
                    whileHover={{ rotate: 0, scale: 1.08, y: -2 }}
                    style={{ rotate: it.rotate }}
                    className="relative"
                  >
                    {/* pin */}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-noir-blood shadow-md ring-1 ring-black/40 z-10" />
                    <a
                      href={it.href}
                      className={`${it.color} block typewriter text-[10px] tracking-widest px-3 py-1 text-noir-ink shadow-md ${active ? "ring-2 ring-noir-blood" : ""}`}
                    >
                      {it.note}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden typewriter text-noir-gold text-xl px-2 py-1 hover:text-noir-blood transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? "✕" : "≡"}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="sm:hidden overflow-hidden"
              >
                <div className="relative pt-3 pb-2 flex flex-wrap gap-2 justify-center">
                  {items.slice(1).map((it) => {
                    const active = loc.pathname === "/" && loc.href.includes(it.href.slice(1));
                    return (
                      <motion.div
                        key={it.href}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-noir-blood shadow-md ring-1 ring-black/40 z-10" />
                        <a
                          href={it.href}
                          onClick={() => setMobileOpen(false)}
                          className={`${it.color} block typewriter text-[10px] tracking-widest px-4 py-1.5 text-noir-ink shadow-md ${active ? "ring-2 ring-noir-blood" : ""}`}
                        >
                          {it.note}
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
