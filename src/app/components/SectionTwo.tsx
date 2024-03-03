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
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <CodingIcon className="h-8 w-8 text-red-500" />
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              Software frameworks
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <UIIcon className="h-8 w-8 text-red-500" />
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              User interface
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <UXIcon className="h-8 w-8 text-red-500" />
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              User Experience
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <LightIcon className="h-8 w-8 text-red-500" />
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              Creative and Critical
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
