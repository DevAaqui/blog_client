import type { Metadata } from "next";
import { getPublishedBlogs } from "@/lib/api";
import { BlogCategoryFilter } from "@/components/BlogCategoryFilter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Aaquib",
  description:
    "Case studies, scaling solutions, and AI integration guides from real-world projects.",
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <section className="py-10 sm:py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Articles &amp; Insights
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Deep dives into real projects, performance engineering, and
            integrating AI into production applications.
          </p>
        </div>

        <BlogCategoryFilter blogs={blogs} />
      </div>
    </section>
  );
}
