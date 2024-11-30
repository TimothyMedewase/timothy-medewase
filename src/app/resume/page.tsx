"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Resume() {
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
        <main className="mt-5 md:mx-auto lg:mx-12">
          <div className="mt-5 mb-12 font-sans font-bold text-5xl max-w-fit mx-auto">
            Resume
          </div>
          <div className="flex max-w-fit mx-auto mt-5 ">
            <iframe
              src="/TimothyMedewase_2025Resume.pdf"
              width="1200"
              height="900"
            />
          </div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
}
