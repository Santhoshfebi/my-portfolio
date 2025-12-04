import { motion } from "framer-motion";
import resumeFile from "../assets/Santhosh Raj Full-Stack Developer.pdf";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        My Resume
      </h2>
      <p className="text-center max-w-xl mb-10 text-gray-700 dark:text-gray-300">
        Explore my professional journey below, or download a copy to keep.
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Resume Preview */}
        <motion.div
          className="flex-1 w-full h-[600px] border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <iframe
            src={resumeFile}
            title="Santhosh Raj Resume"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </motion.div>

        {/* Info + Download */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            Download a copy of my resume to see my full experience and skill set.
          </p>
          <motion.a
            href={resumeFile}
            download
            className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
