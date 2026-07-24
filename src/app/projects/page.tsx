import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "./data";

export default function Projects() {
  return (
    <main className="layout-md mt-4">
      <h1 className="text-2xl font-bold text-neutral-900 mt-8 mb-2">Projects</h1>
      <div>
        {projectsData.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="project-entry scroll-mt-20"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 leading-snug">
                  {project.title}
                </h2>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {project.type}
                </span>
              </div>
              <div className="flex gap-3 flex-shrink-0 mt-0.5">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-sm text-neutral-500 hover:text-black transition-colors"
                  >
                    website <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-sm text-neutral-500 hover:text-black transition-colors"
                  >
                    github <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-neutral-600 text-[0.95rem] leading-relaxed mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
