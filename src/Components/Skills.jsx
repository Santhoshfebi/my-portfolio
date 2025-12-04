import htm from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import boot from '../assets/bootstrap.png';
import rea from '../assets/library.png';
import sql from '../assets/mysql.png';
import jav from '../assets/java.png';
import git from '../assets/social.png';
import nod from '../assets/nodejs.png';
import ty from '../assets/typescript.png';
import ang from '../assets/angular.png';
import { motion } from 'framer-motion';

const Skills = () => {
  const currentSkills = [
    { img: htm, label: "HTML5" },
    { img: css, label: "CSS" },
    { img: js, label: "JavaScript" },
    { img: rea, label: "ReactJS" },
    { img: sql, label: "MySQL" },
    { img: boot, label: "Bootstrap" },
    { img: jav, label: "Java" },
    { img: git, label: "Git" },
  ];

  const learningSkills = [
    { img: sql, label: "MySQL" },
    { img: ang, label: "AngularJS" },
    { img: nod, label: "NodeJS" },
    { img: ty, label: "TypeScript" },
  ];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 w-full max-w-5xl mx-auto mt-6">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col gap-4 items-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl 
          p-6 rounded-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 
          hover:-translate-y-2 backdrop-blur"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <img src={skill.img} alt={skill.label} className="h-16 w-16" />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{skill.label}</h1>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.section
      id="skills"
      className="p-10 min-h-screen flex flex-col gap-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Skills</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          A collection of technologies I actively use and those I am currently learning to expand my skill set.
        </p>
      </div>

      <div>
        <h2 className="text-3xl text-center font-semibold">Using Now</h2>
        {renderSkills(currentSkills)}
      </div>

      <div>
        <h2 className="text-3xl text-center font-semibold">Learning</h2>
        {renderSkills(learningSkills)}
      </div>
    </motion.section>
  );
};

export default Skills;
