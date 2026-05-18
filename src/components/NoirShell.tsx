import { EvidenceNav } from "./EvidenceNav";

export function NoirShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="film-grain vignette min-h-screen bg-noir-black text-noir-paper overflow-x-hidden relative">
      <div className="noir-bg" aria-hidden="true">
        <div className="blinds" />
        <div className="searchlight" />
        <div className="smoke" />
        <div className="smoke s2" />
        <div className="pendulum" />
        <div className="dust" />
        <div className="dust d2" />
      </div>
      <EvidenceNav />
      <main className="relative z-[1] pt-24 pb-24">{children}</main>
      <footer className="relative z-[1] border-t border-noir-blood/30 px-6 py-8 typewriter text-xs text-noir-gold/60 text-center tracking-widest">
        ◆ CONFIDENTIAL ◆ PROPERTY OF THE DETECTIVE ◆ DO NOT DUPLICATE ◆
      </footer>
    </div>
  );
}
