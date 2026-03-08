"use client";

import { Tabs, Tab, Button } from "@heroui/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BlogCard } from "./BlogCard";
import { motion } from "framer-motion";
import type { Blog, BlogCategory, Pagination } from "@/lib/types";

interface BlogCategoryFilterProps {
  blogs: Blog[];
  pagination: Pagination;
}

const categories: { key: BlogCategory | "all"; label: string; description: string }[] = [
  { key: "all", label: "All Posts", description: "Everything I've written" },
  { key: "case-study", label: "Case Studies", description: "Real-world projects and their outcomes" },
  { key: "scaling-and-performance", label: "Scaling & Performance", description: "Making things faster, bigger, and more reliable" },
  { key: "ai-integration", label: "AI Integrations", description: "Building intelligent features with AI/ML" },
];

export function BlogCategoryFilter({ blogs, pagination }: BlogCategoryFilterProps) {
  const [selected, setSelected] = useState<string>("all");
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtered =
    selected === "all"
      ? blogs
      : blogs.filter((b) => b.category === selected);

  const activeCategory = categories.find((c) => c.key === selected);
  const { currentPage, totalPages } = pagination;

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`/blog?${params.toString()}`);
  }

  return (
    <div>
      <Tabs
        aria-label="Blog categories"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as string)}
        variant="underlined"
        classNames={{
          base: "mb-4 w-full overflow-x-auto",
          tabList: "gap-3 sm:gap-6 border-b border-zinc-800 pb-0 flex-nowrap min-w-max sm:min-w-0",
          tab: "px-0 h-10 text-xs sm:text-sm whitespace-nowrap",
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
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </motion.div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-16 mb-4">
          <Button
            size="sm"
            variant="bordered"
            radius="full"
            isDisabled={currentPage <= 1}
            onPress={() => goToPage(currentPage - 1)}
            className="border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent min-w-[100px]"
            startContent={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            }
          >
            Previous
          </Button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 ${
                  page === currentPage
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-zinc-500 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            variant="bordered"
            radius="full"
            isDisabled={currentPage >= totalPages}
            onPress={() => goToPage(currentPage + 1)}
            className="border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent min-w-[100px]"
            endContent={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            }
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
