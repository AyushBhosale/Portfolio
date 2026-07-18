import React from "react";
import AvailabilityBadge from "./AvailabilityBadge";
export default function ProfileHero({
  src,
  alt = "Profile photo",
  available = true,
  badgeText = "AVAILABLE\nFOR HIRE",
  className = "",
}) {
  return (
    <div className={`relative inline-block p-8 ${className}`}>
      {/* Photo frame */}
     <div className="relative w-[320px] h-[420px] border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-black">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "70% 35%" }}
        />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
            Add photo
          </div>
        )}
      </div>
 
      {/* Sticky-note badge */}
      {available && <AvailabilityBadge text={badgeText} />}
    </div>
  );
}