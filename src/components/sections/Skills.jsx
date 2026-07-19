import React, { useState } from "react";
import {
  Brain,
  Cloud,
  GitBranch,
  ShieldCheck,
  TerminalSquare,
  Code2,
  LayoutPanelTop,
  Server,
  Database,
  Wrench,
  Settings2,
} from "lucide-react";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";

const FILTERS = [
  { key: "languages", label: "Languages", icon: Code2 },
  { key: "frontend", label: "Frontend", icon: LayoutPanelTop },
  { key: "backend", label: "Backend", icon: Server },
  { key: "database", label: "Database", icon: Database },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "other", label: "Other", icon: Settings2 },
];

const SKILLS = [
  {
    key: "ml",
    label: "Machine Learning",
    icon: Brain,
    iconBg: "bg-yellow-300",
    category: "other",
  },
  {
    key: "aws",
    label: "AWS / Cloud",
    icon: Cloud,
    iconBg: "bg-lime-400",
    category: "other",
  },
  {
    key: "cicd",
    label: "CI / CD",
    icon: GitBranch,
    iconBg: "bg-pink-500",
    category: "other",
  },
  {
    key: "security",
    label: "Security",
    icon: ShieldCheck,
    iconBg: "bg-sky-400",
    category: "other",
  },
  {
    key: "shell",
    label: "Shell / Scripting",
    icon: TerminalSquare,
    iconBg: "bg-yellow-300",
    category: "other",
  },
];

function FilterPill({ label, icon: Icon, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-all
        ${active ? "bg-pink-500 text-white" : "bg-white text-black hover:bg-yellow-100"}
        shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
    >
      <Icon size={14} strokeWidth={2.5} />
      {label}
    </button>
  );
}

function SkillCard({ label, icon: Icon, iconBg }) {
  return (
    <div
      className="w-full sm:w-64 bg-white border-[3px] border-black px-6 py-8 flex flex-col items-center gap-4
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transition-all"
    >
      <div
        className={`${iconBg} border-2 border-black w-12 h-12 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
      >
        <Icon size={22} strokeWidth={2.5} className="text-black" />
      </div>
      <span className="font-inter font-bold text-sm text-black text-center">
        {label}
      </span>
    </div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("other");

  const visibleSkills = SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section className="w-full bg-[#F4F1EA] font-inter px-10 py-16 border-2 border-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <BrutalBox
          name="Core Skills"
          bg_color="bg-sky-400"
          font_family="font-inter"
          px="px-5"
          py="py-2"
        />

        <Comment content="//Technologies and tools I work with to bring ideas to life" />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-2">
          {FILTERS.map((f) => (
            <FilterPill
              key={f.key}
              label={f.label}
              icon={f.icon}
              active={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
            />
          ))}
        </div>

        {/* Skill cards */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-4">
          {visibleSkills.length > 0 ? (
            visibleSkills.map((s) => (
              <SkillCard
                key={s.key}
                label={s.label}
                icon={s.icon}
                iconBg={s.iconBg}
              />
            ))
          ) : (
            <p className="font-mono text-sm text-black/60">
              // no skills tagged for this category yet
            </p>
          )}
        </div>
      </div>
    </section>
  );
}