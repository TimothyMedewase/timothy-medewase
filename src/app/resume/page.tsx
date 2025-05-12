"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        className="relative flex flex-col gap-4 justify-center px-4"
      >
        <main className="mt-5 md:mx-auto lg:mx-12">
          <div className="mt-5 mb-12 font-sans font-bold text-5xl max-w-fit mx-auto">
            Resume
          </div>
          <div className="flex mx-auto flex-col max-w-fit">
            <Image
              src="/TimothyMedewaseResume.png"
              width={900}
              height={1000}
              alt="Picture of my resume"
            />
            <div className="flex py-2 justify-end">
              <a href="/TimothyMedewaseResume_2025.pdf" download>
                <Button>Download Resume</Button>
              </a>
            </div>
          </div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
}
