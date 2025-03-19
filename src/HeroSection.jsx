import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Profile from "./assets/profile_pic_1.jpg"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <motion.section id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex items-center justify-center bg-black text-white"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center w-full max-w-7xl px-4 md:px-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Left Side: Content */}
        <motion.div
          className="text-center md:text-left md:mr-[5vw] space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4 animate-slide-in mt-[10vh]">
            I am <span className="text-sky-500">Ahmad Javed</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-extrabold mb-4 font-serif">
            <span className="text-sky-500">
              A Full Stack Developer & Problem Solver
            </span>
          </h2>

          <p className="text-sm md:text-lg font-medium">
            <Typewriter
              words={[
                "Welcome to my personal blog!",
                "Let's build something amazing together!",
                "Feel free to explore my work.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1cnziLxH314lVczmwdKVh6Dd8DRIcwk49/view?usp=sharing"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block mt-6 px-6 py-3 bg-sky-500 text-black font-semibold rounded-lg shadow-lg hover:bg-sky-400 transition duration-300"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="flex-shrink-0 mb-6 md:mb-0 md:ml-40 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={Profile} // Replace with your image URL
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 1.3, rotate: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
