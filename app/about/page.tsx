"use client";
import { useState } from "react";
import Image from "next/image";
import Services from "../services/page";
const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center p-4" id="about">
      <div className="flex flex-col md:flex-row items-center gap-5 justify-between min-h-screen py-10 container mx-auto ">
      <div className="flex-1">
        <h1 className="text-4xl uppercase font-bold text-background mb-4">
          About Us
        </h1>

        <p className="text-lg text-justify max-w-2xl mb-4">
          Experienced firm with +8 years of expertise across multiple countries. Impressive portfolio includes mega projects. Prioritizing creativity, functionality and customer satisfaction.
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center text-gray-800 border-b-2 border-gray-400 py-1 hover:border-none transition-all duration-300 mb-4"
        >
          {showMore ? "Show Less" : "Learn More"}
          <svg
            className={`ml-2 transition-transform duration-300 ${
              showMore ? "rotate-90" : ""
            }`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showMore ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="my-3 space-y-6">
            <div>
              <h3 className="text-2xl uppercase font-bold text-background mb-4">
                Vision
              </h3>
              <p className="text-md text-justify max-w-xl">
                We have the ability to craft a vibrant community that reflects
                the ever-evolving nature of contemporary life. Through
                meticulous analysis & a keen understanding of changing trends,
                we can ignite a fresh spirit & breathe life into a new era of
                communal living.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/Logo.jpg"
          alt="About Us"
          width={300}
          height={200}
          className="rounded-xl shadow-2xl object-cover"
          loading="eager"
        />
      </div>
    </div>
    <Services/>
    </div>
  );
};

export default About;
