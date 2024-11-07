import React from "react";

interface ProjectsProps {
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

const ProjectsSection: React.FC = () => {
  return (
    <section className="">
        <h2 className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white">
          My projects
        </h2>
        {Features.map((feature, index) => (
            <div key={index} className="da mr-2 mt-4 relative flex flex-col-1 justify-center">
              <div className=" max-w-2xl mx-auto mt-10">
              
                <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img src={feature.imgP} className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"/>
                  </div>

                  <div className="flex flex-col gap-2 py-2">

                    <p className="text-xl font-bold">Post title</p>

                    <p className="text-gray-500">
                      Description of your post/article,
                      Description of your post/article,
                    </p>

                    <span className="flex items-center justify-start text-gray-500">
                      <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                      </svg>
                      <a href="amitpachange.com" target="_blank">amitpachange.com</a>
                    </span>

                  </div>

                </div>

              </div>
            


             

              </div>
        ))}
    </section>
  );
};

export default ProjectsSection;
