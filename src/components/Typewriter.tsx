import { useEffect, useState } from "react";

export function Typewriter({ lines, speed = 45, startDelay = 0, onDone }: {
  lines: string[]; speed?: number; startDelay?: number; onDone?: () => void;
}) {
  const [shown, setShown] = useState<string[]>([""]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancel = false;
    let lineIdx = 0;
    let charIdx = 0;
    const tick = () => {
      if (cancel) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        onDone?.();
        return;
      }
      const cur = lines[lineIdx];
      if (charIdx <= cur.length) {
        setShown((prev) => {
          const next = [...prev];
          next[lineIdx] = cur.slice(0, charIdx);
          return next;
        });
        charIdx++;
        setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        setShown((prev) => [...prev, ""]);
        setTimeout(tick, 450);
      }
    };
    const t = setTimeout(tick, startDelay);
    return () => { cancel = true; clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="typewriter text-noir-paper space-y-2">
      {shown.map((l, i) => (
        <p key={i} className="text-lg md:text-2xl">
          {l}
          {!done && i === shown.length - 1 && <span className="typewriter-cursor" />}
        </p>
      ))}
    </div>
  );
}
