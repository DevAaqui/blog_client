"use client";

import { Card, CardBody, CardFooter, Chip, Link, Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Selected work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border border-zinc-800/50 shadow-none hover:border-zinc-700/80 transition-colors group h-full">
                {project.thumbnail && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={
                        project.thumbnail.startsWith("http")
                          ? project.thumbnail
                          : `${apiUrl}${project.thumbnail}`
                      }
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  </div>
                )}
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        size="sm"
                        variant="flat"
                        classNames={{
                          base: "bg-zinc-800/80 border-none",
                          content: "text-zinc-400 text-xs",
                        }}
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0 gap-3">
                  {project.liveUrl && (
                    <Button
                      as={Link}
                      href={project.liveUrl}
                      isExternal
                      size="sm"
                      radius="full"
                      className="bg-white text-black font-medium"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      as={Link}
                      href={project.githubUrl}
                      isExternal
                      size="sm"
                      radius="full"
                      variant="bordered"
                      className="border-zinc-700 text-zinc-300"
                    >
                      Source Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
