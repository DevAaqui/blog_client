export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  avatar?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    [key: string]: string | undefined;
  };
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
  _id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
