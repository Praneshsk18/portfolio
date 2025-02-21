import skills from "./Skills";
const Achievements = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="font-bold text-4xl md:text-5xl text-amber-700 mb-10 mt-24">
          Achievements
        </p>
      </div>
      <div className="h-auto bg-red-900/5 p-6 rounded-lg shadow-sm text-center mx-12">
        {skills.Achievements.map((data, index) => (
          <div key={index} className="mb-5">
            <div className="text-4xl font-bold text-green-600 mb-4">{data.head}</div>
            <h3 className="text-xl text-gray-600 font-semibold mb-2">{data.cont1}</h3>
            <p className="text-gray-600">
              {data.cont2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Achievements;
