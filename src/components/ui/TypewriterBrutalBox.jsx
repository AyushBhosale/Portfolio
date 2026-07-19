import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";

const TypewriterBrutalBox = ({
  font_color = "text-black",
  bg_color = "bg-white-400",
  border_color = "border-black",
  shadow_color = "shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]",
  px = "px-6",
  py = "py-2",
  font_family = "font-inter",
  roles, // string[], e.g. ["Full Stack Developer", "AI/ML Developer", "DevOps Enthusiast"]
  showPrompt = false,
  typingSpeed = 80,
  loop = true,
  pauseDuration = 1500,
}) => {
  const typed = useTypewriter(roles, { speed: typingSpeed, loop, pause: pauseDuration });
  const maxLen = Math.max(...roles.map((s) => s.length-1));

  return (
    <div className="inline-block">
      <style>{`
        @keyframes brutal-cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .brutal-cursor {
          animation: brutal-cursor-blink 1s steps(1) infinite;
        }
      `}</style>
      <div
        className={`${font_color} ${bg_color} ${font_family} font-extrabold text-3xl border-4 ${border_color} ${px} ${py} ${shadow_color} inline-flex items-center gap-2`}
      >
        {showPrompt && <span className="text-blue-500">$</span>}

        {/* Fixed-width slot sized to the LONGEST role, left-aligned so
            text grows naturally left-to-right as it types, cursor
            trails right after the live text. */}
        <span
          className="inline-flex items-center justify-start"
          style={{ width: `${maxLen}ch` }}
        >
          <span className="whitespace-pre">{typed}</span>
          <span
            className="brutal-cursor bg-black inline-block shrink-0"
            style={{ width: "0.62ch", height: "1.05em" }}
          />
        </span>
      </div>
    </div>
  );
};

export default TypewriterBrutalBox;