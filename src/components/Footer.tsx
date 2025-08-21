import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="mt-5 md:mx-auto lg:mx-12">
      <div className="mt-20 mb-2 text-xl ">Contact Me.</div>
      <div className="mt-5 mb-3 text-md ">
        <span className="text-lg font-semibold">Reach out to me: </span>
        <a
          className="inline-flex items-center -space-x-1"
          href="mailto:tmedewas@forum.montevallo.edu"
        >
          <span className="underline underline-offset-4">
            tmedewas@forum.montevallo.edu
          </span>
          <IconArrowUpRight stroke={1.25} />
        </a>
        {", "}
        <a
          className="inline-flex items-center -space-x-1"
          href="mailto:medewaset@gmail.com"
        >
          <span className="underline underline-offset-4">
            medewaset@gmail.com
          </span>
          <IconArrowUpRight stroke={1.25} />
        </a>
      </div>
      <div className=" mb-5 text-md">
        <a
          className=" inline-flex items-center -space-x-1"
          href="https://www.github.com/timothymedewase"
          target="_blank"
        >
          <span className="underline underline-offset-4">GitHub</span>
          <IconArrowUpRight stroke={1.25} />
        </a>
        {", "}
        <a
          className=" inline-flex items-center -space-x-1"
          href="https://www.linkedin.com/in/timothy-medewase"
          target="_blank"
        >
          <span className="underline underline-offset-4">Linkedin</span>
          <IconArrowUpRight stroke={1.25} />
        </a>
        {", "}
        <a
          className=" inline-flex items-center -space-x-1"
          href="https://x.com/medewaset"
          target="_blank"
        >
          <span className="underline underline-offset-4">X</span>
          <IconArrowUpRight stroke={1.25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
