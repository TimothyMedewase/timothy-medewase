import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="layout-md mt-4">
      <h1 className="text-2xl font-bold text-neutral-900 mt-8 mb-10">About</h1>

      <div className="flex flex-col sm:flex-row gap-10 mb-12">
        {/* Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/timothymedewasenew.jpeg"
            alt="Timothy Medewase"
            width={180}
            height={180}
            className="rounded-sm object-cover w-44 h-44"
          />
        </div>

        {/* Short bio beside photo */}
        <div className="text-[1.05rem] leading-relaxed text-neutral-700 space-y-4">
          <p>
            I am a software engineer with a strong foundation in Computer
            Science and Mathematics. I recently earned a bachelor&apos;s degree
            in Computer Science with a minor in Mathematics at the University of
            Montevallo, Alabama.
          </p>
          <p>
            I am passionate about using software engineering and AI to solve problems and build useful products.
          </p>
        </div>
      </div>

      <hr />

      <div className="mt-10 text-[1.05rem] leading-relaxed text-neutral-700 space-y-5 mb-16">
        <p>
          Over the years, I have been actively involved in mathematics and
          sciences, especially drawn to the intersection of chemistry and
          mathematics. I have participated in several mathematics competitions,
          including the AMCs and various math olympiads, earning multiple medals.
        </p>
        <p>
          In addition, I competed in chemistry competitions such as the Nigerian
          Chemistry Olympiad, where I ranked in the top 10 nationally and in the
          top 3 in my state.
        </p>
        <p>
          My passion for Mathematics and Chemistry has led me to aspire toward a
          future where AI/ML models can solve very complex scientific problems.
        </p>
        <p>
          Outside of academics, I&apos;m a huge soccer fan and Manchester United
          is my favorite team!
        </p>
      </div>
    </main>
  );
}
