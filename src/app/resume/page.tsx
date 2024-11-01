import React from "react";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div>
      <main className="mt-5 md:mx-auto lg:mx-12">
        <div className="flex max-w-fit mx-auto mt-5 ">
          <iframe
            src="TimothyMedewase_2025Resume.pdf"
            width="1200 px"
            height="900 px"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Resume;
