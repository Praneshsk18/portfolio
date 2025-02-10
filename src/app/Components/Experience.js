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

export default Experience;