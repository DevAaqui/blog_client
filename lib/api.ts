import type { Profile, Experience, Education, Skill, Project, Blog } from "./types";
import {
  sampleProfile,
  sampleExperiences,
  sampleSkills,
  sampleProjects,
  sampleBlogs,
} from "./sample-data";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function fetcher<T>(endpoint: string, revalidate = 3600): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getProfile(): Promise<Profile> {
  try {
    return await fetcher<Profile>("/api/profile");
  } catch {
    return sampleProfile;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const data = await fetcher<Experience[]>("/api/experiences");
    return data.length > 0 ? data : sampleExperiences;
  } catch {
    return sampleExperiences;
  }
}

export async function getEducations(): Promise<Education[]> {
  try {
    return await fetcher<Education[]>("/api/educations");
  } catch {
    return [];
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const data = await fetcher<Skill[]>("/api/skills");
    return data.length > 0 ? data : sampleSkills;
  } catch {
    return sampleSkills;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await fetcher<Project[]>("/api/projects");
    return data.length > 0 ? data : sampleProjects;
  } catch {
    return sampleProjects;
  }
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  try {
    const data = await fetcher<Blog[]>("/api/blogs/published");
    return data.length > 0 ? data : sampleBlogs;
  } catch {
    return sampleBlogs;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    return await fetcher<Blog>(`/api/blogs/published/${slug}`, 1800);
  } catch {
    return sampleBlogs.find((b) => b.slug === slug) ?? null;
  }
}
