import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGitAlt, FaWordpress, FaPython, FaAndroid, FaApple
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiGo, SiTailwindcss, SiTypescript, 
  SiElementor, SiFigma, SiVite, SiDjango, SiFlask, SiExpo,
  SiTensorflow, SiFirebase, SiNextdotjs
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#83CD29]" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Expo", icon: <SiExpo className="text-gray-300" /> },
    { name: "Android", icon: <FaAndroid className="text-[#3DDC84]" /> },
    { name: "iOS", icon: <FaApple className="text-gray-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
    { name: "Elementor", icon: <SiElementor className="text-[#92003B]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  ];

  return (
    <section 
      id="skills" 
      className="flex justify-center text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#38BDF8]">My</span> 
          <span className="text-[#34D399]"> Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to craft modern web applications, mobile apps, and AI solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group [perspective:1000px]"
            >
              <div 
                className="flex flex-col items-center justify-center w-32 h-32 bg-[#1E293B]/40 backdrop-blur-md 
                           rounded-xl p-5 shadow-md shadow-black/30 cursor-pointer
                           [transform-style:preserve-3d]
                           group-hover:animate-[multiFlip_0.8s_ease-in-out]
                           group-hover:scale-[1.15] group-hover:bg-[#1E293B]/80 
                           group-hover:shadow-xl group-hover:shadow-[#38BDF8]/30"
              >
                <div className="text-5xl mb-2 group-hover:drop-shadow-[0_0_12px_currentColor]">
                  {skill.icon}
                </div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes multiFlip {
            0% { transform: rotateY(0deg) scale(1); }
            20% { transform: rotateY(180deg) scale(1.1); }
            40% { transform: rotateY(360deg) scale(1.15); }
            60% { transform: rotateY(540deg) scale(1.1); }
            80% { transform: rotateY(720deg) scale(1.15); }
            100% { transform: rotateY(720deg) scale(1.15); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
