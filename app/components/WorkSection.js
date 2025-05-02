import React from "react";
import WorkData from "@/WorkData";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  return (
    <div className="w-full p-5 bg-white min-h-[50vh] flex flex-col items-center justify-center gap-5">
      <div className="text-2xl font-bold text-black flex items-center justify-center pt-5 mb-5">
        Work Experience
      </div>

      {WorkData.map((item, index) => (
        <div key={index} className=" min-w-full grid md:grid-cols-2 grid-cols-1 gap-10 bg-gray-100 rounded-xl shadow-2xl text-black p-5 mt-5 mb-5 ">
          <div className="flex flex-col items-center justify-center gap-7">
            <p className="text-lg font-bold italic">{item.duration}</p>
            <div className="relative min-w-[200px] max-w-[400px] min-h-[200px] max-h-[400px] rounded-full">
              <Image
                fill={true}
                src={item.image}
                className="rounded-full"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col items-center  gap-7">
            <h1 className="text-xl font-bold text-black">{item.title}</h1>

            <p className="text-black font-bold text-md">{item.company}</p>

            <p className="text-black font-semibold text-sm">
              {item.description}
            </p>

            <Link href={item.companyLink}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Company's Official Website
                </span>
              </button>
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
