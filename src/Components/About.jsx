import { motion } from "framer-motion";
import { FaPencilRuler, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-evenly px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10">
        About Me
      </h1>

      <p className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-16 leading-relaxed">
        I am a passionate web developer eager to take on new challenges and continuously improve my skills.  
        Whether it’s creating sleek front-end interfaces or building robust back-end systems, I strive to bring projects to life.  
        Innovative and detail-oriented, I excel at crafting user-friendly experiences, solving problems efficiently, and implementing features based on feedback.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <motion.div
          className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaPencilRuler className="text-5xl text-cyan-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Design</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Collaborate to design responsive and interactive websites that engage users and provide seamless experiences.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="text-5xl text-cyan-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Development</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Build responsive websites with clean, maintainable code while ensuring seamless user interactions and functionality.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
