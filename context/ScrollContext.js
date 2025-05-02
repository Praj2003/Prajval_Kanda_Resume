"use client";
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const EducationRef = useRef(null);
  const SkillRef = useRef(null);
  const WorkRef = useRef(null);
  const ProjectRef = useRef(null);

  const scrollToSection = (section) => {
    if (section == "Education") {
      EducationRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section == "Skills") {
      SkillRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section == "Work") {
      WorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section == "Projects") {
      ProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ EducationRef, SkillRef, WorkRef, ProjectRef, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
