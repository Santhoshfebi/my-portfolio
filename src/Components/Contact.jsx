import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="p-10 text-center flex flex-col justify-center gap-5 bg-cyan-900 dark:bg-gray-900 text-white dark:text-gray-100 transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
      <p>Email: <a href="mailto:santhoshrajr121@gmail.com" className="underline hover:text-cyan-300">santhoshrajr121@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/santhosh-sam/" target="_blank" className="underline hover:text-cyan-300">www.linkedin.com/in/santhosh-sam</a></p>
      
      <div className="flex justify-center gap-8 mt-4">
        <a href="https://www.linkedin.com/in/santhosh-sam/" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-cyan-500 transition-colors">
          <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="https://github.com/Santhoshfebi" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-cyan-500 transition-colors">
          <img src={github} alt="GitHub" className="h-6 w-6" />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
