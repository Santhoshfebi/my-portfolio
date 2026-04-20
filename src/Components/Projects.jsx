import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Quiz App (Quiztians)",
      description: "Quiztians is a modern, bilingual (English & Tamil) quiz web application built with React, Framer Motion, React Router, and Supabase. It allows participants to take a timed quiz, view their scores, and see the leaderboard, while providing admins a secure panel to manage participants.",
      codeLink: "https://github.com/Santhoshfebi/Quiztians",
      deployLink: "https://quiztians.vercel.app/"
    },
    {
      title: "HR-PORTAL",
      description: "HR Portal – A web-based recruitment management platform designed to streamline the hiring process for HR teams and candidates. Built using React, TailwindCSS, and Supabase, it enables secure resume uploads, candidate profile management, and recruiter dashboards. Features include user authentication, profile completion tracking, and a responsive UI for both desktop and mobile users.",
      codeLink: "https://github.com/Santhoshfebi/hr-portal",
      deployLink: "https://hr-portal-iota.vercel.app/"
    },
    {
      title: "Moviebooking Website",
      description: "A BookMyShow clone built with ReactJS, fetching dynamic movie data from API. Fully responsive and interactive.",
      codeLink: "https://github.com/Santhoshfebi/Bookmyshow_clone_web",
      deployLink: "https://bookingapp-orcin.vercel.app/"
    },
    {
      title: "E-com website",
      description: "A simple and interactive React-based cart management application built using React Hooks and Context API. This project demonstrates how to manage global state for products and cart items efficiently — allowing users to add, update, delete, and view items in a shopping cart, as well as add new products dynamically.",
      codeLink: "https://github.com/Santhoshfebi/list-of-items",
      deployLink: "https://list-of-items.vercel.app/"
    },
  ];

  return (
    <motion.section
      id="projects"
      className="p-10 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectList.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-auto">
              <a
                href={proj.codeLink}
                target="_blank"
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow"
              >
                View Code
              </a>
              <a
                href={proj.deployLink}
                target="_blank"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
