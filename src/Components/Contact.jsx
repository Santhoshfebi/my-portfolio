import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold tracking-wide mb-4">
        Get In Touch
      </h2>
      <p className="text-gray-300 max-w-xl text-center mb-10">
        I'm always open to discussing new projects, opportunities, or collaborations.
        Feel free to reach out—I'll respond as soon as possible!
      </p>

      {/* Contact Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-2xl shadow-xl max-w-xl w-full text-center space-y-6">
        
        <div>
          <p className="text-lg font-semibold text-cyan-300">Email</p>
          <a
            href="mailto:santhoshrajr121@gmail.com"
            className="text-gray-200 hover:text-cyan-300 transition"
          >
            santhoshrajr121@gmail.com
          </a>
        </div>

        <div>
          <p className="text-lg font-semibold text-cyan-300">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/santhosh-sam/"
            target="_blank"
            className="text-gray-200 hover:text-cyan-300 transition"
          >
            www.linkedin.com/in/santhosh-sam
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/santhosh-sam/"
            target="_blank"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-cyan-500 transition-all p-2"
            whileHover={{ scale: 1.1 }}
          >
            <img src={linkedin} alt="LinkedIn" className="h-7 w-7" />
          </motion.a>

          <motion.a
            href="https://github.com/Santhoshfebi"
            target="_blank"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-cyan-500 transition-all p-2"
            whileHover={{ scale: 1.1 }}
          >
            <img src={github} alt="GitHub" className="h-7 w-7 rounded-full" />
          </motion.a>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-10 mb-10">
        © - Santhosh Raj 
      </p>
    </motion.section>
  );
};

export default Contact;
