"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import EducationSection from "./components/EducationSection";
import SkillSection from "./components/SkillSection";
import WorkSection from "./components/WorkSection";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useScroll } from "@/context/ScrollContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const { EducationRef, SkillRef, WorkRef, ProjectRef } = useScroll();

  return (
    <div className="min-w-full min-h-screen">
      <div className="min-w-full min-h-[95vh] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center pt-20">
        <div className="flex flex-col items-center justify-center text-xl text-white font-semibold gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`flex flex-col justify-center items-start space-y-2 ${poppins.className}`}
          >
            <p className="text-2xl text-black font-semibold ">Hi I'm</p>
            <h1 className="text-6xl text-black font-bold">Prajval Kanda</h1>
            <p className="text-xl text-black font-semibold">
              <Typewriter
                words={["Aspiring Software Developer."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-8">
            <Link href={"https://www.linkedin.com/in/prajval-kanda-831759237/"}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.8)",
                }}
                className="relative w-10 h-10 p-3  rounded-full bg-blue-600 flex items-center justify-center cursor-pointer"
              >
                <FaLinkedinIn className="absolute w-6 h-6 text-white" />
              </motion.div>
            </Link>

            <Link href={"https://github.com/Praj2003/Prajval_kanda_Profile"}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.8)",
                }}
                className="relative w-10 h-10 p-3  rounded-full bg-black flex items-center justify-center cursor-pointer"
              >
                <FaGithub className="absolute w-6 h-6 text-white" />
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center text-xl text-white font-semibold">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] md:w-[350px] md:h-[350px] rounded-full bg-white border border-blue-500"
          >
            <Image
              fill={true}
              src={"/images/Prajval Kanda copy.png"}
              className="absolute rounded-full"
              alt="Profile Image"
            />
          </motion.div>
        </div>
      </div>

      <div ref={EducationRef}>
        <EducationSection />
      </div>
      <div ref={SkillRef}>
        <SkillSection />
      </div>
      <div ref={WorkRef}>
        <WorkSection />
      </div>
      <div ref={ProjectRef}>
        <Project />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
