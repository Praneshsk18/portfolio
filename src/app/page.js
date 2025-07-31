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
    }, [index]);
  
    return <span>{displayedText}</span>;
  };
  
  return (
    <div >
      <main>
      <motion.div initial={{y:-90}} animate={{y:0}} transition={{ ease:"easeInOut",duration:0.5}}>
      <Header />
      </motion.div>
        <div className="flex flex-col">
          <section id="home" className="h-auto mt-[70px] px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="pt-10 md:pt-28 pl-4 md:pl-10">
                <div className="animate-fadeIn">
                  <p className="text-stone-400 font-mono font-semibold">
                  <Typewriter text="Hi I am" speed={200} />
                  </p>
                  <p className="pt-5 text-2xl text-stone-400 font-bold font-sans">
                  <Typewriter text="Pranesh S" speed={200} />
                  </p>
                  <h5 className="pt-5 text-4xl md:text-5xl font-bold text-amber-600">
                    <TypewriterComponent
                      options={{
                        strings: [
                          "FULL-STACK DEVELOPER",
                          "JAVA DEVELOPER",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 40,
                      }}
                    />
                  </h5>
                  <div className="flex flex-row items-center gap-4 pt-5">
                    {[
                      { name: "/lottielogo/instalogo.json", href: "https://www.instagram.com/pranesh_sk._?igsh=OW5rc2p6MTg1aHZr",key:1 },
                      { name: "/lottielogo/linkedin.json", href: "https://www.linkedin.com/in/praneshsk/",key:2 },
                      { name: "/lottielogo/twitter.json", href: "https://x.com/i/flow/login?redirect_after_login=%2FPraneshSk18",key:3 },
                      { name: "/lottielogo/github.json", href: "https://github.com/Praneshsk18",key:4 },
                      { name: "/lottielogo/facebook.json", href: "https://www.facebook.com/share/15sVeipnPV/?mibextid=qi2Omg",key:5 },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                        <motion.div initial={{opacity:0,x:-10}} viewport={{once:true}} whileInView={{opacity:1,x:0}} transition={{delay:item.key*0.3 ,duration:0.2, ease:"easeInOut"}} className="flex rounded-full border border-amber-900/40 justify-center bg-[#181414] text-white transition-all duration-300 hover:bg-amber-800/10 hover:scale-110 hover:shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] hover:shadow-amber-600">
                          <lottie-player
                            src={item.name||item.href}
                            style={{ width: 40, height: 40 }}
                            autoplay
                            loop
                          ></lottie-player>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale:0}}
                  whileInView={{ opacity: 1, scale:1}}
                  viewport={{once:true}}
                  transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                  className="flex flex-wrap pt-10 gap-10 justify-left"
                >
                  <a href="\Pranesh S - Resume.pdf" rel="noopener noreferrer" target="_blank">
                    <button onClick={() => {
                      window.open("/Pranesh S - Resume.pdf","_blank");
                    }} className="w-[165px] h-[62px] cursor-pointer text-white text-[17px] rounded-[1rem] border-none relative bg-[#181414] transition-all duration-100 active:scale-90 active:rotate-3 active:bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgba(248,117,21,255)_17.8%,rgba(251,248,228,255)_100.2%)]">
                      <span className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgba(248,117,21,255)_17.8%,rgba(251,248,228,255)_100.2%)] blur-[10px] -z-10"></span>
                      Download CV
                    </button>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{once:true}}
                  transition={{ delay:0.8,duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-3 mx-auto h-24 w-full md:w-2/3 bg-stone-500/25 mt-16 md:mt-20 rounded-xl mb-5"
                >
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{once:true}}
                      transition={{
                        delay: 1.0,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="text-base font-bold font-mono text-amber-600 pt-4">
                        Fresher
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{once:true}}
                      transition={{
                        delay: 1.2,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="text-xs text-stone-400 pb-4 font-mono">
                        Experience
                      </p>
                    </motion.div>
                  </div>
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-r border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      viewport={{once:true}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.4,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        3+
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      viewport={{once:true}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.6,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="text-stone-400 text-xs pb-4 font-mono">
                        Projects
                      </p>
                    </motion.div>
                  </div>
                  <div className="grid grid-rows-2 justify-items-left pl-4 border-stone-500">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{once:true}}
                      transition={{
                        delay: 1.8,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="font-bold font-mono text-amber-600 pt-4">
                        2
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{once:true}}
                      transition={{
                        delay: 2,
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="flex items-center"
                    >
                      <p className="text-stone-400 text-xs pb-4 font-mono">
                        Internships
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0,scale:0}}
                whileInView={{ opacity: 1,scale:1}}
                viewport={{once:true}}
                transition={{ delay: 0.2, duration: 1 , ease:"easeInOut"}}
                className="flex justify-center items-center max-h-auto md:min-h-screen my-0"
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
          <section id="about" className="h-auto px-4 md:px-20">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 ,ease:"easeInOut"}}
              viewport={{once:true}}
              className="text-center pt-10 md:pt-24"
            >
              <h1 className="font-bold text-4xl md:text-5xl text-amber-600">
                About Me
              </h1>
            </motion.div>
            <div className="w-full mt-8 md:mt-12">
              <motion.div
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity: 1,scale:1}}
                transition={{ duration: 0.5 }}
                viewport={{once:true}}
                className="mx-auto"
              >
                <p className="text-zinc-300 text-sm md:text-base font-sans mx-10 md:mx-5">
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
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ delay:0.1,duration: 0.5 ,ease:"easeInOut"}}
                viewport={{once:true}}
                className="grid md:grid-cols-3 bg-stone-800 mt-10 md:mt-20 rounded-xl p-5 md:pb-10 items-stretch"
              >
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-amber-600 p-6 h-full">
                <motion.div 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                transition={{delay:0.3,duration:0.5,ease:"easeInOut"}}
                >
                <p className="font-bold text-yellow-600 shadow-md rounded px-3 py-1 shadow-amber-500">
                    Core Values
                  </p>
                </motion.div>
                <motion.div
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                transition={{delay:0.6,duration:0.6,ease:"easeInOut"}}
                >
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
                  </motion.div>
                </div>
                <div className="border-b-2 md:border-b-0 md:border-x-2 border-amber-800 p-6 h-full">
                <motion.div 
                initial={{opacity:0,scale:0}}
                viewport={{once:true}}
                whileInView={{opacity:1,scale:1}}
                transition={{delay:0.5,duration:0.5,ease:"easeInOut"}}
                >
                  <p className="font-bold text-blue-600 shadow-md rounded px-3 py-1 shadow-blue-500">
                    Fun Facts About Me
                  </p>
                  </motion.div>
                  <motion.div
                  initial={{opacity:0,scale:0}}
                  viewport={{once:true}}
                  whileInView={{opacity:1,scale:1}}
                  transition={{delay:0.8,duration:0.6,ease:"easeInOut"}}
                  >
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
                  </motion.div>
                </div>
                <div className=" md:border-l-2 border-amber-600 p-6 h-full">
                <motion.div
                initial={{opacity:0,scale:0}}
                viewport={{once:true}}
                whileInView={{opacity:1,scale:1}}
                transition={{delay:0.7,duration:0.5,ease:"easeInOut"}}
                >
                <p className="font-bold text-red-600 shadow-md rounded px-3 py-1 shadow-red-500">
                    Looking Ahead
                  </p>
                </motion.div>
                <motion.div
                initial={{opacity:0,scale:0}}
                viewport={{once:true}}
                whileInView={{opacity:1,scale:1}}
                transition={{delay:1,duration:0.6,ease:"easeInOut"}}
                >
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
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          <section id="skills" className="h-auto px-10 md:px-32">
            <div>
              <motion.div
                initial={{ opacity: 0, x:-40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.2 }}
              >
                <p className="flex justify-center font-bold text-4xl md:text-4xl text-amber-600 mt-20">
                  Skills
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.3 }}
              >
                <p className="flex justify-center pt-5 text-xl md:text-2xl font-semibold text-gray-400">
                  Technical Skills
                </p>
              </motion.div>
              <SkillSection />
              <motion.div
                initial={{ opacity: 0 ,x: -30 }}
                whileInView={{ opacity: 1 ,x: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
              >
                <h3 className="text-xl md:text-2xl font-semibold my-2 text-gray-400">
                  Soft Skills
                </h3>
              </motion.div>
              <SoftSkills />
            </div>
          </section>

          <section id="certification" className="h-auto px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0, scale:0}}
              whileInView={{ opacity: 1 ,scale:1}}
              viewport={{once:true}}
              transition={{ duration: 0.6 }}
            >
              <p className="flex justify-center font-bold text-4xl text-amber-600 mt-20 mb-5">
                Certification
              </p>
            </motion.div>
            <Certificates />
          </section>
          <section id="projects" className="h-auto px-4 md:px-10">
            <motion.div 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            >
              <h1 className="flex justify-center font-bold text-4xl md:text-5xl text-yellow-600 mt-20">
                Projects
              </h1>
            </motion.div>
            <Projects />
          </section>
          <section id="experience" className="h-auto  px-4 md:px-10 ">
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                viewport={{once:true}}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <p className="font-bold text-4xl md:text-5xl mt-24 text-amber-600 ">
                  Experience
                </p>
              </motion.div>
            </div>
            <div className="gap-10 mt-10 h-full">
              <Experience />
            </div>
          </section>
          <section id="achievements" className="h-auto">
            <Achievements />
          </section>
          <section id="contact" className="h-auto bg-black-200 ">
            <Contacts />
          </section>
        </div>
      </main>
    </div>
  );
}
