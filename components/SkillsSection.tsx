"use client";

import { Chip } from "@heroui/react";
import { motion } from "framer-motion";
import type { Skill } from "@/lib/types";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  database: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  devops: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  mobile: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  tools: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  other: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

function getCategoryColor(category: string) {
  return categoryColors[category.toLowerCase()] || categoryColors.other;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(grouped);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([category, catSkills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50"
            >
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <Chip
                    key={skill._id}
                    variant="bordered"
                    classNames={{
                      base: `border ${getCategoryColor(category)}`,
                      content: "text-sm font-medium",
                    }}
                  >
                    {skill.name}
                  </Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
