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
    key: "curiobot",
    title: "CurioBot",
    year: "2026",
    link: "#",
    tags: [
      { label: "FastAPI", color: "pink" },
      { label: "React", color: "white" },
      { label: "MongoDB", color: "green" },
      { label: "Azure Blob", color: "blue" },
    ],
    description: [
      "Built a full-stack document analysis platform with a FastAPI backend and React (Axios) frontend, implementing secure JWT-based user authentication backed by SQL, with MongoDB handling user interaction/history data.",
      "Built the React.js frontend consuming REST APIs, with Axios-based error handling and JWT-authenticated request flows.",
      "Integrated a RAG-based document retrieval pipeline with Azure Blob Storage for document handling and storage.",
    ],
    preview: <CurioBotPreview />,
  },
  {
    key: "befit",
    title: "BeFit",
    year: "2026",
    link: "#",
    tags: [
      { label: "Spring Boot", color: "pink" },
      { label: "Eureka", color: "white" },
      { label: "RabbitMQ", color: "green" },
      { label: "Gemini API", color: "blue" },
    ],
    description: [
      "Developed a Spring Boot microservices platform integrating Eureka service discovery, Spring Cloud Gateway, and RabbitMQ for a fitness-tracking application.",
      "Integrated Google Gemini API and MongoDB to generate and persist AI-powered fitness recommendations from user activity data.",
      "Resolved production-blocking issues across the stack including a Spring Boot 4.1 auto-configuration bug in MongoDB connection binding.",
    ],
    preview: <BeFitPreview />,
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

function CurioBotPreview() {
  return (
    <div className="w-full h-40 bg-black border-2 border-black flex flex-col justify-center gap-2 px-4 py-3 font-mono text-[11px]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-lime-400" />
        <span className="text-lime-400">RAG_PIPELINE :: ONLINE</span>
      </div>
      <div className="bg-white/10 h-2 w-[85%] rounded-sm" />
      <div className="bg-white/10 h-2 w-[60%] rounded-sm" />
      <div className="bg-white/10 h-2 w-[70%] rounded-sm" />
      <div className="text-white/50 mt-1">{"> querying blob storage..."}</div>
    </div>
  );
}

function BeFitPreview() {
  return (
    <div className="w-full h-40 bg-[#f4f1ea] border-2 border-black flex items-center justify-center gap-3 px-3">
      {["Gateway", "Eureka", "RabbitMQ"].map((s) => (
        <div
          key={s}
          className="bg-white border-2 border-black px-2 py-3 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex-1"
        >
          <span className="font-inter font-black text-[10px] uppercase text-black">
            {s}
          </span>
        </div>
      ))}
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

      {/* Description bullets */}
      <ul className="flex flex-col gap-1.5">
        {description.map((line, i) => (
          <li
            key={i}
            className="font-inter text-sm text-black/80 leading-relaxed flex gap-1.5"
          >
            <span className="shrink-0">•</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {/* Preview */}
      {preview}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#F4F1EA] font-inter px-10 py-16 border-2 border-black">
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