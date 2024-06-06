"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="sm:flex py-6">
      <Image
        src="/space.webp"
        alt="Profile Picture"
        width={400}
        height={150}
        className="rounded-xl lg:mx-auto"
      />
      <div>
        <h2 className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white">
          About Me
        </h2>
        <p className="text-md sm:text-lg text-white mt-2 mx-6">
          Systems engineering student passionate about creating web and mobile
          applications, as well as studying models and applications of
          artificial intelligence and computer vision. I contribute to projects on a personal and
          team level and love learning new technologies.🚀
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
