export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  aboutMe?: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  avatar?: string;
  resumeUrl?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  socialLinks?: Record<string, string>;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  location?: string;
  technologies?: string[];
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency?: number;
  icon?: string;
}

export interface Project {
  id: number;
  userId: number;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  featured?: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export type BlogCategory = "case-study" | "scaling-and-performance" | "ai-integration" | "general";

export type BlogStatus = "published" | "draft";

export interface BlogAuthor {
  id: number;
  name: string;
  avatar: string | null;
}

export interface Blog {
  id: number;
  userId: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  category?: BlogCategory;
  tags?: string[];
  status: BlogStatus;
  publishedAt?: string;
  readTime?: number;
  createdAt: string;
  updatedAt: string;
  author?: BlogAuthor;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginatedBlogs {
  blogs: Blog[];
  pagination: Pagination;
}
