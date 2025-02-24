import skills from "./Skills";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> edc34dcd384f037d3b574b1ca7c63312082fd0a6
import Image from "next/image";

const SkillSection = () => {
  return (
<<<<<<< HEAD
    <div className="">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-1 pb-5">
        {skills.technical.map((skill, index) => (
          <div className="flex justify-center" key={index}>
            <motion.div
              initial={{ scale: 0 }} // Initial state
              whileInView={{ scale: 1 }} // Animate when in view
              transition={{ duration: skill.id*0.1 }} // Animation duration
              className="grid grid-rows-2 h-auto w-52 border border-amber-600 rounded-md border-3 justify-center items-center pt-5 hover:bg-zinc-900 hover:scale-110 hover:shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] hover:shadow-amber-600 mt-10 transition-all duration-300"
            >
              {/* SVG Icon */}
              <div className="flex justify-center items-center">
                <Image src={skill.url} height={40} width={40} alt=" "></Image>
              </div>
<div>
              {/* Skill Name */}
              <p className="flex justify-center items-center text-sm text-yellow-600 mx-auto">
                {skill.name}
              </p></div>
            </motion.div>
=======
    <div className="py-10 px-6">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mb-8">
        {skills.technical.map((skill, index) => (
          <div className="flex justify-center" key={index}>
            <div className="grid grid-rows-2 h-auto w-52 border rounded-3xl pb-3 border-3 justify-center pt-3 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-cyan-500 mt-10">
              <p className="text-3xl text-yellow-600 mx-auto">{skill.name}</p>
              <Image className="flex mx-auto" src={skill.url} width={100} height={100} alt="python"/>
            </div>
>>>>>>> edc34dcd384f037d3b574b1ca7c63312082fd0a6
          </div>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SkillSection;
=======
export default SkillSection;
>>>>>>> edc34dcd384f037d3b574b1ca7c63312082fd0a6
