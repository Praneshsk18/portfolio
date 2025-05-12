import skills from "./Skills";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="bg-transparent mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {skills.Experience.map((data, key) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          key={key}
          className="relative flex flex-col gap-5 bg-red-500/5 shadow-lg rounded-lg p-6 border-l-4 border-amber-500 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-gray-300">{data.role}</h3>
          <p className="text-lg font-medium text-amber-600">{data.company}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            📅 <time dateTime={data.date}>{data.date}</time>
          </div>
          <p className="text-gray-500">{data.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
