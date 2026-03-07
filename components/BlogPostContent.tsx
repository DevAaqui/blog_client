"use client";

import Image from "next/image";
import { Chip, Link, Button } from "@heroui/react";
import type { Blog } from "@/lib/types";

interface BlogPostContentProps {
  blog: Blog;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPostContent({ blog }: BlogPostContentProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  return (
    <article className="py-24 sm:py-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Button
          as={Link}
          href="/blog"
          variant="light"
          radius="full"
          className="text-zinc-400 hover:text-white mb-8 -ml-4"
          startContent={
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          }
        >
          Back to Blog
        </Button>

        <header className="mb-10">
          <p className="text-sm text-zinc-500 mb-4">
            {formatDate(blog.publishedAt || blog.createdAt)}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {blog.title}
          </h1>
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Chip
                  key={tag}
                  size="sm"
                  variant="flat"
                  classNames={{
                    base: "bg-zinc-800/80 border-none",
                    content: "text-zinc-400 text-xs",
                  }}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          )}
        </header>

        {blog.coverImage && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12">
            <Image
              src={
                blog.coverImage.startsWith("http")
                  ? blog.coverImage
                  : `${apiUrl}${blog.coverImage}`
              }
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  );
}
