import TypingText from "./TypingText";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import profile from "../assets/Profile.jpg"; 
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10">
        {/* Profile Photo on the left with fade-in & hover */}
        <motion.img
          src={profile}
          alt="Santhosh Raj"
          className="h-64 w-64 rounded-full object-cover shadow-lg border-4 border-cyan-500 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Text + Social Links on the right with slide-in */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <TypingText text="Hi, I'm SANTHOSH RAJ R!" speed={100} />
          <p className="text-lg mt-2 mb-4">A Freshman skilled in ReactJS & Java</p>

          <div className="flex gap-6 mt-2 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/santhosh-sam/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="h-10 w-10 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/Santhoshfebi" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="h-10 w-10 hover:scale-110 transition rounded-full" />
            </a>
          </div>

          <motion.div
            className="bg-black text-white text-center md:text-left mt-6 p-4 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>
              Hi, I'm Santhosh, a passionate Full-Stack Developer specializing in dynamic and responsive web applications
              using JavaScript, ReactJS, and MySQL.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
