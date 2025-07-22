import skills from "./Skills";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillSection = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-1 pb-5">
        {skills.technical.map((skill, index) => (
          <motion.div className="flex justify-center" key={index} whileHover={{scale:1.1}} viewport={{once:true}} transition={{ease:"easeInOut"}}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{once:true}}
              transition={{ delay:skill.id * 0.1,duration: 0.3,ease:"easeInOut"}}
              className="grid grid-rows-2 h-auto w-52 border border-amber-600 rounded-md border-3 justify-center items-center pt-5 hover:bg-zinc-800/100 hover:shadow-[0_0_8px_4px_rgba(0,0,0,1)] hover:shadow-amber-600 mt-10 transition-all"
            >
              <div className="flex justify-center items-center">
                <Image src={skill.url} height={40} width={40} alt=" "></Image>
              </div>
              <div>
                <p className="flex justify-center items-center text-sm text-yellow-600 mx-auto">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
