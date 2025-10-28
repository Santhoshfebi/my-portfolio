

import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
     {
      title: "Quiz App",
      description: "Quiztians is a modern, bilingual (English & Tamil) quiz web application built with React, Framer Motion, React Router, and Supabase. It allows participants to take a timed quiz, view their scores, and see the leaderboard, while providing admins a secure panel to manage participants.",
      codeLink: "https://github.com/Santhoshfebi/Quiztians",
      deployLink: "https://quiztians.vercel.app/"
    },
    {
      title: "Moviebooking Website",
      description: "A BookMyShow clone built with ReactJS, fetching dynamic movie data from API. Fully responsive and interactive.",
      codeLink: "https://github.com/Santhoshfebi/Bookmyshow_clone_web",
      deployLink: "https://bookingapp-orcin.vercel.app/"
    },
   
    {
      title: "HR-PORTAL",
      description: "HR Portal – A web-based recruitment management platform designed to streamline the hiring process for HR teams and candidates. Built using React, TailwindCSS, and Supabase, it enables secure resume uploads, candidate profile management, and recruiter dashboards. Features include user authentication, profile completion tracking, and a responsive UI for both desktop and mobile users.",
      codeLink: "https://github.com/Santhoshfebi/hr-portal",
      deployLink: "https://hr-portal-iota.vercel.app/"
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
      className="p-10 min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((proj, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-cyan-900 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{proj.description}</p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Code Base:</strong> <a href={proj.codeLink} target="_blank" className="underline hover:text-cyan-500">GitHub</a>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Deployment:</strong> <a href={proj.deployLink} target="_blank" className="underline hover:text-cyan-500">Live Demo</a>
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
