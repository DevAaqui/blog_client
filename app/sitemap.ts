import type { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/lib/api";

const SITE_URL = "https://buildwithaaquib.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { blogs } = await getPublishedBlogs();

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
