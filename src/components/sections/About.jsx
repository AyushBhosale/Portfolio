// AboutMe.jsx
import React from "react";
import { Clock, Rocket, Trophy, MapPin } from "lucide-react";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";
import StatCard from "../ui/StatCard";

const STATS = [
  { icon: Clock, value: "6+", label: "Years Experience", bg_color: "bg-yellow-300" },
  { icon: Rocket, value: "42", label: "Projects Built", bg_color: "bg-lime-400" },
  { icon: Trophy, value: "9", label: "Hackathons Won", bg_color: "bg-pink-400" },
  { icon: MapPin, value: "SF", label: "San Francisco, CA", bg_color: "bg-sky-400" },
];

export default function About() {
  return (
    <section className="w-full bg-[#F4F1EA] font-inter px-10 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Sticky-note header, now using BrutalBox itself */}
        <div className="inline-flex flex-col items-start gap-1">
          <BrutalBox
            name="About Me"
            bg_color="bg-pink-400"
            shadow_color="shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />
          <Comment content="//A quick look at who I am and what drives me" size="text-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* The Story card */}
          <div className="bg-white border-[3px] border-black px-6 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            <span className="text-2xl">🧑‍💻</span>
            <h3 className="font-inter font-black text-2xl">The Story</h3>
            <p className="font-inter text-sm leading-relaxed text-black/80">
              I'm a full stack developer with a soft spot for bold interfaces
              and rock-solid backends. I turn messy problems into shipped
              products.
            </p>
            <Comment content="#When I'm not coding, I'm winning hackathons, mentoring juniors, and obsessing over pixel-perfect, tactile UI details." />
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}