import skills from "./Skills";
import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <div>
      <motion.div initial={{opacity:0,z:20}} whileInView={{opacity:1,z:0}} className="flex justify-center">
        <p className="font-bold text-4xl md:text-5xl text-amber-700 mb-10 mt-24">
          Achievements
        </p>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="h-auto bg-red-900/5 p-6 rounded-lg shadow-sm text-center mx-12">
        {skills.Achievements.map((data, index) => (
          <motion.div initial={{scale:0.9}} whileInView={{scale:1}} key={index} className="mb-5">
            <div className="text-4xl font-bold text-green-600 mb-4">{data.head}</div>
            <h3 className="text-xl text-gray-600 font-semibold mb-2">{data.cont1}</h3>
            <p className="text-gray-600">
              {data.cont2}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Achievements;
