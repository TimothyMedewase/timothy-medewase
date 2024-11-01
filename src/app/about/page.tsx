"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Footer from "@/components/Footer";

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
        <main className=" mt-5 md:mx-auto lg:mx-12">
          <div className="mt-5 mb-12 font-sans font-bold text-5xl max-w-fit mx-auto">
            Timothy Medewase
          </div>
          <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <Card className="w-full max-w-md lg:w-96 flex-shrink-0 mx-auto lg:mx-0">
                <CardContent className="p-0">
                  <div className="w-full h-auto">
                    <div className="aspect-[4/3.5] lg:aspect-[3/4]">
                      <Image
                        src="/timothy_medewase.jpg"
                        alt="Card image"
                        className="object-cover w-full h-full rounded-xl"
                        height={600}
                        width={450}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex-1 flex flex-col">
                <p className="mb-4">
                  I am software engineer with a strong foundation in Computer
                  science and Mathematics, currently pursuing a bachelors degree
                  in computer science with a minor in mathematics at the
                  University of Montevallo, Alabama. I am also very interested
                  in Machine learning and Artificial intelligence.
                </p>
                <p className="mb-4">
                  Over the years, I have been actively involved in mathematics
                  and sciences, especially drawn to the intersection of
                  chemistry and mathematics. I have participated in several
                  mathematics competitions, including the AMC 8, 10, and 12, the
                  South African Mathematics Olympiad, and the Kangourou sans
                  frontières, earning multiple medals. In addition, I competed
                  in various chemistry competitions, such as the Nigerian
                  Chemistry Olympiad, where I ranked in the top 10 nationally
                  and in the top 3 in my state.
                </p>
                <p>
                  My passion for both Mathematics and Chemistry has led to me
                  aspiring for a future where machine learning and artificial
                  intelligence models can be used to solve complex problems
                  particularly, in the field of Chemistry. Also, I am very
                  interested in Natural Language Processing (NLP) and
                  Reinforcement Learning through deep learning models.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
};

export default About;
