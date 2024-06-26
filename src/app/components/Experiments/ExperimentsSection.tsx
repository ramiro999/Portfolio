import React from "react";

interface ExperimentsProps {
  title: string;
  description: string;
  imgP: string;
}

export const Features = [
  {
    title: "ProSoft",
    description: "Platform for project management in a small company",
    imgP: "/prosoft.png"
  },
  {
    title: "Todo React",
    description: "App for managing your tasks guided by FrontendMentor",
    imgP: "/todo.png"
  },
  {
    title: "App Defensoria del Pueblo",
    description: "Tool to generate legal documents",
    imgP: "/defensoria.png" 
  },
];

const  ExperimentsSection: React.FC = () => {
  return (
    <section className="flex flex-wrap">
        <h2 className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white">
          My experiments of the moment
        </h2>
        {Features.map((feature, index) => (
            <div key={index} className="da mr-2 mt-4 relative flex flex-col-1 justify-center">
              <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <div className="h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                  <img src={feature.imgP} className="project-img" alt="Project"/>
                </div>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">

                <h2 className= "text-white text-bold">{feature.title}</h2>
                <p className="project-description">{feature.description}</p>

                </div>
            </div>

              </div>
        ))}
    </section>
  );
};

export default ExperimentsSection;
