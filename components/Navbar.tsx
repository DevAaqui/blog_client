"use client";

import { Link, Button } from "@heroui/react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
      />
    </div>
  );
}

export function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden p-2 -ml-2 tap-highlight-transparent"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <HamburgerIcon open={isMenuOpen} />
          </button>

          <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight">
            <span className="text-white">BuildWith</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aaquib
            </span>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          as={Link}
          href="/#contact"
          size="sm"
          radius="full"
          className="bg-white text-black font-semibold hover:bg-zinc-200 px-4 py-1 text-sm"
        >
          Hire Me
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-4 pt-2 pb-6 border-t border-white/5 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-zinc-300 hover:text-white py-3 block"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
