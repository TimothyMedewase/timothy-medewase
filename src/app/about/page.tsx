"use client";
import React from "react";
import { motion } from "framer-motion";
import Cards from "@/components/Cards";

const About = () => {
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
        <main className="mt-5 px-12">
          <div className="mt-5 mb-20 font-sans font-bold text-5xl max-w-fit mx-auto">
            Timothy Medewase
          </div>
          <div className=" flex flex-col md:flex-row gap-4">
            <Cards />
            <p className=" mt-5 text-left ">
              I am software engineer with a background in Computer science and
              Mathematics. I am currently pursuing a Bachelors degree in
              computer science with a mathematics minor at the University of
              Montevallo, Alabama. I am also very interested in Machine learning
              and Artificial intelligence.
              <br />
              <br />
              Over the past years, I have been very much involved in Mathematics
              and Sciences and mostly been interested in the intersection
              between Chemistry and Mathematics. I have competed in several
              mathematics competion like the AMC 8, 10, 12, South African
              Mathematics Olympiad, Kangourou sans frontières maths competion
              and many more, and I have bagged a couple medals in them. Also, I
              competed in various chemistry competions like the Nigerian
              Chemistry Olympiad ranking in the top 10 in the country and top 3
              in my state.
              <br />
              <br />
              My passion for both Mathematics and Chemistry has led to me
              aspiring for a future where machine learning and artificial
              intelligence models can be used to solve complex problems
              particularly, in the field of Chemistry.
            </p>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default About;
