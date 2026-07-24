import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="layout-md mt-20 mb-12">
      <hr className="mb-8" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} Timothy Medewase</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="mailto:medewaset@gmail.com"
            className="inline-flex items-center gap-0.5 hover:text-black transition-colors"
          >
            email <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.github.com/timothymedewase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 hover:text-black transition-colors"
          >
            github <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/timothy-medewase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 hover:text-black transition-colors"
          >
            linkedin <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://x.com/medewaset"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 hover:text-black transition-colors"
          >
            x / twitter <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
