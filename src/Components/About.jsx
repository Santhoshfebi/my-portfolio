import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-evenly px-6 py-10 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl text-center mb-6">About Me</h1>
      <p className="text-center max-w-3xl mx-auto mb-8">
        As a beginner in web development, I am eager to take on new challenges and continuously improve my skills.
        Whether it’s creating a sleek front-end or building a robust back-end, I’m excited to bring projects to life.
        Innovative and skilled engineering graduate, proficient in creating user interfaces, writing and testing code, solving problems, and implementing new features based on user feedback.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 text-center">
        <div>
          <h2 className="text-2xl mb-2">DESIGN</h2>
          <p>Collaborate to design responsive and interactive websites.</p>
        </div>
        <div>
          <h2 className="text-2xl mb-2">DEVELOPMENT</h2>
          <p>Develop responsive websites that engage users seamlessly.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
