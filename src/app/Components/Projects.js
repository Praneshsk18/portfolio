import React from "react";
import Skills from "./Skills"; // Assuming Skills contains Projects data

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="flex justify-center">
        <p className="font-bold text-5xl text-amber-700 mt-24">Projects</p>
      </div>
      <div className="grid md:mx-20 mt-10 justify-items-center gap-4">
        {Skills.Projects.map((data, key) => (
          <div
            key={key}
            className="h-auto w-auto p-4 border border-gray-300 rounded-lg shadow-md shadow-amber-300"
          >
            <p className="flex justify-center text-zinc-300 text-2xl">
              {data.projectname}
            </p>
            <p className="flex justify-center text-gray-400 mt-5">
              {data.description}
            </p>
            <div className="mt-5">
              <p className="font-semibold text-gray-500">Technologies Used:</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {data.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="font-semibold text-gray-500 mt-4">Features:</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {data.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-red-600 text-white py-1 px-3 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-gray-500 font-semibold">
                Link:
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-orange-700/20 hover:bg-orange-400/50 ml-3 text-white font-bold py-1 px-5 rounded cursor-pointer"
                >
                  Click here!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;