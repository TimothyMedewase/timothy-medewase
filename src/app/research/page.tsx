"use client";
import React from "react";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const Research = () => {
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
            Research
          </div>
          <div className="flex max-w-fit mt-5 text-xl">Coming Soon...</div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
};

export default Research;
