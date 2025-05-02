import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const SkillSection = () => {
  return (
    <div className="bg-black w-full h-[50vh] md:h-[70vh] my-4">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold text-whit pt-4">Core Competencies</h2>
      </div>

      <div className=" md:container mx-auto  flex justify-center flex-wrap md:justify-around md:mt-28 gap-8 mt-6 pt-4 pb-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <FaReact className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">React</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <RiNextjsFill className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">NextJS</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <FaNodeJs className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">Node JS</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <RiTailwindCssFill className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">Tailwind CSS</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <SiMongodb className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">MongoDB</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <FaJava className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">Java</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <FaDocker className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">Docker</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <SiPostgresql className="text-6xl text-white" />
          <h3 className="text-lg font-semibold text-white">Postgres</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
