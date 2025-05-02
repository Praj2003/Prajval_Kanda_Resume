import React from "react";
import projectData from "@/ProjectData";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Project = () => {
  return (
    <div className={`min-w-full bg-black text-white flex flex-col items-center  gap-5 p-5 ${poppins.className}`}>
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold text-white pt-4">Projects</h2>
      </div>

      {projectData.map((project, index) => {
        return (
          <div
            key={index}
            className="min-w-full grid md:grid-cols-2 grid-cols-1 bg-white rounded-2xl p-5 shadow-2xl my-5 gap-5"
          >
            <div className="flex flex-col items-center justify-center gap-16">
              <h2 className="text-black font-bold text-lg">{project.title}</h2>

              <div className="relative min-w-[200px] max-w-[400px] min-h-[200px] max-h-[400px] rounded-xl">
                <Image
                  fill={true}
                  src={project.image}
                  className="rounded-xl"
                ></Image>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <p className="font-bold text-md text-gray-800">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 my-4">
                {project.techStack.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-center p-4 rounded-e-2xl rounded-s-2xl text-white"
                    >
                      <p className="text-sm font-bold">{tech}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <h2 className=" text-md font-bold text-black pb-4">
                    Features of Project
                  </h2>
                </div>
                {project.features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <p className="text-sm font-semibold text-black">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center my-4">
                <button className=" cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Github Repository
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-5">
                <p className="text-black font-semibold">Status:</p>
                <p className="text-black font-bold">{project.status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
