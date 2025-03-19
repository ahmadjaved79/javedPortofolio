import React from 'react';
import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Floating Shapes */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 bg-blue-500 opacity-50 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-400 opacity-50 rounded-full"
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          {/* Profile Image */}
          <motion.div
            className="md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={myImage} 
              alt="Profile" 
              className="rounded-[15px] w-full h-full mx-auto shadow-lg"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            className="md:w-2/3 ml-[6vw]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-white mb-4 leading-relaxed">
              "Code is like humor. When you have to explain it, it’s bad." - Cory House
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              I am a passionate Full Stack Developer and problem solver specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Currently, I am pursuing my <strong>B.Tech</strong> in Computer Science and Engineering at <strong>Andhra Loyola Institute Of Engineering & Technology</strong>.
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Enthusiastic about Data Structures and Algorithms (DSA) and exploring the world of Machine Learning. 
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              I strive to build projects that challenge me and learn cutting-edge technologies to contribute to real-world solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;