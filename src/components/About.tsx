import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#09090B] text-gray-300">
      <div className="px-[3%] py-10 md:py-15">
        <p className="mb-4 sm:mb-4 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Hi!! I’m a <span className="text-neutral-300">Full Stack Developer</span>.
        </p>
        <p></p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I love Development. I create functional and reliable websites.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I’m always learning, experimenting, and finding better ways to build for the web. Looking for new opportunities to learn and grow.
        </p>



        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">

          <a
            href="https://github.com/ArghyaPal-07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/arghya-pal-772049322/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          {<a
            href="https://leetcode.com/u/nerQmZxtrP/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Leetcode <ArrowUpRight size={16} />
          </a>}
        </div>
      </div>
    </section>
  );
};

export default About;
