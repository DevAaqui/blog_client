import { BlogListSkeleton } from "@/components/BlogListSkeleton";

export default function BlogLoading() {
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

        <BlogListSkeleton />
      </div>
    </section>
  );
}
