import Link from "next/link";

const timeline = [
  {
    type: "education",
    role: "M.S. Computer Science",
    company: "University of Texas at Arlington",
    href: "https://www.uta.edu/",
    period: "Aug. 2026 – May 2028",
    description:
      "Studying for a Master of Science in Computer Science with a focus on machine learning.",
  },
  {
    type: "work",
    role: "Software Engineer (AI/ML)",
    company: "Figbox Technologies, Inc",
    href: "https://figbox.co/",
    period: "June 2025 – June 2026",
    description:
      "Built ML-powered backend services and natural-language search feature for users.",
  },
  {
    type: "work",
    role: "Software Development Intern",
    company: "Solera, Inc",
    href: "https://www.solera.com/",
    period: "Summer 2023",
    description:
      "Built a full-stack analytics dashboard to aid internal reporting and analytics workflows.",
  },
  {
    type: "education",
    role: "B.S. Computer Science, Minor in Mathematics",
    company: "University of Montevallo",
    href: "https://www.montevallo.edu/",
    period: "Aug. 2021 – May 2025",
    description:
      "Studied Computer Science and Mathematics with a focus on software engineering and machine learning.",
  },
];


export default function Home() {
  return (
    <main className="layout-md mt-4">
      {/* Hero */}
      <p className="text-neutral-900 text-4xl leading-tight font-light mb-16 mt-8">
        <span className="text-neutral-400">is a </span>software engineer
        <span className="text-neutral-400">,</span>
        <br />
        AI/ML enthusiast.
      </p>

      {/* Bio */}
      <div className="text-[1.05rem] leading-relaxed space-y-5 text-neutral-700 mb-16">
        <p>
          I am a full-stack software engineer passionate about building scalable
          web, mobile and AI-powered applications. Previously a Software Development Intern
          at{" "}
          <a className="link" href="https://www.solera.com/" target="_blank" rel="noopener noreferrer">
            Solera
          </a>
          , where I helped build a full-stack dashboard web application using
          React.js and Microsoft SQL Server.
        </p>
        <p>
          My expertise spans modern web technologies including Next.js, React,
          TypeScript, and backend development with Node.js, PostgreSQL, and
          Prisma. I&apos;ve built e-commerce platforms, music analytics
          applications, and real-time data visualization dashboards.
        </p>
        <p>
          I also have a strong passion for machine learning and AI — particularly
          transformer architectures and NLP. I&apos;ve implemented attention
          mechanisms from scratch, built CNNs for image classification, and
          developed RAG-powered applications using FastAPI, LangChain, and
          OpenAI APIs.
        </p>
      </div>

      {/* Timeline — commented out for now
      <div className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          Experience &amp; Education
        </h2>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-neutral-200" />

          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.company + item.role} className="relative flex gap-5">
                <div className="relative flex-shrink-0 mt-[6px]">
                  <div className={`w-[11px] h-[11px] rounded-full border-2 bg-white ${item.type === "education" ? "border-neutral-300" : "border-neutral-400"
                    }`} />
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <span className="font-medium text-neutral-900 text-[1rem]">
                      {item.role}
                    </span>
                    <span className="text-neutral-400 text-sm">·</span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 hover:text-black transition-colors"
                    >
                      {item.company}
                    </a>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-3">
                    {item.period}
                  </p>
                  {item.type === "work" && (
                    <p className="text-[0.92rem] text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

    </main>
  );
}
