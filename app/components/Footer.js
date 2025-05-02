import React from "react";
import { Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className={`grid md:grid-cols-2 grid-cols-1 w-full h-[30vh] text-black bg-gray-100 gap-5 ${poppins.className} place-items-center p-5`}
    >
      <div className="flex items-center justify-center">
        <h1 className="text-lg font-bold text-black">
          Made with
          <span className="text-red-500">
            <Typewriter
              words={["❤️", "💻"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          by Prajval Kanda
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="text-lg font-bold">Connect with me</h1>

        <div className="flex items-center justify-center gap-9">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="https://www.linkedin.com/in/prajval-kanda-831759237/">
              <FaLinkedin className="w-8 h-8 text-black cursor-pointer rounded-xl hover:text-blue-500" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"https://github.com/Praj2003/Prajval_kanda_Profile"}>
              <FaGithub className="w-8 h-8 text-black cursor-pointer rounded-xl hover:text-blue-500" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
