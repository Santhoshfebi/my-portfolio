import TypingText from "./TypingText";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import profile from "../assets/Profile.jpg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      <div className="flex flex-1 flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-14">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.img
            src={profile}
            alt="Santhosh Raj"
            className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-2xl 
                       border-4 border-cyan-500 dark:border-cyan-400"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating glow circle behind image */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-400 opacity-20 -z-10"></div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Typing Text */}
          <TypingText text="Hi, I'm SANTHOSH RAJ R" speed={70} />

          <p className="text-lg md:text-xl mt-3 text-gray-300">
            A Freshman skilled in ReactJS & Java
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/santhosh-sam/" 
               target="_blank" rel="noopener noreferrer">
              <img 
                src={linkedin} 
                alt="LinkedIn" 
                className="h-10 w-10 hover:scale-110 transition rounded-md"
              />
            </a>

            <a href="https://github.com/Santhoshfebi" 
               target="_blank" rel="noopener noreferrer">
              <img 
                src={github} 
                alt="GitHub" 
                className="h-10 w-10 hover:scale-110 transition rounded-full bg-white dark:bg-gray-200 p-1"
              />
            </a>
          </div>

          {/* About Card */}
          <motion.div
            className="mt-6 p-5 rounded-xl shadow-lg bg-white/85 
                       backdrop-blur-lg border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed">
              I’m Santhosh, a passionate Full-Stack Developer who loves building clean, fast 
              and responsive web applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-5 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a 
              href="/Santhosh_Raj_Resume.pdf" 
              download 
              className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg 
                         hover:bg-cyan-600 hover:text-white hover:scale-105 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
