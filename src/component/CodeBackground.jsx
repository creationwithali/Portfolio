import React, { useEffect, useState, useMemo } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaDocker, FaAws, FaPhp, FaJava,
  FaAngular, FaVuejs, FaLinux, FaDatabase, FaWordpress,
  FaAndroid, FaApple
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs,
  SiFirebase, SiGraphql, SiRedux, SiMysql, SiExpress,
  SiFigma, SiVercel, SiVite, SiDjango, SiFlask, SiNumpy,
  SiPandas, SiTensorflow, SiExpo, SiKotlin, SiSwift
} from 'react-icons/si';

const CodeBackground = () => {
  const technologies = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "React Native", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "Database", icon: FaDatabase, color: "#336791" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    // Python Technologies
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Flask", icon: SiFlask, color: "#ffffff" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    // React Native / Mobile Technologies
    { name: "Expo", icon: SiExpo, color: "#000020" },
    { name: "Android", icon: FaAndroid, color: "#3DDC84" },
    { name: "iOS", icon: FaApple, color: "#ffffff" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Swift", icon: SiSwift, color: "#FA7343" },
  ];

  const items = useMemo(() => {
    const allItems = [];
    let id = 0;
    
    // Only 12 icons total - no duplicates
    technologies.forEach((tech) => {
      allItems.push({
        id: id++,
        ...tech,
        left: Math.random() * 90 + 5,
        top: Math.random() * 85 + 5,
        animationDuration: 6 + Math.random() * 8,
        animationDelay: Math.random() * 5,
        size: 35 + Math.random() * 25,
      });
    });
    return allItems;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950">
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            25% {
              transform: translate3d(40px, -20px, 0) scale(1.05);
            }
            50% {
              transform: translate3d(-30px, -50px, 0) scale(1);
            }
            75% {
              transform: translate3d(20px, -25px, 0) scale(1.05);
            }
          }
          
          .tech-icon {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            opacity: 0.35;
            will-change: transform;
            animation: float var(--duration) ease-in-out infinite;
          }
          
          .tech-name {
            font-size: 9px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            white-space: nowrap;
          }
        `}
      </style>
      
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className="tech-icon"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              color: item.color,
              '--duration': `${item.animationDuration}s`,
              animationDelay: `-${item.animationDelay}s`,
            }}
          >
            <IconComponent size={item.size} />
            <span className="tech-name" style={{ color: item.color }}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CodeBackground;
