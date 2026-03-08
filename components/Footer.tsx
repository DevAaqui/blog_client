"use client";

import { Link, Button, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

interface FooterProps {
  profile: Profile;
}

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
      <path fill="#000" d="M9.545 15.568V8.432L15.818 12z" />
    </svg>
  ),
};

export function Footer({ profile }: FooterProps) {
  return (
    <footer id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s build something great
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8 px-2 sm:px-0">
            Have a project in mind? I&apos;d love to hear about it. Drop me a
            message and let&apos;s discuss how I can help bring your vision to
            life.
          </p>
          <Button
            as={Link}
            href={`mailto:${profile.email}`}
            size="lg"
            radius="full"
            className="bg-white text-black font-semibold px-10 hover:bg-zinc-200 text-base"
          >
            Send me an email
          </Button>
        </motion.div>

        <Divider className="bg-zinc-800 mb-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {profile.socialLinks &&
              Object.entries(profile.socialLinks)
                .filter(([, url]) => url)
                .map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    isExternal
                    className="text-zinc-600 hover:text-white transition-colors"
                  >
                    {socialIcons[platform] || (
                      <span className="text-sm capitalize">{platform}</span>
                    )}
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
