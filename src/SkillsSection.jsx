import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiBootstrap, SiC } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "bg-gradient-to-r from-blue-500 to-teal-400", level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, color: "bg-gradient-to-r from-green-500 to-lime-400", level: 89 },
  { name: "MongoDB", icon: <SiMongodb />, color: "bg-gradient-to-r from-green-400 to-emerald-500", level: 80 },
  { name: "Express.js", icon: <SiExpress />, color: "bg-gradient-to-r from-gray-700 to-gray-500", level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-gradient-to-r from-cyan-400 to-blue-500", level: 85 },
  { name: "JavaScript", icon: <SiJavascript />, color: "bg-gradient-to-r from-yellow-500 to-orange-400", level: 95 },
  { name: "Python", icon: <FaPython />, color: "bg-gradient-to-r from-blue-400 to-indigo-500", level: 90 },
  { name: "SQL", icon: <FaDatabase />, color: "bg-gradient-to-r from-red-500 to-orange-500", level: 80 },
  { name: "GitHub", icon: <FaGithub />, color: "bg-gradient-to-r from-gray-600 to-gray-400", level: 70 },
  { name: "HTML5", icon: <FaHtml5 />, color: "bg-gradient-to-r from-orange-400 to-red-500", level: 98 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "bg-gradient-to-r from-blue-400 to-cyan-500", level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "bg-gradient-to-r from-purple-500 to-pink-400", level: 88 },
  { name: "Java", icon: <FaJava />, color: "bg-gradient-to-r from-red-500 to-yellow-400", level: 80 },
  { name: "C", icon: <SiC />, color: "bg-gradient-to-r from-blue-700 to-blue-400", level: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wide mb-12 font-[Poppins]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My <span className="text-yellow-400 font-[Dancing Script]">Technical</span> Skills 💻
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative group ${skill.color} p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl border border-opacity-30 border-white`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-700 rounded-xl"></div>

              {/* 3D Flip Animation */}
              <motion.div
                className="text-6xl text-white mb-4 group-hover:rotate-6 transition-transform duration-300"
                whileHover={{ rotateY: 180 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-white text-2xl font-bold font-[Poppins] tracking-wide drop-shadow-lg">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2.5 mt-3">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                ></motion.div>
              </div>
              <p className="text-gray-200 mt-2 text-sm">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
