"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/content/profile";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [body, setBody] = useState("");

  const mailto = () => {
    const subject = encodeURIComponent(`Hello from ${name || "someone"}`);
    const lines = [body, "", "—", name, from].filter(Boolean).join("\n");
    return `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(lines)}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-rosewood text-cream overflow-hidden"
    >
      <div className="absolute inset-0 sunburst-bg opacity-20" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 text-cream/60">
            <span
              className="inline-block w-2 h-2 rounded-full bg-cream"
              aria-hidden
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
              Contact
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cream font-light tracking-tight">
            Let&apos;s jam.
          </h2>
          <p className="mt-4 text-cream/75 max-w-lg">
            Got a project, a question, or a record recommendation? Send a note.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto();
          }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-butterscotch focus:bg-cream/15 transition-colors font-sans"
            />
            <input
              type="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-butterscotch focus:bg-cream/15 transition-colors font-sans"
            />
          </div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
            placeholder="What's on your mind?"
            required
            className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-butterscotch focus:bg-cream/15 transition-colors resize-none font-sans"
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-cream/70 hover:text-butterscotch text-sm font-mono"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-butterscotch text-rosewood font-mono text-xs uppercase tracking-widest hover:bg-cream transition-colors shadow-chrome"
            >
              Send <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap gap-5 text-cream/70 font-mono text-xs uppercase tracking-widest">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-butterscotch transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
