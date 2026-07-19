import React from "react";
import { Calendar } from "lucide-react";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";

const TAG_STYLES = {
  pink: "bg-pink-400",
  white: "bg-white",
  green: "bg-lime-400",
  blue: "bg-sky-400",
};

const PROJECTS = [
  {
    key: "analytics-dashboard",
    title: "Analytics Dashboard Platform",
    year: "2024",
    tags: [
      { label: "Next.js", color: "pink" },
      { label: "D3.js", color: "white" },
      { label: "Redis", color: "green" },
    ],
    description:
      "Real-time analytics for 10k+ concurrent users with sub-second query response.",
    preview: <DashboardPreview />,
  },
  {
    key: "mobile-finance-tracker",
    title: "Mobile Finance Tracker App",
    year: "2023",
    tags: [
      { label: "React Native", color: "pink" },
      { label: "Node", color: "white" },
      { label: "Plaid", color: "green" },
    ],
    description:
      "Budgeting app with 50k+ downloads and a 4.8 star rating on the App Store.",
    preview: <PhonePreview />,
  },
];

function Tag({ label, color }) {
  return (
    <span
      className={`${TAG_STYLES[color] || "bg-white"} text-black font-inter font-bold text-[11px] uppercase border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
    >
      {label}
    </span>
  );
}

function DashboardPreview() {
  const bars = [40, 65, 30, 80, 55, 90, 45, 70, 35, 60];
  return (
    <div className="w-full h-40 bg-black border-2 border-black flex items-end gap-1 px-3 py-3">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-lime-400"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="w-full h-40 bg-[#f4f1ea] border-2 border-black flex items-center justify-center">
      <div className="w-16 h-32 bg-white border-[3px] border-black rounded-[10px] flex flex-col items-center justify-center gap-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <span className="font-inter font-black text-lg text-black">$5k</span>
        <div className="w-8 h-1 bg-black/20 rounded-full" />
      </div>
    </div>
  );
}

function ProjectCard({ title, year, tags, description, preview }) {
  return (
    <div className="w-full bg-white border-[3px] border-black p-5 flex flex-col gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      {/* Title + checkbox */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-inter font-black text-lg text-black leading-snug">
          {title}
        </h3>
        <span className="shrink-0 w-6 h-6 border-2 border-black" />
      </div>

      {/* Date */}
      <div className="flex items-center gap-1.5 font-mono text-xs text-black/60">
        <Calendar size={13} strokeWidth={2.5} />
        <span>{year}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t.label} label={t.label} color={t.color} />
        ))}
      </div>

      {/* Description */}
      <p className="font-inter text-sm text-black/80 leading-relaxed">
        <span className="mr-1.5">•</span>
        {description}
      </p>

      {/* Preview */}
      {preview}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full bg-[#F4F1EA] font-inter px-10 py-16 border-2 border-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <BrutalBox
          name="Projects"
          bg_color="bg-yellow-300"
          font_family="font-inter"
          px="px-5"
          py="py-2"
        />

        <Comment content="//A showcase of my recent works" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.key} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}