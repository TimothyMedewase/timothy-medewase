"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
        <main className=" mt-5 md:mx-auto lg:mx-12">
          <div className="mt-20 mb-5 text-6xl font-sans font-bold ">
            Timothy Medewase
          </div>
          <div className="mt-5 mb-5 text-lg">
            I am a full-stack software engineer passionate about building
            scalable web and mobile applications. Prev Software Development
            Intern @{" "}
            <Link href="https://www.solera.com/">
              <span className=" underline underline-offset-4">Solera</span>.
            </Link>{" "}
            At Solera, I helped to build a full-stack dashboard web application,
            leveraging tools like React.js and Microsoft SQL Server to provide
            insights into the company&apos;s data. My expertise spans modern web
            technologies including Next.js, React, TypeScript, and backend
            development with Node.js and databases like PostgreSQL and Prisma.
            I&apos;ve built e-commerce platforms, music analytics applications,
            and real-time data visualization dashboards. I enjoy crafting clean,
            maintainable code and implementing robust software architectures.
          </div>
          <div className="mt-2 mb-5 text-lg">
            I also have a strong passion for machine learning and artificial
            intelligence, particularly transformer architectures and Natural
            Language Processing. I&apos;ve implemented attention mechanisms from
            scratch, built CNNs for image classification, and developed
            RAG-powered applications using FastAPI, LangChain, and OpenAI APIs.
          </div>
          <div className="mt-2 mb-5 text-lg ">
            Currently focused on the intersection of software engineering and
            AI/ML, building production-ready applications that leverage
            intelligent systems. Always eager to tackle complex technical
            challenges and contribute to innovative software solutions.
          </div>
        </main>
      </motion.div>
    </div>
  );
}
