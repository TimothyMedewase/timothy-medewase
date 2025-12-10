"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const resumeData = [
  {
    id: 1,
    title: "Machine Learning Resume",
    description: "Specialized for ML/AI engineering roles",
    type: "ML/AI Focus",
    lastUpdated: "January 2025",
    imagePath: "/ml_resume.png",
    pdfPath: "/medewase_timothy_resume_2025.pdf",
    color: "blue",
  },
  {
    id: 2,
    title: "General Software Engineering Resume",
    description: "For full-stack and software development roles",
    type: "Software Engineering",
    lastUpdated: "January 2025",
    imagePath: "/resume.png",
    pdfPath: "/timothy_medewase_resume_2025.pdf",
    color: "green",
  },
];

export default function Resume() {
  const [viewingResume, setViewingResume] = useState<string | null>(null);

  const openResumeView = (imagePath: string) => {
    setViewingResume(imagePath);
  };

  const closeResumeView = () => {
    setViewingResume(null);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 justify-center px-4"
      >
        <main className="mt-5 mx-4 max-w-4xl xl:mx-auto">
          <div className="mt-5 mb-12 font-sans font-bold text-5xl text-center">
            Resume
          </div>

          {/* Resume List */}
          <div className="space-y-6 mb-16">
            {resumeData.map((resume, index) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Resume Title */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 ${
                        resume.color === "blue"
                          ? "bg-blue-500/20"
                          : "bg-green-500/20"
                      } rounded-lg`}
                    >
                      <FileText
                        className={`w-6 h-6 ${
                          resume.color === "blue"
                            ? "text-blue-400"
                            : "text-green-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {resume.title}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => openResumeView(resume.imagePath)}
                      variant="outline"
                      className="flex items-center gap-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    <a href={resume.pdfPath} download>
                      <Button
                        className={`flex items-center gap-2 ${
                          resume.color === "blue"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-green-600 hover:bg-green-700"
                        } text-white transition-all duration-200 hover:scale-105`}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>

      {/* Resume Viewer Modal */}
      {viewingResume && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-xl border border-gray-700 max-w-4xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Resume Preview
              </h3>
              <Button
                onClick={closeResumeView}
                variant="outline"
                size="sm"
                className="border-gray-600 hover:border-gray-400"
              >
                Close
              </Button>
            </div>
            <div className="p-6">
              <Image
                src={viewingResume}
                alt="Resume Preview"
                width={800}
                height={1000}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
