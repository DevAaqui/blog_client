"use client";

import { Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Blog, BlogCategory } from "@/lib/types";

const categoryLabels: Record<BlogCategory, { text: string; color: string }> = {
  "case-study": { text: "Case Study", color: "bg-emerald-500/10 text-emerald-400" },
  "scaling-and-performance": { text: "Scaling & Perf", color: "bg-amber-500/10 text-amber-400" },
  "ai-integration": { text: "AI Integration", color: "bg-violet-500/10 text-violet-400" },
  general: { text: "General", color: "bg-zinc-500/10 text-zinc-400" },
};

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const dateStr = blog.publishedAt || blog.createdAt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${blog.slug}`} className="block h-full">
        <Card className="bg-zinc-900/50 border border-zinc-800/50 shadow-none hover:border-zinc-700/80 transition-colors group h-full">
          {blog.coverImage && (
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={
                  blog.coverImage.startsWith("http")
                    ? blog.coverImage
                    : `${apiUrl}${blog.coverImage}`
                }
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <CardBody className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
              {dateStr && (
                <p className="text-xs sm:text-sm text-zinc-500">
                  {formatDate(dateStr)}
                </p>
              )}
              {blog.category && categoryLabels[blog.category] && (
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryLabels[blog.category].color}`}>
                  {categoryLabels[blog.category].text}
                </span>
              )}
              {blog.readTime && (
                <span className="text-xs sm:text-sm text-zinc-500">
                  {blog.readTime} min read
                </span>
              )}
              {blog.status === "draft" && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">
                  Draft
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
              {blog.title}
            </h3>
            {blog.excerpt && (
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>
            )}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.slice(0, 3).map((tag) => (
                  <Chip
                    key={tag}
                    size="sm"
                    variant="flat"
                    classNames={{
                      base: "bg-zinc-800/80 border-none",
                      content: "text-zinc-500 text-xs",
                    }}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            )}
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
