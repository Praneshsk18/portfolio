import skills from "./Skills";
import Image from "next/image";

const SkillSection = () => {
  return (
    <div className="py-10 px-6">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mb-8">
        {skills.technical.map((skill, index) => (
          <div className="flex justify-center" key={index}>
            <div className="grid grid-rows-2 h-auto w-52 border rounded-3xl pb-3 border-3 justify-center pt-3 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-cyan-500 mt-10">
              <p className="text-3xl text-yellow-600 mx-auto">{skill.name}</p>
              <Image className="flex mx-auto" src={skill.url} width={100} height={100} alt="python"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
