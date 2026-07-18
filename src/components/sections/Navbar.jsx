import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderOpen,
  Trophy,
  GraduationCap,
  Mail,
  TerminalSquare,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "About", icon: User },
  { label: "Experience", icon: Briefcase },
  { label: "Skills", icon: Code2 },
  { label: "Projects", icon: FolderOpen },
  { label: "Achievements", icon: Trophy },
  { label: "Education", icon: GraduationCap },
  { label: "Contact", icon: Mail },
];

function NavButton({ label, icon: Icon, active, iconOnly = false, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`group relative flex items-center gap-1.5 rounded-md font-mono text-sm font-semibold
        transition-transform duration-150 shrink-0
        ${iconOnly ? "p-2.5 justify-center" : "px-4 py-2"}
        ${
          active
            ? "bg-black text-white border-[3px] border-black -translate-x-0.5 -translate-y-0.5 shadow-[4px_4px_0px_0px_#FF3D9A]"
            : "text-black border-[3px] border-transparent hover:bg-white hover:border-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000000]"
        }`}
    >
      <Icon size={16} strokeWidth={2.25} className="shrink-0" />
      {!iconOnly && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F4F1E8] border-b-[3px] border-black relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-[#FFD43B] border-[3px] border-black rounded flex items-center justify-center">
            <TerminalSquare size={18} strokeWidth={2.5} className="text-black" />
          </div>
          <span className="font-mono font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap">
            DEV.RESUME
          </span>
        </div>

        {/* Desktop nav: full labels, xl and up */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavButton key={item.label} {...item} />
          ))}
        </div>

        {/* Tablet nav: icons only, md to xl */}
        <div className="hidden md:flex xl:hidden items-center gap-0.5">
          {navItems.map((item) => (
            <NavButton key={item.label} {...item} iconOnly />
          ))}
        </div>

        {/* Mobile hamburger, below md */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-10 h-10 bg-white border-[3px] border-black rounded-md shrink-0
            active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
            shadow-[3px_3px_0px_0px_#000000]"
        >
          {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden border-t-[3px] border-black bg-[#F4F1E8] px-4 py-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              {...item}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
}