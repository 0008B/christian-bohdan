"use client";

import { useEffect, useState } from "react";
import type { TerminalLine } from "@/lib/site-content";

interface TerminalProps {
  title: string;
  lines: TerminalLine[];
}

interface Progress {
  line: number;
  chars: number;
  outShown: boolean;
}

const INITIAL: Progress = { line: 0, chars: 0, outShown: false };

/**
 * Fake shell window that "types" the given command/output pairs.
 * Re-runs whenever `lines` changes (e.g. language switch).
 * Respects prefers-reduced-motion by rendering everything instantly.
 */
export function Terminal({ title, lines }: TerminalProps) {
  const [progress, setProgress] = useState<Progress>(INITIAL);

  useEffect(() => {
    // All state updates happen inside the interval callback (not synchronously
    // in the effect body), so the first tick — including the reset — is async.
    let line = 0;
    let chars = 0;
    let outShown = false;
    let hold = 3;
    let done = false;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const id = window.setInterval(() => {
      if (reduced) {
        setProgress({ line: lines.length, chars: 0, outShown: false });
        window.clearInterval(id);
        done = true;
        return;
      }
      if (line >= lines.length) {
        if (!done) {
          setProgress({ line, chars, outShown });
          done = true;
        }
        window.clearInterval(id);
        return;
      }
      const current = lines[line];
      if (chars < current.cmd.length) {
        chars += 1;
      } else if (!outShown) {
        if (hold > 0) {
          hold -= 1;
          return;
        }
        outShown = true;
        hold = 7;
      } else if (hold > 0) {
        hold -= 1;
        return;
      } else {
        line += 1;
        chars = 0;
        outShown = false;
        hold = 2;
      }
      setProgress({ line, chars, outShown });
    }, 30);

    return () => window.clearInterval(id);
  }, [lines]);

  const allDone = progress.line >= lines.length;

  return (
    <div className="rounded-xl border border-[#6dbbff]/15 bg-[#030d2c]/90 overflow-hidden shadow-[0_8px_40px_rgba(0,144,255,0.12)]">
      {/* Title bar — the terminal always keeps its dark look, in both themes */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#6dbbff]/10 bg-[#04123a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-[#8592b0] select-none">{title}</span>
      </div>
      {/* Body */}
      <div className="p-4 font-mono text-[13px] leading-6 min-h-[10.5rem]">
        {lines.slice(0, progress.line).map((l) => (
          <div key={l.cmd} className="mb-1">
            <p>
              <span className="text-[#28c840]">➜</span> <span className="text-[#6dbbff]">~</span>{" "}
              <span className="text-[#e9f0ff]">{l.cmd}</span>
            </p>
            <p className="text-[#8592b0]">{l.out}</p>
          </div>
        ))}
        {!allDone && progress.line < lines.length && (
          <div className="mb-1">
            <p>
              <span className="text-[#28c840]">➜</span> <span className="text-[#6dbbff]">~</span>{" "}
              <span className="text-[#e9f0ff]">{lines[progress.line].cmd.slice(0, progress.chars)}</span>
              <span className="cb-cursor text-[#0090ff]">▋</span>
            </p>
            {progress.outShown && <p className="text-[#8592b0]">{lines[progress.line].out}</p>}
          </div>
        )}
        {allDone && (
          <p>
            <span className="text-[#28c840]">➜</span> <span className="text-[#6dbbff]">~</span>{" "}
            <span className="cb-cursor text-[#0090ff]">▋</span>
          </p>
        )}
      </div>
    </div>
  );
}
