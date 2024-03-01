"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const SectionTwo: React.FC = () => {
  return (
    <section className="">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <svg
              className="h-8 w-8 text-red-500 flex flex-row"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="4" y1="7" x2="20" y2="7" />{" "}
              <line x1="4" y1="17" x2="20" y2="17" />{" "}
              <line x1="7" y1="4" x2="7" y2="20" />{" "}
              <line x1="17" y1="4" x2="17" y2="20" />
            </svg>
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              Software frameworks
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />{" "}
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />{" "}
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />{" "}
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              User interface
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="9" y1="9" x2="9.01" y2="9" />{" "}
              <line x1="15" y1="9" x2="15.01" y2="9" />{" "}
              <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
            </svg>
            <h2 className="text-white text-center text-2xl font-bold flex flex-row">
              User Experience
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
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
