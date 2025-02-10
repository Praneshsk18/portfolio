<<<<<<< HEAD
import skills from "./Skills";

const Experience = () => {
    return (
        <>
            {skills.Experience.map((data, key) => (
                <div key={key}>{data}</div>
            ))}
        </>
    );
};

=======
import skills from "./Skills";

const Experience = () => {
    return (
        <>
            {skills.Experience.map((data, key) => (
                <div key={key}>{data}</div>
            ))}
        </>
    );
};

>>>>>>> 36348d2 (Updated About Me section to be responsive)
export default Experience;