import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import BrutalBox from "../ui/BrutalBox";
import Comment from "../ui/Comment";


const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.98 10.98 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
    <path d="M18.9 1.9h3.6l-7.9 9 9.3 12.2h-7.3l-5.7-7.5-6.6 7.5H.7l8.4-9.6L.2 1.9h7.5l5.2 6.9 6-6.9Zm-1.3 19h2L6.5 3.9h-2l13.1 17Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
);

const CONTACT_INFO = [
  { key: "email", icon: Mail, label: "ayushbhosale7997@gmail.com" },
  { key: "phone", icon: Phone, label: "+91 7900071252" },
  { key: "location", icon: MapPin, label: "Mumbai, MH" },
];

const SOCIALS = [
  { key: "github", icon: GithubIcon, bg: "bg-white", href: "https://github.com/AyushBhosale" },
  { key: "linkedin", icon: LinkedinIcon, bg: "bg-sky-400", href: "https://www.linkedin.com/in/ayush-bhosale-207ba7250/" },
//   { key: "twitter", icon: TwitterIcon, bg: "bg-yellow-300", href: "" },
];

function InfoRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 border-2 border-black bg-neutral-50 px-4 py-3">
      <Icon size={16} strokeWidth={2.5} className="text-black shrink-0" />
      <span className="font-mono text-sm text-black">{label}</span>
    </div>
  );
}

function SocialSwatch({ icon: Icon, bg, href }) {
  return (
    <a
      href={href}
      className={`${bg} w-10 h-10 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
    >
      <Icon size={16} strokeWidth={2.5} className="text-black" />
    </a>
  );
}

function ContactInfoCard() {
  return (
    <div className="w-full bg-white border-[3px] border-black p-6 flex flex-col gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="font-mono font-bold text-lg text-black">
        <span className="text-blue-500">&gt;_</span> contact.info
      </h3>

      <div className="flex flex-col gap-3">
        {CONTACT_INFO.map((item) => (
          <InfoRow key={item.key} icon={item.icon} label={item.label} />
        ))}
      </div>

      <div className="flex gap-3 mt-1">
        {SOCIALS.map((s) => (
          <SocialSwatch key={s.key} icon={s.icon} bg={s.bg} href={s.href} />
        ))}
      </div>
    </div>
  );
}

const WEB3FORMS_ACCESS_KEY = "0803a087-5e88-4a02-b96a-f2f2b00634bb";

function ContactFormCard() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border-[3px] border-black p-6 flex flex-col gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <h3 className="font-inter font-black text-lg text-black">Send a Message</h3>

      <div className="flex flex-col gap-1.5">
        <label className="font-inter font-bold text-xs text-black">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange("name")}
          className="border-2 border-black bg-neutral-50 px-3 py-2 font-mono text-sm placeholder:text-black/40 focus:outline-none focus:bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-inter font-bold text-xs text-black">Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange("email")}
          className="border-2 border-black bg-neutral-50 px-3 py-2 font-mono text-sm placeholder:text-black/40 focus:outline-none focus:bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-inter font-bold text-xs text-black">Message</label>
        <textarea
          rows={4}
          placeholder="Let's build something..."
          value={form.message}
          onChange={handleChange("message")}
          className="border-2 border-black bg-neutral-50 px-3 py-2 font-mono text-sm placeholder:text-black/40 resize-y focus:outline-none focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-pink-500 text-white font-inter font-bold text-sm uppercase border-2 border-black px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <Send size={15} strokeWidth={2.5} />
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="font-mono text-xs text-lime-700 text-center">
          Message sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-xs text-red-600 text-center">
          Something went wrong — try again or email me directly.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#F4F1EA] font-inter px-10 py-16 border-2 border-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <BrutalBox
          name="Let's Connect"
          bg_color="bg-sky-400"
          font_family="font-inter"
          px="px-5"
          py="py-2"
        />

        <Comment content="//Open to opportunities, collaborations, and good conversations" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 items-start">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}