import skills from "./Skills";
import Image from "next/image";
import Spotlight from "./Spotlight";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <>
    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 md:gap-10 justify-items-center pt-5 mx-5 md:mx-32">
      {skills.Certifications.map((c, index) => (
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:1}} key={index}>
        <Spotlight className="group h-full mx-auto grid max-w-sm items-start gap-6 lg:max-w-none">
    <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-amber-900/10 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-amber-600/500 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-amber-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href={c.url}
            >
              <div className="relative z-20 h-auto overflow-hidden rounded-[inherit] bg-amber-950/10 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 bg-gray-950 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={c.url}
                  width={500}
                  height={500}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                  <span className="btn-sm relative rounded-full px-2.5 py-0.5 text-xs font-normal 
  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
  before:border before:border-transparent before:[background:linear-gradient(to_bottom,rgba(234,179,8,0.15),rgba(234,179,8,0.5))_border-box] 
  before:[mask-composite:exclude_!important] 
  before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
  hover:bg-amber-800/60">
  
  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
    {c.issued}
  </span>
  
</span>

                  </div>
                  <p className="text-indigo-200/65">
                    Streamline the product development flow with a content
                    platform thats aligned across specs and insights.
                  </p>
                </div>
              </div>
            </a>
    </Spotlight>
        </motion.div>
      ))}
    </div>
    </>
  );
};

export default Certificates;
