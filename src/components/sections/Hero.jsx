import React from "react";
import Name from "../ui/Name.jsx";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";
import ProfileHero from "../ui/ProfileHero";
import TypewriterBrutalBox from "../ui/TypewriterBrutalBox.jsx";

const TAGS = [
  { label: "React", bg: "bg-pink-400" },
  { label: "FastAPI", bg: "bg-white" },
  { label: "Spring Boot", bg: "bg-lime-400" },
  { label: "Python", bg: "bg-sky-400" },
];

export default function Hero({ photoSrc }) {
  return (
    <section id="home" className="w-full bg-[#F4F1EA] font-inter px-10 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left column */}
        <div className="flex flex-col items-start gap-5">
          <BrutalBox
            name=">_ open to work"
            bg_color="bg-lime-400"
            font_family="font-mono"
            px="px-4"
            py="py-1"
            shadow_color="shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            border_color="border-2 border-black"
          />

          <Name first_name="Ayush" last_name="Bhosale" />

          <TypewriterBrutalBox
            showPrompt
            bg_color="bg-white"
            roles={["Full Stack Developer", "Backend Engineer", "AI/ML Engineer", "DevOps Enthuisast"]}
            animated
            typingSpeed={70}
            pauseDuration={1600}
          />

          <Comment
            content={
              "Building tactile, high-contrast web experiences.\nSpring Boot & FastAPI under the hood, clean code and\nraw pixels on top."
            }
          />

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#resume"
              className="bg-yellow-300 text-black font-inter font-bold text-sm uppercase border-[3px] border-black px-5 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="bg-white text-black font-inter font-bold text-sm uppercase border-[3px] border-black px-5 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {TAGS.map((tag) => (
              <span
                key={tag.label}
                className={`${tag.bg} text-black font-inter font-bold text-xs uppercase border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center md:justify-end">
          <ProfileHero src={photoSrc} alt="Ayush Bhosale" />
        </div>
      </div>
    </section>
  );
}