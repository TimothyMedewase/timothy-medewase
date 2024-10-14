import React from "react";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div>
      <main className="mt-5 md:mx-auto lg:mx-12">
        <div className="flex max-w-fit mx-auto mt-5 ">
          <iframe
            src="TimothyMedewase_Resume2025.pdf"
            width="1500 px"
            height="1100 px"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Resume;
