"use client";
import React from "react";
import { motion } from "framer-motion";
import { DataTable } from "@/components/DataTable";
import { projectsData } from "./data";
import Footer from "@/components/Footer";

const Projects = () => {
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
          <div className="mt-5 mb-5 font-sans font-bold text-5xl max-w-fit mx-auto">
            Projects
          </div>
          <div className=" mx-auto py-10">
            <DataTable data={projectsData} />
          </div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
};

export default Projects;
