"use client";

import { Skeleton } from "@heroui/react";

function BlogCardSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-full">
      <Skeleton classNames={{ base: "w-full aspect-[16/9] rounded-none bg-zinc-800/60" }} />
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <Skeleton classNames={{ base: "h-4 w-28 rounded-md bg-zinc-800/60" }} />
          <Skeleton classNames={{ base: "h-5 w-20 rounded-full bg-zinc-800/60" }} />
        </div>
        <Skeleton classNames={{ base: "h-6 w-full rounded-md bg-zinc-800/60 mb-2" }} />
        <Skeleton classNames={{ base: "h-6 w-3/4 rounded-md bg-zinc-800/60 mb-3" }} />
        <Skeleton classNames={{ base: "h-4 w-full rounded-md bg-zinc-800/60 mb-1.5" }} />
        <Skeleton classNames={{ base: "h-4 w-full rounded-md bg-zinc-800/60 mb-1.5" }} />
        <Skeleton classNames={{ base: "h-4 w-2/3 rounded-md bg-zinc-800/60 mb-4" }} />
        <div className="flex gap-2 mt-4">
          <Skeleton classNames={{ base: "h-6 w-16 rounded-full bg-zinc-800/60" }} />
          <Skeleton classNames={{ base: "h-6 w-14 rounded-full bg-zinc-800/60" }} />
          <Skeleton classNames={{ base: "h-6 w-20 rounded-full bg-zinc-800/60" }} />
        </div>
      </div>
    </div>
  );
}

export function BlogListSkeleton() {
  return (
    <div>
      <div className="flex gap-3 sm:gap-6 border-b border-zinc-800 pb-3 mb-4 overflow-x-auto">
        {["All Posts", "Case Studies", "Scaling & Performance", "AI Integrations"].map(
          (label) => (
            <Skeleton
              key={label}
              classNames={{
                base: "h-8 rounded-md bg-zinc-800/60",
                content: "invisible",
              }}
            >
              <span className="px-1 text-sm">{label}</span>
            </Skeleton>
          ),
        )}
      </div>

      <Skeleton classNames={{ base: "h-4 w-48 rounded-md bg-zinc-800/60 mb-10" }} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
