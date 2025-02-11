<<<<<<< HEAD
import skills from "./Skills";

const SoftSkills = () => {
    return(
        <div className="pl-5 pr-5 grid md:grid-cols-5 w-full gap-5">
            {skills.soft.map((skill,index) => (
                <div className="flex border-4 border-double border-amber-900 justify-center bg-cyan-900/50 items-center h-10 hover:shadow-2xl hover:shadow-amber-700 hover:bg-zinc-800" key={index}>
                <div ><p>{skill}</p></div>
                </div>
            ))}
        </div>
    );
}

=======
import skills from "./Skills";

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

>>>>>>> 36348d2 (Updated About Me section to be responsive)
export default SoftSkills;