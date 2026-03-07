import type { Metadata } from "next";
import { getPublishedBlogs } from "@/lib/api";
import { BlogCard } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Aaquib",
  description:
    "Articles on web development, software engineering, and building digital products.",
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <section className="py-24 sm:py-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Articles &amp; Insights
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Thoughts on web development, software architecture, and lessons
            learned building products.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">
              No articles published yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <BlogCard key={blog._id} blog={blog} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
