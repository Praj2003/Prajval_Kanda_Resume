"use client";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { motion } from "motion/react";
import { useScroll } from "@/context/ScrollContext";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  async function handleClick() {
    setIsClicked(!isClicked);
  }
  const { scrollToSection } = useScroll();
  return (
    <div className="min-w-full fixed top-0 z-20 flex items-center justify-between gap-7 bg-none text-white font-semibold text-md p-5 bg-black">
      <div className="flex items-center justify-center text-lg font-semibold text-white">
        <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold">
          Prajval Kanda
        </p>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-16 ">
        <div>
          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer p-2 rounded-2xl"
          >
            Home
          </motion.li>
        </div>
        <div>
          <motion.li
            onClick={() => scrollToSection("Work")}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer  p-2 rounded-2xl"
          >
            Work Experience
          </motion.li>
        </div>
        <div>
          <motion.li
            onClick={() => scrollToSection("Education")}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer  p-2 rounded-2xl"
          >
            Education
          </motion.li>
        </div>
        <div>
          <motion.li
            onClick={() => scrollToSection("Projects")}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer  p-2 rounded-2xl"
          >
            Projects
          </motion.li>
        </div>
      </ul>

      <button  onClick={handleClick} className="md:hidden"><HiMenu  className=" cursor-pointer text-3xl text-white" /></button>

      {isClicked && (
        <motion.div  onBlur={() => setIsClicked(false)} className="absolute top-16 right-0 flex flex-col w-full md:hidden justify-center items-center p-4 bg-black text-white z-10 list-none gap-5">
          <motion.li
            onClick={() => {
              scrollToSection("Home");
              setIsClicked(false);
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer p-2 rounded-2xl w-full text-center"
          >
            Home
          </motion.li>
          <motion.li
            onClick={() => {
              scrollToSection("Work");
              setIsClicked(false);
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer p-2 rounded-2xl w-full text-center"
          >
            Work Experience
          </motion.li>
          <motion.li
            onClick={() => {
              scrollToSection("Education");
              setIsClicked(false);
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer p-2 rounded-2xl w-full text-center"
          >
            Education
          </motion.li>
          <motion.li
            onClick={() => {
              scrollToSection("Projects");
              setIsClicked(false);
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black",
            }}
            className="cursor-pointer p-2 rounded-2xl w-full text-center"
          >
            Projects
          </motion.li>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
