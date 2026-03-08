import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/api";
import { BlogPostContent } from "@/components/BlogPostContent";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const { blogs } = await getPublishedBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Post Not Found" };
  }

  const postUrl = `https://buildwithaaquib.in/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt || blog.title,
    keywords: blog.tags,
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt || blog.title,
      url: postUrl,
      images: blog.coverImage ? [blog.coverImage] : [],
      publishedTime: blog.publishedAt,
      authors: blog.author?.name ? [blog.author.name] : undefined,
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.coverImage ? [blog.coverImage] : undefined,
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

function BlogPostJsonLd({ blog }: { blog: { title: string; slug: string; excerpt?: string; coverImage?: string; publishedAt?: string; updatedAt: string; author?: { name: string } } }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.title,
    url: `https://buildwithaaquib.in/blog/${blog.slug}`,
    ...(blog.coverImage && { image: blog.coverImage }),
    datePublished: blog.publishedAt || blog.updatedAt,
    dateModified: blog.updatedAt,
    author: {
      "@type": "Person",
      name: blog.author?.name || "Aaquib",
      url: "https://buildwithaaquib.in",
    },
    publisher: {
      "@type": "Person",
      name: "Aaquib",
      url: "https://buildwithaaquib.in",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogPostJsonLd blog={blog} />
      <BlogPostContent blog={blog} />
    </>
  );
}
