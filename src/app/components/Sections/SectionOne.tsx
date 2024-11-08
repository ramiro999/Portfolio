"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const SectionOne: React.FC = () => {
  return (
    <section className="lg: py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-text-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ramiro Avila",
                1000,
                "FullStack Developer",
                1000,
                "Computer vision enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-xs mb-6 lg:pr-10 lg:text-lg">
          Systems Engineering student passionate about Computer Vision and Deep Learning. I am constantly looking for new opportunities to apply my knowledge in web application development, as well as in the exploration of artificial intelligence models and applications.
          </p>
          <div>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-white text-white mx-3"
            >
              <span className="block bg-[#121212] hover:text-green-300 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-white text-white mt-3 mx-3"
            >
              <span className="block bg-[#121212] hover:text-green-300 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="mt-4 bg-[#181818] w-[350px] h-[400px] relative ">
            <Image
              src="/perfil.jpg"
              alt="person image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionOne;
