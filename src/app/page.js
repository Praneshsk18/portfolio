"use client";
import Link from "next/link";
import Header from "./Components/Header";
import SkillSection from "./Components/SkillSection";
import SoftSkills from "./Components/SoftSkills";
import Certificates from "./Components/Certificates";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Achievements from "./Components/Acheivements";
import Contacts from "./Components/Contacts";
import { useState,useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Typist from "react-text-typist";

export default function Home() {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  const Typewriter = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [index, text, speed]);
  
    return <span>{displayedText}</span>;
  };
  
  return (
    <div>
      <main>
        <Header />
        <div className="flex flex-col">
          {/* Home Section */}
          <section id="home" className="h-auto mt-28 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="pt-10 md:pt-28 pl-4 md:pl-10">
                <div className="animate-fadeIn">
                  <p className="text-stone-400 font-mono font-semibold">
                  <Typewriter text="Hi I am" speed={200} />
                  </p>
                  <p className="pt-5 text-2xl text-stone-400 font-bold font-sans">
                  <Typewriter text="Pranesh S" speed={200} />
                  </p>
                  <h5 className="pt-5 text-4xl md:text-5xl font-bold text-amber-700">
                    <TypewriterComponent
                      options={{
                        strings: [
                          "SOFTWARE DEVELOPER",
                          "FREELANCER",
                          "MERN-STACK ENGINEER",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 40,
                      }}
                    />
                  </h5>
                  <div className="flex flex-row items-center gap-4 pt-5">
                    {[
                      { name: "/instalogo.json", href: "https://www.instagram.com/pranesh_sk._?igsh=OW5rc2p6MTg1aHZr" },
                      { name: "/linkedin.json", href: "https://www.linkedin.com/in/praneshsk/" },
                      { name: "/twitter.json", href: "https://x.com/i/flow/login?redirect_after_login=%2FPraneshSk18" },
                      { name: "/github.json", href: "https://github.com/Praneshsk18" },
                      { name: "/facebook.json", href: "https://www.facebook.com/share/15sVeipnPV/?mibextid=qi2Omg" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                        <motion.div className="flex rounded-full border border-amber-900/40 justify-center bg-[#181414] text-white transition-all duration-300 hover:bg-[#1a1a2e] hover:scale-110 hover:shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] hover:shadow-amber-600">
                          <lottie-player
                            src={item.name}
                            background="transparent"
                            speed="1"
                            style={{ width: 40, height: 40 }}
                            autoplay
                          ></lottie-player>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 1, ease: "easeIn" }}
                  className="flex pt-10 gap-10 justify-left"
                >
                  <a href="/resume.pdf" rel="noopener noreferrer" target="_blank" download="resume.pdf">
                    <button onClick={() => {
                      window.open("/Resume.pdf","_blank");
                    }} className="w-[165px] h-[62px] cursor-pointer text-white text-[17px] rounded-[1rem] border-none relative bg-[#181414] transition-all duration-100 active:scale-90 active:rotate-3 active:bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgba(248,117,21,255)_17.8%,rgba(251,248,228,255)_100.2%)]">
                      <span className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgba(248,117,21,255)_17.8%,rgba(251,248,228,255)_100.2%)] blur-[10px] -z-10"></span>
                      Download CV
                    </button>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                  whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
                  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                  className="grid grid-cols-3 mx-auto h-24 w-full md:w-2/3 bg-stone-500/25 mt-16 md:mt-20 rounded-xl mb-5"
                >
                  {/* First Column */}
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="text-base font-bold font-mono text-amber-600 pt-4">
                        Fresher
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 1.2,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="text-xs text-stone-500 pb-4 font-mono">
                        Experience
                      </p>
                    </motion.div>
                  </div>

                  {/* Second Column */}
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        3+
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 1.2,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="text-stone-500 text-xs pb-4 font-mono">
                        Projects
                      </p>
                    </motion.div>
                  </div>

                  {/* Third Column */}
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        2
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and in place
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                      }} // Smooth transition with delay
                      className="flex items-center"
                    >
                      <p className="text-stone-500 text-xs pb-4 font-mono">
                        Internships
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "linear" }}
                className="flex justify-center items-center min-h-[50vh] md:min-h-scree"
              >
                <lottie-player
                  src="\profile.json"
                  background="transparent"
                  speed="1"
                  style={{ width: 1000, height: 500 }}
                  loop
                  autoplay
                ></lottie-player>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="h-auto px-4 md:px-20">
            <motion.div
              initial={{ opacity: 0, z: -20 }}
              whileInView={{ opacity: 1, z: 0 }}
              transition={{ duration: 1 }}
              className="text-center pt-10 md:pt-24"
            >
              <h1 className="font-bold text-4xl md:text-5xl text-yellow-800">
                About Me
              </h1>
            </motion.div>
            <div className="w-full mt-8 md:mt-12">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mx-auto"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                translate={{ duration: 0.5 }}
                className="grid md:grid-cols-3 bg-stone-800 mt-10 md:mt-20 rounded-xl p-5 md:pb-10 items-stretch"
              >
                {/* Core Values - Left Side */}
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-amber-600 p-6 h-full">
                  <p className="font-bold text-yellow-600 shadow-md rounded px-3 py-1 shadow-amber-500">
                    Core Values
                  </p>
                  <p className="pt-3 text-zinc-300">
                    Curiosity: I am constantly exploring emerging technologies
                    like AI, cloud computing, and web development to stay at the
                    forefront of innovation.
                  </p>
                  <p className="pt-3 text-zinc-300">
                    Innovation: I strive to develop applications that are not
                    only functional but also user-centric and impactful.
                  </p>
                  <p className="pt-3 text-zinc-300">
                    Adaptability: With hands-on experience across various
                    frameworks, databases, and cloud services, I am adept at
                    navigating dynamic environments.
                  </p>
                </div>

                {/* Fun Facts - Middle */}
                <div className="border-b-2 md:border-b-0 md:border-x-2 border-amber-800 p-6 h-full">
                  <p className="font-bold text-blue-600 shadow-md rounded px-3 py-1 shadow-blue-500">
                    Fun Facts About Me
                  </p>
                  <p className="pt-3 text-zinc-300">
                    - I enjoy contributing to personal projects, such as
                    creating a To-Do App and maintaining a Personal Blog, which
                    reflect my organizational skills and passion for writing.
                  </p>
                  <p className="pt-3 text-zinc-300">
                    - Outside of coding, I enjoy exploring Linux systems,
                    experimenting with cloud automation tools, and keeping up
                    with tech trends.
                  </p>
                </div>

                {/* Looking Ahead - Right Side */}
                <div className=" md:border-l-2 border-amber-600 p-6 h-full">
                  <p className="font-bold text-red-600 shadow-md rounded px-3 py-1 shadow-red-500">
                    Looking Ahead
                  </p>
                  <p className="pt-3 text-zinc-300">
                    My career aspirations lie in the fields of artificial
                    intelligence, cloud engineering, and full-stack development.
                    I aim to continue working on projects that challenge my
                    abilities and make a difference in people’s lives. Whether
                    it’s designing scalable systems, building intuitive user
                    interfaces, or developing intelligent algorithms, I am
                    committed to growing as a professional and making meaningful
                    contributions.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="h-auto px-10 md:px-32">
            <div>
              <motion.div
                initial={{ opacity: 0, z: -30 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="flex justify-center font-bold text-4xl md:text-5xl text-yellow-800 mt-20">
                  Skills
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, z: -30 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="flex justify-center pt-5 text-xl md:text-2xl font-semibold text-gray-400">
                  Technical Skills
                </p>
              </motion.div>
              <SkillSection />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-400">
                  Soft Skills
                </h3>
              </motion.div>
              <SoftSkills />
            </div>
          </section>

          <section id="certification" className="h-auto px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="flex justify-center font-bold text-5xl text-amber-700 mt-20 mb-5">
                Certification
              </p>
            </motion.div>
            <Certificates />
          </section>

          {/* Projects Section */}
          <section id="projects" className="h-auto px-4 md:px-10">
            <motion.div>
              <h1 className="flex justify-center font-bold text-4xl md:text-5xl text-yellow-800 mt-20">
                Projects
              </h1>
            </motion.div>
            <Projects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="h-auto  px-4 md:px-10 ">
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, z: 20 }}
                whileInView={{ opacity: 1, z: 0 }}
              >
                <p className="font-bold text-4xl md:text-5xl mt-24 text-amber-700 ">
                  Experience
                </p>
              </motion.div>
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
