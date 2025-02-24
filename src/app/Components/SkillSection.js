import skills from "./Skills";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillSection = () => {
  return (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;