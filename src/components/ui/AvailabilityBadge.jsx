import React from "react";
function AvailabilityBadge({
  text = "AVAILABLE\nFOR HIRE",
  className = "",
}) {
  return (
    <div
      className={`absolute -top-2.5 -right-9 rotate-[33deg] select-none ${className}`}
    >
      <div className="bg-[#FFD43B] border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-black font-extrabold text-xs leading-tight tracking-wide text-center uppercase whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
}

export default AvailabilityBadge;