"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Download, X } from "lucide-react";

const resumeData = [
  {
    id: 1,
    title: "Machine Learning Resume",
    description: "Specialized for ML/AI engineering roles",
    type: "ML / AI Focus",
    lastUpdated: "January 2025",
    imagePath: "/ml_resume.png",
    pdfPath: "/medewase_timothy_resume_2025.pdf",
  },
  {
    id: 2,
    title: "General Software Engineering Resume",
    description: "For full-stack and software development roles",
    type: "Software Engineering",
    lastUpdated: "January 2025",
    imagePath: "/resume.png",
    pdfPath: "/timothy_medewase_resume_2025.pdf",
  },
];

export default function Resume() {
  const [viewingResume, setViewingResume] = useState<string | null>(null);

  return (
    <main className="layout-md mt-4">
      <h1 className="text-2xl font-bold text-neutral-900 mt-8 mb-2">Resume</h1>
      <p className="text-neutral-500 text-[1rem] mb-10">
        Two versions of my resume — one tailored for ML/AI roles and one for
        general software engineering positions.
      </p>

      <div className="space-y-0">
        {resumeData.map((resume, index) => (
          <div
            key={resume.id}
            className={`py-6 ${index < resumeData.length - 1 ? "border-b border-neutral-200" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 leading-snug mb-0.5">
                  {resume.title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1">
                  {resume.type}
                </p>
                <p className="text-sm text-neutral-500">
                  {resume.description} · Updated {resume.lastUpdated}
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0 mt-0.5">
                <button
                  onClick={() => setViewingResume(resume.imagePath)}
                  className="inline-flex items-center gap-0.5 text-sm text-neutral-500 hover:text-black transition-colors"
                >
                  view <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={resume.pdfPath}
                  download
                  className="inline-flex items-center gap-0.5 text-sm text-neutral-500 hover:text-black transition-colors"
                >
                  download <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox viewer */}
      {viewingResume && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
          onClick={() => setViewingResume(null)}
        >
          <div
            className="relative bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-5 py-3 flex justify-between items-center">
              <span className="text-sm font-medium text-neutral-700">Resume Preview</span>
              <button
                onClick={() => setViewingResume(null)}
                className="text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <Image
                src={viewingResume}
                alt="Resume Preview"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
