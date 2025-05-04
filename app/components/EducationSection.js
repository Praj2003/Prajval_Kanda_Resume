"use client";
import React from "react";
import educationData from "@/EducationData";
import { Poppins } from "next/font/google";
import { motion,useInView } from "motion/react";
import { useRef } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div className={`w-full bg-white ${poppins.className}`}>
      <div className="w-full flex justify-center pt-4">
        <h2 className="text-2xl font-bold text-black">Education</h2>
      </div>

      <div className="container mx-auto flex justify-center items-center py-4">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationData.map((edu, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-slate-500">
                {edu.title}
              </h3>
              <p className="text-base font-normal text-gray-500 ">
                {edu.institution}
              </p>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {edu.duration}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {edu.description}
              </p>
              <img
                src={edu.image}
                alt={edu.institution}
                className="mt-3 w-32 h-32 rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                {edu.marks}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default EducationSection;
