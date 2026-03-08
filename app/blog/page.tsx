import { Suspense } from "react";
import type { Metadata } from "next";
import { getPublishedBlogs } from "@/lib/api";
import { BlogCategoryFilter } from "@/components/BlogCategoryFilter";
import { BlogListSkeleton } from "@/components/BlogListSkeleton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Aaquib",
  description:
    "Case studies, scaling solutions, and AI integration guides from real-world projects.",
};

async function BlogContent({ page }: { page: number }) {
  const { blogs, pagination } = await getPublishedBlogs(page);
  return <BlogCategoryFilter blogs={blogs} pagination={pagination} />;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);

  return (
    <section className="py-8 sm:py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Articles &amp; Insights
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            Deep dives into real projects, performance engineering, and
            integrating AI into production applications.
          </p>
        </div>

        <Suspense key={currentPage} fallback={<BlogListSkeleton />}>
          <BlogContent page={currentPage} />
        </Suspense>
      </div>
    </section>
  );
}
