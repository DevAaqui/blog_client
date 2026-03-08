"use client";

import { Tabs, Tab } from "@heroui/react";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { motion } from "framer-motion";
import type { Blog, BlogCategory } from "@/lib/types";

interface BlogCategoryFilterProps {
  blogs: Blog[];
}

const categories: { key: BlogCategory | "all"; label: string; description: string }[] = [
  { key: "all", label: "All Posts", description: "Everything I've written" },
  { key: "case-study", label: "Case Studies", description: "Real-world projects and their outcomes" },
  { key: "scaling", label: "Scaling & Performance", description: "Making things faster, bigger, and more reliable" },
  { key: "ai", label: "AI Integrations", description: "Building intelligent features with AI/ML" },
];

export function BlogCategoryFilter({ blogs }: BlogCategoryFilterProps) {
  const [selected, setSelected] = useState<string>("all");

  const filtered =
    selected === "all"
      ? blogs
      : blogs.filter((b) => b.category === selected);

  const activeCategory = categories.find((c) => c.key === selected);

  return (
    <div>
      <Tabs
        aria-label="Blog categories"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as string)}
        variant="underlined"
        classNames={{
          base: "mb-4",
          tabList: "gap-6 border-b border-zinc-800 pb-0",
          tab: "px-0 h-10 text-sm",
          cursor: "bg-blue-500",
          tabContent: "text-zinc-500 group-data-[selected=true]:text-white font-medium",
        }}
      >
        {categories.map((cat) => (
          <Tab key={cat.key} title={cat.label} />
        ))}
      </Tabs>

      {activeCategory && (
        <p className="text-zinc-500 text-sm mb-10">{activeCategory.description}</p>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-zinc-500 text-lg">
            No articles in this category yet.
          </p>
        </div>
      ) : (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((blog, i) => (
            <BlogCard key={blog._id} blog={blog} index={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
