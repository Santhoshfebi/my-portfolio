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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-3/4 mx-auto">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex flex-col gap-4 items-center">
          <img src={skill.img} alt={skill.label} className="h-16 w-16" />
          <h1>{skill.label}</h1>
        </div>
      ))}
    </div>
  );

  return (
    <motion.section
      id="skills"
      className="p-10 min-h-screen flex flex-col gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl text-center mb-6">Skills</h1>
      <h2 className="text-2xl text-center mb-4">Using Now</h2>
      {renderSkills(currentSkills)}
      <h2 className="text-2xl text-center mt-8 mb-4">Learning</h2>
      {renderSkills(learningSkills)}
    </motion.section>
  );
};

export default Skills;
