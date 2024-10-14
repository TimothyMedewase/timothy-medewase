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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <main className=" mt-10 px-12">
          <div className="mt-20 mb-5 text-6xl font-sans font-bold ">
            Timothy Medewase
          </div>
          <div className="mt-5 mb-5 text-lg ">
            I am a full-stack software engineer passionate about building web
            and mobile applications. Prev Software Development Intern @{" "}
            <Link href="https://www.solera.com/">
              <span className=" underline underline-offset-4">Solera</span>.
            </Link>
          </div>
          <div className="mt-2 mb-5 text-md ">
            I have a strong passion for machine learning and deep learning
            systems. The AlphaFold2 project by DeepMind inspired me, and
            combined with my experience in Chemistry Olympiads, I’ve developed a
            keen interest in computational chemistry, particularly in how AI/ML
            is transforming the field.
          </div>
          <div className="mt-2 mb-5 text-md ">
            Currently working on AI/ ML projects and aspiring to tackle complex
            problems in the near future ...
          </div>
        </main>
      </motion.div>
    </div>
  );
}
