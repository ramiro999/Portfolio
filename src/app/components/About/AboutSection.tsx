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
        Systems Engineering student passionate about Computer Vision and Deep Learning. I am constantly looking for new opportunities to apply my knowledge in web and mobile application development, as well as in the exploration of artificial intelligence models and applications.
        
        I am interested in learning more about collaboration between universities, businesses and the state, and how I can contribute to this relationship.🚀
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
