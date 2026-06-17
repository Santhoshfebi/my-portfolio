import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiSupabase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiVercel,
  SiPostman,
  SiTypescript,
  SiNodedotjs,
  SiAngular,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaAws } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: SiHtml5, level: 90 },
      { name: "CSS3", icon: FaCss3Alt, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 80 },
      { name: "ReactJS", icon: SiReact, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "Bootstrap", icon: SiBootstrap, level: 70 },
      { name: "Framer Motion", icon: SiFramer, level: 65 },
    ],
  },
  {
    title: "AWS Cloud",
    description: "Currently improving cloud and modern development skills.",
    icon: Cloud,
    skills: [
      { name: "AWS Basics", icon: FaAws, level: 95 },
      { name: "AWS EC2", icon: FaAws, level: 90 },
      { name: "AWS S3", icon: FaAws, level: 95 },
      { name: "AWS Cloud Watch", icon: FaAws, level: 60 },
    ]
  },
  {
    title: "Backend & Database",
    description: "Working with auth, database operations, and app logic.",
    icon: Database,
    skills: [
      { name: "Supabase", icon: SiSupabase, level: 75 },
      { name: "MySQL", icon: SiMysql, level: 70 },
      { name: "Java", icon: FaJava, level: 60 },
      { name: "REST API Basics", icon: Code2, level: 65 },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Managing projects, version control, testing, and hosting.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, level: 80 },
      { name: "GitHub", icon: SiGithub, level: 82 },
      { name: "Vite", icon: SiVite, level: 75 },
      { name: "npm", icon: SiNpm, level: 75 },
      { name: "Vercel", icon: SiVercel, level: 80 },
      { name: "Postman", icon: SiPostman, level: 60 },
    ],
  },
];

const stats = [
  { value: "20+", label: "Technical Skills" },
  { value: "12+", label: "Projects Built" },
  { value: "React", label: "Front End" },
  { value: "AWS", label: "Cloud Platform" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-yellow-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="Skills"
          title="Skills that power my development workflow"
          description="A practical set of frontend, backend, database, cloud, and deployment skills I use to build clean and responsive web applications."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Panel */}
          <motion.div
            className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-7 backdrop-blur-xl lg:sticky lg:top-28 lg:h-fit"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              Developer Toolkit
            </div>

            <h3 className="text-3xl font-black leading-tight text-white">
              Clean UI, strong fundamentals, and deployment-ready projects.
            </h3>

            <p className="mt-5 leading-relaxed text-neutral-400">
              My skill set is focused on building real-world applications with
              React, Tailwind CSS, Supabase, MySQL, and deployment tools like
              GitHub and Vercel. I am also improving my AWS cloud knowledge for
              production-ready hosting workflows.
            </p>

            {/* 2-Column Stats Layout */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-amber-400/10 bg-neutral-950/70 p-5 transition hover:border-amber-400/35 hover:bg-amber-400/10"
                >
                  <p className="text-2xl font-black text-amber-400 md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 px-6 py-3 font-bold text-neutral-950 shadow-lg shadow-amber-950/40 transition hover:scale-105"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Right Panel */}
          <div className="space-y-5">
            {skillGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-amber-400/35 hover:bg-white/[0.06]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: groupIndex * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <GroupIcon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          className="rounded-2xl border border-amber-400/10 bg-neutral-950/70 p-4 transition hover:border-amber-400/35 hover:bg-amber-400/10"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: skillIndex * 0.035,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <SkillIcon className="text-2xl text-amber-300" />
                              <span className="text-sm font-bold text-neutral-200">
                                {skill.name}
                              </span>
                            </div>

                            <span className="text-xs font-semibold text-neutral-500">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 0.9,
                                delay: 0.1 + skillIndex * 0.04,
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;