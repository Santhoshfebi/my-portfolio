import { motion } from "framer-motion";
import resumeFile from "../assets/Santhosh_Raj_R_CV.pdf";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-gray-100 px-6 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6">My Resume</h2>
      <p className="text-center max-w-xl mb-6">
        Scroll to explore it, or download a copy.
      </p>

      <motion.div
        className="w-full md:w-3/4 lg:w-2/3 h-[600px] mb-6 border-2 border-gray-300 dark:border-gray-600 rounded-md overflow-hidden"
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

      <motion.a
        href={resumeFile}
        download
        className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Download Resume
      </motion.a>
    </motion.section>
  );
};

export default Resume;
