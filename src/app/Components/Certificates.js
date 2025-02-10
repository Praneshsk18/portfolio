import skills from "./Skills";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center pt-5 gap-5">
      {skills.Certifications.map((c, index) => (
        <div key={index}>
          <a href={c.url}>
            <div className="h-100 border border-amber-700/20 mt-10 border-2 bg-zinc-900 rounded-t-2xl hover:bg-amber-950/20 hover:shadow-xl hover:shadow-amber-700">
              <div className="grid grid-rows-2 h-25 justify-center items-center w-auto rounded-t-2xl">
                <div className="flex mx-auto font-bold font-mono md:text-2xl text-stone-400 pt-2"><p>{c.name}</p></div>
                <div className="flex mx-auto font-mono md:text-xl text-sm text-stone-400 pb-2"><p>{c.issued}</p></div>
              </div>
              <div className="rounded-b-2xl">
                <Image
                  src={c.url}
                  alt={`Certificate ${index}`}
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
