import React from "react";
import { useTypewriter } from "../../hooks/useTypewriter";


const BrutalBox = ({
  font_color = "text-black",
  bg_color = "bg-pink-400",
  border_color = "border-black",
  shadow_color = "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
  px = "px-6",
  py = "py-2",
  font_family = "font-inter",
  name, // string, e.g. "Full Stack Developer"
  roles, // optional string[], e.g. ["Full Stack Developer", "AI/ML Developer", "DevOps Enthusiast"]
  animated = false,
  showPrompt = false,
  typingSpeed = 80,
  loop = true,
  pauseDuration = 1500,
}) => {
  // If `roles` is provided it takes priority and cycles; otherwise falls
  // back to the single `name` string.
  const source = roles && roles.length > 0 ? roles : name;
  const typed = useTypewriter(source, { speed: typingSpeed, loop, pause: pauseDuration });
  const text = animated ? typed : Array.isArray(source) ? source[0] : source;
 
  // Reserve width for the LONGEST string in the set so the box never
  // resizes as it cycles between roles of different lengths.
  const allStrings = Array.isArray(source) ? source : [source];
  const maxLen = Math.max(...allStrings.map((s) => s.length));
 
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
 
        {/* Fixed-width slot sized in ch units to the LONGEST role, so the
            outer box stays static across every string in the rotation.
            The cursor lives inside this slot right after the live text,
            so it moves with typing instead of sitting static. */}
        <span
          className="inline-flex items-center"
          style={{ width: `${maxLen + 1}ch` }}
        >
          <span className="whitespace-pre">{text}</span>
          {animated && (
            <span
              className="brutal-cursor bg-black inline-block shrink-0"
              style={{ width: "0.62ch", height: "1.05em" }}
            />
          )}
        </span>
      </div>
    </div>
  );
};
 
export default BrutalBox;
 