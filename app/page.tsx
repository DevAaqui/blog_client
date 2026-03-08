import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { Footer } from "@/components/Footer";
import {
  getProfile,
  getExperiences,
  getSkills,
  getProjects,
  getPublishedBlogs,
} from "@/lib/api";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Aaquib — Full-Stack Developer & Freelancer",
  description:
    "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products. Available for freelance projects.",
  openGraph: {
    title: "Aaquib — Full-Stack Developer & Freelancer",
    description:
      "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products. Available for freelance projects.",
    url: "https://buildwithaaquib.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaquib — Full-Stack Developer & Freelancer",
    description:
      "Expert full-stack developer specializing in building scalable web applications, APIs, and digital products.",
  },
  alternates: {
    canonical: "https://buildwithaaquib.in",
  },
};

export default async function HomePage() {
  const [profile, experiences, skills, projects, blogData] = await Promise.all([
    getProfile(),
    getExperiences(),
    getSkills(),
    getProjects(),
    getPublishedBlogs(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection profile={profile} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogPreviewSection blogs={blogData.blogs} />
      <Footer profile={profile} />
    </>
  );
}
