"use client";

import { Avatar, Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Avatar
              src={profile.avatar ? `${apiUrl}${profile.avatar}` : undefined}
              name={profile.name}
              className="w-40 h-40 text-3xl ring-4 ring-blue-500/20"
              isBordered
              color="primary"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-white mb-1">
              {profile.name}
            </h3>
            <p className="text-blue-400 font-medium mb-4">{profile.title}</p>
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg whitespace-pre-line">
              {profile.bio}
            </p>

            {profile.aboutMe && (
              <div className="mt-6">
                <Accordion>
                  <AccordionItem
                    key="about-me"
                    title="More about me"
                    textValue="More about me"
                  >
                    {profile.aboutMe}
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm text-zinc-500">
              {profile.location && (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {profile.location}
                </span>
              )}
              {profile.email && (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {profile.email}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
