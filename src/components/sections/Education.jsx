import React from "react";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";

const ICON_COLORS = ["bg-yellow-300", "bg-pink-400", "bg-sky-400"];

const TAG_COLORS = [
  "border-purple-500 bg-purple-100",
  "border-lime-600 bg-lime-100",
  "border-sky-500 bg-sky-100",
  "border-amber-500 bg-amber-100",
];

const SCORE_BADGE_PROPS = {
  px: "px-3",
  py: "py-1",
  text_size: "text-xs",
  border_width: "border-2",
  font_weight: "font-bold",
  shadow_color: "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
};

const EDUCATION = [
  {
    key: "mumbai-university",
    institution: "Mumbai University",
    location: "Mumbai, IN",
    years: null,
    degree: "B.E. Artificial Intelligence & Data Science",
    score: "CGPA 8.86",
    scoreColor: "bg-yellow-300",
    skills: ["Backend", "Cloud", "Machine Learning"],
  },
  {
    key: "maharashtra-hsc",
    institution: "Maharashtra HSC",
    location: "Maharashtra, IN",
    years: null,
    degree: "Science",
    score: "60.69%",
    scoreColor: "bg-sky-400",
    skills: ["Physics", "Maths", "Chemistry"],
  },
  {
    key: "maharashtra-ssc",
    institution: "Maharashtra SSC",
    location: "Maharashtra, IN",
    years: null,
    degree: null,
    score: "83%",
    scoreColor: "bg-lime-400",
    skills: ["Science", "History", "Geography", "Maths"],
  },
];

function SkillTag({ label, colorClass }) {
  return (
    <span
      className={`${colorClass} text-black font-mono font-bold text-[11px] rounded-full border-2 px-3 py-1`}
    >
      {label}
    </span>
  );
}

function EducationCard({ institution, location, years, degree, score, scoreColor, skills, index }) {
  const iconBg = ICON_COLORS[index % ICON_COLORS.length];

  return (
    <div className="w-full bg-white border-[3px] border-black p-5 flex flex-col gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="flex items-start justify-between gap-3">
        {/* Icon + title block */}
        <div className="flex items-start gap-3">
          <div
            className={`${iconBg} border-2 border-black w-9 h-9 flex items-center justify-center shrink-0`}
          >
            <GraduationCap size={18} strokeWidth={2.5} className="text-black" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-inter font-black text-lg text-black leading-snug">
              {institution}
            </h3>
            {location && (
              <div className="flex items-center gap-1 font-mono text-xs text-black/60">
                <MapPin size={12} strokeWidth={2.5} />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Years + score */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          {years && (
            <span className="inline-flex items-center gap-1 border-2 border-black px-2 py-1 font-mono text-[11px] font-bold">
              <CalendarDays size={12} strokeWidth={2.5} />
              {years}
            </span>
          )}
          {/* <span
            className={`${scoreColor} border-2 border-black px-2 py-1 font-mono text-[11px] font-bold`}
          >
            {score}
          </span> */}
          <BrutalBox name={score} bg_color={scoreColor} {...SCORE_BADGE_PROPS} />
        </div>
      </div>

      {degree && (
        <p className="font-inter font-bold text-sm text-blue-600">{degree}</p>
      )}

      <div className="flex flex-col gap-2">
        <span className="font-inter font-bold text-xs text-black">
          Key Skills:
        </span>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <SkillTag key={s} label={s} colorClass={TAG_COLORS[i % TAG_COLORS.length]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="w-full bg-[#F4F1EA] font-inter px-10 py-16 border-2 border-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <BrutalBox
          name="Education"
          bg_color="bg-lime-400"
          font_family="font-inter"
          px="px-5"
          py="py-2"
        />

        <Comment content="//Academic foundation in computer science and technology" />

        <div className="flex flex-col gap-6 mt-4">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.key} {...edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}