"use client";

import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import type { Blog } from "@/lib/types";

interface BlogPreviewSectionProps {
  blogs: Blog[];
}

export function BlogPreviewSection({ blogs }: BlogPreviewSectionProps) {
  console.log('blogs from blog preview section>>>>>>', blogs);
  const latest = blogs.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section id="blog" className="py-24 sm:py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
              Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Latest articles
            </h2>
          </div>
          <Button
            as={Link}
            href="/blog"
            variant="bordered"
            radius="full"
            className="border-zinc-700 text-zinc-300 hover:bg-white/5 self-start sm:self-auto"
          >
            View All Posts
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
