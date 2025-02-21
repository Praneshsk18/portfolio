import Image from "next/image";
import Header from "./Components/Header";
import SkillSection from "./Components/SkillSection";
import SoftSkills from "./Components/SoftSkills";
import Certificates from "./Components/Certificates";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Achievements from "./Components/Acheivements";
import Contacts from "./Components/Contacts";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div className="flex flex-col">
          {/* Home Section */}
          <section id="home" className="h-auto mt-28 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pt-10 md:pt-28 pl-4 md:pl-10">
                <div className="animate-fadeIn">
                  <p className="text-stone-400 font-mono font-semibold">
                    Hi I am
                  </p>
                  <p className="pt-5 text-2xl text-stone-400 font-bold font-sans">
                    Pranesh S
                  </p>
                  <h5 className="pt-5 text-4xl md:text-5xl font-bold text-amber-700">
                    SOFTWARE DEVELOPER
                  </h5>
                  <div className="flex flex-row items-center gap-4 pt-3">
                    <a href="#" className="rounded-full border-1">
                      <Image
                        src="/instalogo.png"
                        width="45"
                        height="45"
                        alt="Insta"
                      />
                    </a>
                    <a href="#" className="rounded-full border-1">
                      <Image
                        src="/linkedin.png"
                        width="45"
                        height="45"
                        alt="LinkedIn"
                      />
                    </a>
                    <a href="#" className="rounded-full border-1">
                      <Image
                        src="/twitter.png"
                        width="45"
                        height="45"
                        alt="Twitter"
                      />
                    </a>
                    <a href="#" className="rounded-full border-1">
                      <Image
                        src="/github.png"
                        width="45"
                        height="45"
                        alt="GitHub"
                      />
                    </a>
                    <a href="#" className="rounded-full border-1">
                      <Image
                        src="/facebook.png"
                        width="45"
                        height="45"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex pt-10 gap-5 justify-center">
                  <a href="#">
                    <button className="bg-orange-600 hover:bg-amber-500 shadow-md shadow-orange-500/50 px-6 md:px-8 py-2 rounded">
                      Hire me
                    </button>
                  </a>
                  <a href="#">
                    <button className="border-2 border-stone-500/50 bg-transparent hover:bg-yellow-100/20 shadow-md shadow-orange-500/50 px-6 md:px-8 py-2 rounded">
                      Download CV
                    </button>
                  </a>
                </div>
                <div className="grid grid-cols-3 mx-auto h-24 w-full md:w-2/3 bg-stone-500/25 mt-10 md:mt-20 rounded-xl mb-5">
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <div className="flex items-center">
                      <p className="text-base font-bold font-mono text-amber-600 pt-4">
                        Fresher
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-xs text-stone-500 pb-4 font-mono">
                        Experience
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <div className="flex items-center ">
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        3+
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-stone-500 text-xs pb-4 font-mono">
                        Projects
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-stone-500">
                    <div className="flex items-center ">
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        2
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-stone-500 text-xs pb-4 font-mono">
                        Internships
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center min-h-[50vh] md:min-h-screen">
                <Image
                  src="/Profile.png"
                  alt="Profile image"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="h-auto px-4 md:px-20">
            <div className="text-center pt-10 md:pt-24">
              <h1 className="font-bold text-4xl md:text-5xl text-yellow-800">
                About Me
              </h1>
            </div>
            <div className="w-full mt-8 md:mt-12">
              <div className="mx-auto">
                <p className="text-zinc-300 text-sm md:text-base">
                  I am Pranesh S, a passionate and driven IT student with
                  expertise in Python, Java, TensorFlow, and the MERN stack. I
                  thrive at the intersection of creativity and technology,
                  leveraging my technical expertise to design and implement
                  innovative solutions to real-world challenges. During my
                  academic journey, I developed and honed skills in full-stack
                  development, machine learning, cloud technologies, and Java
                  programming. My projects, such as Lip Reading AI and a Face
                  Recognition-based Attendance System, reflect my ability to
                  combine cutting-edge technologies with practical applications.
                  Beyond academics, I embrace opportunities to lead and learn.
                  As an NCC cadet in college, I cultivated discipline,
                  leadership, and a strong sense of responsibility. My
                  participation in quizzes and competitions, such as securing
                  first place at a quiz held at Christ College, Puducherry,
                  highlights my quick thinking and problem-solving abilities.
                </p>
              </div>
              <div className="grid md:grid-cols-3 bg-stone-800 mt-10 md:mt-20 rounded-xl p-5 md:pb-10 items-stretch">
  {/* Core Values - Left Side */}
  <div className="border-b-2 md:border-b-0 md:border-r-2 border-amber-600 p-6 h-full">
    <p className="font-bold text-yellow-600 shadow-md rounded px-3 py-1 shadow-amber-500">
      Core Values
    </p>
    <p className="pt-3 text-zinc-300">
      Curiosity: I am constantly exploring emerging technologies like AI, cloud computing, and web development to stay at the forefront of innovation.
    </p>
    <p className="pt-3 text-zinc-300">
      Innovation: I strive to develop applications that are not only functional but also user-centric and impactful.
    </p>
    <p className="pt-3 text-zinc-300">
      Adaptability: With hands-on experience across various frameworks, databases, and cloud services, I am adept at navigating dynamic environments.
    </p>
  </div>

  {/* Fun Facts - Middle */}
  <div className="border-b-2 md:border-b-0 md:border-x-2 border-amber-800 p-6 h-full">
    <p className="font-bold text-blue-600 shadow-md rounded px-3 py-1 shadow-blue-500">
      Fun Facts About Me
    </p>
    <p className="pt-3 text-zinc-300">
      - I enjoy contributing to personal projects, such as creating a To-Do App and maintaining a Personal Blog, which reflect my organizational skills and passion for writing.
    </p>
    <p className="pt-3 text-zinc-300">
      - Outside of coding, I enjoy exploring Linux systems, experimenting with cloud automation tools, and keeping up with tech trends.
    </p>
  </div>

  {/* Looking Ahead - Right Side */}
  <div className="border-b-2 md:border-b-0 md:border-l-2 border-amber-600 p-6 h-full">
    <p className="font-bold text-red-600 shadow-md rounded px-3 py-1 shadow-red-500">
      Looking Ahead
    </p>
    <p className="pt-3 text-zinc-300">
      My career aspirations lie in the fields of artificial intelligence, cloud engineering, and full-stack development. I aim to continue working on projects that challenge my abilities and make a difference in people’s lives. Whether it’s designing scalable systems, building intuitive user interfaces, or developing intelligent algorithms, I am committed to growing as a professional and making meaningful contributions.
    </p>
  </div>
</div>

            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="h-auto px-4 md:px-10">
            <div>
              <p className="flex justify-center font-bold text-4xl md:text-5xl text-yellow-800 mt-20">
                Skills
              </p>
              <p className="flex justify-center pt-5 text-xl md:text-2xl font-semibold text-gray-400">
                Technical Skills
              </p>
              <SkillSection />
              <div className="flex justify-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-400">
                  Soft Skills
                </h3>
              </div>
              <SoftSkills />
            </div>
            
          </section>

          <section id="certification" className="h-auto px-4 md:px-10">
          <p className="flex justify-center font-bold text-5xl text-amber-700 mt-20">
              Certification
            </p>
          <Certificates />
          </section>

          {/* Projects Section */}
          <section id="projects" className="h-auto px-4 md:px-10">
            <Projects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="h-auto  px-4 md:px-10 ">
            <div className="flex justify-center">
              <p className="font-bold text-4xl md:text-5xl mt-24 text-amber-700 ">
                Experience
              </p>
            </div>
            <div className="gap-10 mt-10 h-full">
            <Experience />
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="h-auto">
            <Achievements />
          </section>

          {/* Contact Section */}
          <section id="contact" className="h-auto bg-black-200 ">
            <Contacts />
          </section>
        </div>
      </main>
    </div>
  );
}