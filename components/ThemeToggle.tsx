"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: Readonly<{ className?: string }>) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-full border border-rosewood/20 dark:border-cream/20 text-rosewood/60 dark:text-cream/60 hover:text-rosewood dark:hover:text-cream hover:border-rosewood/40 dark:hover:border-cream/40 transition-colors",
        className
      )}
    >
      {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
    </button>
  );
}
