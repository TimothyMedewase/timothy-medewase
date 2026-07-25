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
      <p className="text-neutral-900 text-xl leading-tight font-light mb-16 mt-8">
        <span className="text-neutral-400">is a </span>software / AI/ML engineer
      </p>

      {/* Bio */}
      <div className="text-[1.05rem] leading-relaxed space-y-5 text-neutral-700 mb-16">
        <p>
          I&apos;m a software engineer focused on building AI-powered products
          at the intersection of full-stack engineering and machine learning. I
          earned my B.S. in Computer Science from the{" "}
          <a className="link" href="https://www.montevallo.edu/" target="_blank" rel="noopener noreferrer">
            University of Montevallo
          </a>
          {" "}on a full-ride scholarship (~$160,000), and I&apos;m currently
          pursuing an M.S. in Computer Science at the University of Texas at
          Arlington starting Fall 2026.
        </p>
        <p>
          Most recently, I was a Software Engineer (AI/ML) at{" "}
          <a className="link" href="https://figbox.co" target="_blank" rel="noopener noreferrer">
            Figbox Technologies
          </a>
          , where I built ML-powered backend services supporting users. Before that, I interned
          at{" "}
          <a className="link" href="https://www.solera.com/" target="_blank" rel="noopener noreferrer">
            Solera
          </a>
          , where I shipped a full-stack
          analytics dashboard used for internal reporting.
        </p>
        <p>
          I love building personal projects like{" "}
          <a className="link" href="https://deep-research-frontend-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
            Deep Research Agent
          </a>
          {" "}— an AI agent that decomposes queries into subquestions and
          streams cited answers in real time under constrained budgets,{" "}
          <a className="link" href="https://openbolts.vercel.app" target="_blank" rel="noopener noreferrer">
            OpenBolts
          </a>
          , a hybrid RAG context layer for automotive repair manuals, and{" "}
          <a className="link" href="https://www.tryscour.co" target="_blank" rel="noopener noreferrer">
            SCOUR
          </a>
          , an iOS recruiting app that helps young athletes discover 15,000+ college sports
          programs.
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
