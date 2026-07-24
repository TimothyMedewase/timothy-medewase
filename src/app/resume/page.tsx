import { ArrowUpRight, Download } from "lucide-react";

const resume = {
  title: "Software Engineering Resume",
  description: "For full-stack and software development roles",
  type: "Software Engineering",
  lastUpdated: "January 2025",
  pdfPath: "/01_timothy_medewase_resume.pdf",
};

export default function Resume() {
  return (
    <main className="layout-md mt-4">
      <h1 className="text-2xl font-bold text-neutral-900 mt-8 mb-2">Resume</h1>
      <div className="py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 leading-snug mb-0.5">
              {resume.title}
            </h2>
          </div>
          <div className="flex gap-3 flex-shrink-0 mt-0.5">
            <a
              href={resume.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-sm text-neutral-500 hover:text-black transition-colors"
            >
              view <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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
    </main>
  );
}
