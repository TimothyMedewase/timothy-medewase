"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
          <div className="mt-5 mb-12 font-sans font-bold text-5xl max-w-fit mx-auto">
            Timothy Medewase
          </div>
          <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <Card className="w-full max-w-md lg:w-96 flex-shrink-0 mx-auto lg:mx-0">
                <CardContent className="p-0">
                  <div className="w-full h-auto">
                    <div className="aspect-[4/3] lg:aspect-[3/4]">
                      <Image
                        src="/timothy_medewase.jpg"
                        alt="Card image"
                        className="object-cover w-full h-full rounded-t-xl"
                        height={600}
                        width={450}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex-1 flex flex-col">
                <p className="mb-4">
                  I am software engineer with a background in Computer science
                  and Mathematics. I am currently pursuing a Bachelors degree in
                  computer science with a mathematics minor at the University of
                  Montevallo, Alabama. I am also very interested in Machine
                  learning and Artificial intelligence.
                </p>
                <p className="mb-4">
                  Over the past years, I have been very much involved in
                  Mathematics and Sciences and mostly been interested in the
                  intersection between Chemistry and Mathematics. I have
                  competed in several mathematics competion like the AMC 8, 10,
                  12, South African Mathematics Olympiad, Kangourou sans
                  frontières maths competion and many more, and I have bagged a
                  couple medals in them. Also, I competed in various chemistry
                  competions like the Nigerian Chemistry Olympiad ranking in the
                  top 10 in the country and top 3 in my state.
                </p>
                <p>
                  My passion for both Mathematics and Chemistry has led to me
                  aspiring for a future where machine learning and artificial
                  intelligence models can be used to solve complex problems
                  particularly, in the field of Chemistry.
                </p>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default About;
