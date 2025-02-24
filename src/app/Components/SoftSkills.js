import skills from "./Skills";
<<<<<<< HEAD
import { motion } from "framer-motion";

const SoftSkills = () => {
  return (
    <div className="flex justify-center items-center w-full p-5">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
        {skills.soft.map((skill, index) => (
            <div  key={index}>
          <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{delay:0.4,duration:0+skill.id/5}} className="flex justify-center">
            <div className="relative inline-flex items-center justify-center w-52 h-16 font-bold text-white bg-orange-800 rounded-md overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-40 h-40 rounded-full blur-2xl opacity-50 animate-spin bg-gradient-to-r from-[rgb(222,0,75)]  via-[rgb(191,70,255)] to-[rgb(0,212,255)]"></div>
              </span>
              <span className="relative z-10">{skill.name}</span>
            </div>
          </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
=======

const SoftSkills = () => {
    return(
        <div className="flex pl-5 pr-5 grid md:grid-cols-5 grid-cols-1 w-full gap-5">
            {skills.soft.map((skill,index) => (
                <div className="flex size-auto border-4 border-double border-amber-900 justify-center bg-cyan-900/50 items-center h-auto w-auto hover:shadow-2xl hover:shadow-amber-700 hover:bg-zinc-800" key={index}>
                <div ><p>{skill}</p></div>
                </div>
            ))}
        </div>
    );
}

export default SoftSkills;
>>>>>>> edc34dcd384f037d3b574b1ca7c63312082fd0a6
