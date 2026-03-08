"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import type { Experience } from "@/lib/types";

interface ExperienceSectionProps {
  experiences: Experience[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-8">
            {sorted.map((exp, i) => (
              <motion.div
                key={exp._id ?? `exp-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black hidden md:block" />

                <Card className="bg-zinc-900/50 border border-zinc-800/50 shadow-none">
                  <CardBody className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-zinc-500 whitespace-nowrap">
                        {formatDate(exp.startDate)} —{" "}
                        {exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : ""}
                      </span>
                    </div>

                    {exp.location && (
                      <p className="text-sm text-zinc-500 mb-3">{exp.location}</p>
                    )}

                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: "bg-zinc-800/80 border-none",
                              content: "text-zinc-400 text-xs",
                            }}
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
