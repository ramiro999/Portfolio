"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CodingIcon from "@/svgs/coding.svg";
import UIIcon from "@/svgs/ui.svg";
import UXIcon from "@/svgs/ux.svg";
import LightIcon from "@/svgs/light.svg";

interface SectionTwoProps {
  title: string;
}

export const Skills: SectionTwoProps[] = [
  {
    title: "Software frameworks",
  },
  {
    title: "User interface",
  },
  {
    title: "User Experience",
  },
  {
    title: "Creative and Critical",
  },
];

const SectionTwo: React.FC = () => {
  return (
    <section className="flex">
      <div className="py-2 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-4 px-16 flex flex-col sm:flex-row items-center justify-between">
          {Skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <div className="flex items-center justify-center bg-text-gradient w-10 h-10 rounded-full">
                  {index === 0 && <CodingIcon />}
                  {index === 1 && <UIIcon />}
                  {index === 2 && <UXIcon />}
                  {index === 3 && <LightIcon />}
                </div>
                <h2 className="text-white text-center text-2xl font-bold flex flex-row">
                  {skill.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
