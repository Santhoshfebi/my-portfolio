import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Wrench,
} from "lucide-react";

import {
  SiBootstrap,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNpm,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";

import {
  FaAws,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";

/* ==========================================================
   SKILL GROUPS
========================================================== */

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    label: "Primary Focus",
    description:
      "Building responsive, interactive and reusable interfaces for modern web applications.",
    icon: Code2,
    skills: [
      {
        name: "React",
        icon: SiReact,
        level: "Core",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: "Core",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Core",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        level: "Core",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: "Core",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        level: "Working Knowledge",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        level: "Working Knowledge",
      },
    ],
  },

  {
    number: "02",
    title: "Backend & Data",
    label: "Application Layer",
    description:
      "Connecting frontend applications with authentication, databases, storage and APIs.",
    icon: Database,
    skills: [
      {
        name: "Supabase",
        icon: SiSupabase,
        level: "Core",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: "Working Knowledge",
      },
      {
        name: "REST APIs",
        icon: Code2,
        level: "Working Knowledge",
      },
      {
        name: "Java",
        icon: FaJava,
        level: "Foundations",
      },
    ],
  },

  {
    number: "03",
    title: "AWS Cloud",
    label: "Cloud Foundations",
    description:
      "Developing cloud fundamentals around compute, storage, monitoring and scalable application infrastructure.",
    icon: Cloud,
    skills: [
      {
        name: "AWS Fundamentals",
        icon: FaAws,
        level: "Foundations",
      },
      {
        name: "EC2",
        icon: FaAws,
        level: "Foundations",
      },
      {
        name: "S3",
        icon: FaAws,
        level: "Foundations",
      },
      {
        name: "CloudWatch",
        icon: FaAws,
        level: "Foundations",
      },
      {
        name: "Auto Scaling",
        icon: FaAws,
        level: "Foundations",
      },
      {
        name: "Load Balancing",
        icon: FaAws,
        level: "Foundations",
      },
    ],
  },

  {
    number: "04",
    title: "Tools & Deployment",
    label: "Development Workflow",
    description:
      "Tools I use for version control, package management, API testing, development and deployment.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: SiGit,
        level: "Core",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        level: "Core",
      },
      {
        name: "Vite",
        icon: SiVite,
        level: "Core",
      },
      {
        name: "npm",
        icon: SiNpm,
        level: "Core",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        level: "Core",
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: "Working Knowledge",
      },
    ],
  },
];

/* ==========================================================
   QUICK STATS
========================================================== */

const stats = [
  {
    value: "React",
    label: "Primary Frontend",
  },
  {
    value: "Supabase",
    label: "Backend Platform",
  },
  {
    value: "AWS",
    label: "Cloud Learning",
  },
  {
    value: "Git",
    label: "Version Control",
  },
];

/* ==========================================================
   HELPERS
========================================================== */

const getLevelStyle = (level) => {
  switch (level) {
    case "Core":
      return "border-[#4F8CFF]/30 bg-[#4F8CFF]/10 text-[#79A7FF]";

    case "Working Knowledge":
      return "border-white/[0.1] bg-white/[0.04] text-[#929CAA]";

    default:
      return "border-white/[0.07] bg-transparent text-[#667085]";
  }
};

/* ==========================================================
   SKILLS
========================================================== */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#070A0F]
        px-5
        py-24
        text-[#F5F7FA]
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
        xl:px-16
      "
    >
      {/* ======================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[250px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.025]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-0
          hidden
          h-full
          w-px
          bg-white/[0.03]
          xl:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-0
          hidden
          h-full
          w-px
          bg-white/[0.03]
          xl:block
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            border-b
            border-white/[0.07]
            pb-8
            sm:pb-10
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#4F8CFF] sm:w-10" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#77808F]
              "
            >
              03 / Skills
            </span>
          </div>

          <div
            className="
              mt-7
              grid
              gap-7
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-end
              lg:gap-16
            "
          >
            <h2
              className="
                max-w-4xl
                text-[clamp(2.7rem,8vw,5.7rem)]
                font-black
                leading-[0.94]
                tracking-[-0.065em]
                text-[#F5F7FA]
              "
            >
              Tools behind the
              <span className="block text-[#4F8CFF]">
                work I build.
              </span>
            </h2>

            <div className="lg:ml-auto lg:max-w-xl">
              <p
                className="
                  text-sm
                  leading-7
                  text-[#8993A1]
                  sm:text-base
                  sm:leading-8
                "
              >
                My toolkit is centered around frontend development with
                React, supported by backend services, databases,
                deployment tools and a growing foundation in AWS cloud
                infrastructure.
              </p>

              <a
                href="#projects"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#4F8CFF]
                  transition-colors
                  hover:text-[#79A7FF]
                "
              >
                See these skills in action

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            OVERVIEW
        ==================================================== */}

        <div
          className="
            grid
            gap-10
            border-b
            border-white/[0.07]
            py-12
            sm:py-14
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
            lg:py-16
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#4F8CFF]
              "
            >
              Developer Toolkit
            </span>

            <h3
              className="
                mt-4
                max-w-md
                text-2xl
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-[#E6EAF0]
                sm:text-3xl
              "
            >
              Built around practical development.
            </h3>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#747E8D]
              "
            >
              I focus on technologies I&apos;ve used while building
              applications rather than filling the portfolio with every
              technology I&apos;ve encountered.
            </p>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              grid
              grid-cols-2
              border-l
              border-t
              border-white/[0.07]
              sm:grid-cols-4
            "
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  group
                  min-h-[130px]
                  border-b
                  border-r
                  border-white/[0.07]
                  p-5
                  transition-colors
                  duration-300
                  hover:bg-[#4F8CFF]/[0.025]
                  sm:min-h-[150px]
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#4A5360]
                  "
                >
                  {item.label}
                </span>

                <p
                  className="
                    mt-8
                    text-lg
                    font-bold
                    tracking-[-0.03em]
                    text-[#DCE1E8]
                    transition-colors
                    group-hover:text-[#4F8CFF]
                    sm:text-xl
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ====================================================
            SKILL GROUPS
        ==================================================== */}

        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div
            className="
              mb-9
              flex
              items-end
              justify-between
              sm:mb-12
            "
          >
            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#596372]
                "
              >
                Technical Breakdown
              </span>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-[-0.035em]
                  text-[#F5F7FA]
                  sm:text-3xl
                "
              >
                Skills by discipline
              </h3>
            </div>

            <span
              className="
                hidden
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#3D4653]
                sm:block
              "
            >
              Core · Working Knowledge · Foundations
            </span>
          </div>

          {/* ==================================================
              GROUPS
          ================================================== */}

          <div className="border-t border-white/[0.07]">
            {skillGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: groupIndex * 0.06,
                  }}
                  className="
                    grid
                    gap-7
                    border-b
                    border-white/[0.07]
                    py-9
                    sm:py-10
                    lg:grid-cols-[90px_0.75fr_1.5fr]
                    lg:gap-10
                    lg:py-12
                  "
                >
                  {/* Number */}

                  <div className="flex items-start justify-between lg:block">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        text-[#4F8CFF]
                      "
                    >
                      {group.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        border
                        border-white/[0.08]
                        text-[#667085]
                        lg:mt-7
                      "
                    >
                      <GroupIcon size={17} />
                    </div>
                  </div>

                  {/* Group description */}

                  <div>
                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-[#515A68]
                      "
                    >
                      {group.label}
                    </span>

                    <h4
                      className="
                        mt-2
                        text-xl
                        font-bold
                        tracking-[-0.025em]
                        text-[#E6EAF0]
                        sm:text-2xl
                      "
                    >
                      {group.title}
                    </h4>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-sm
                        leading-7
                        text-[#707A89]
                      "
                    >
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}

                  <div
                    className="
                      grid
                      gap-px
                      overflow-hidden
                      border
                      border-white/[0.07]
                      bg-white/[0.07]
                      sm:grid-cols-2
                    "
                  >
                    {group.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay:
                              groupIndex * 0.04 +
                              skillIndex * 0.025,
                          }}
                          className="
                            group/skill
                            flex
                            min-h-[84px]
                            items-center
                            gap-4
                            bg-[#070A0F]
                            p-4
                            transition-colors
                            duration-300
                            hover:bg-[#0B1018]
                            sm:p-5
                          "
                        >
                          {/* Icon */}

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              border
                              border-white/[0.08]
                              text-[#6E7887]
                              transition-all
                              duration-300
                              group-hover/skill:border-[#4F8CFF]/40
                              group-hover/skill:bg-[#4F8CFF]/10
                              group-hover/skill:text-[#4F8CFF]
                            "
                          >
                            <SkillIcon size={18} />
                          </div>

                          {/* Name / level */}

                          <div className="min-w-0 flex-1">
                            <p
                              className="
                                text-[13px]
                                font-semibold
                                text-[#D7DCE4]
                              "
                            >
                              {skill.name}
                            </p>

                            <span
                              className={`
                                mt-2
                                inline-flex
                                border
                                px-2
                                py-1
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                ${getLevelStyle(skill.level)}
                              `}
                            >
                              {skill.level}
                            </span>
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

        {/* ====================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-6
            border-y
            border-white/[0.07]
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:py-8
          "
        >
          <div>
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#505967]
              "
            >
              From skills to products
            </span>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                tracking-[-0.025em]
                text-[#DCE1E8]
              "
            >
              See how I&apos;ve used these technologies in real projects.
            </p>
          </div>

          <a
            href="#projects"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border
              border-[#4F8CFF]/40
              px-5
              py-3.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#F5F7FA]
              transition-all
              duration-300
              hover:border-[#4F8CFF]
              hover:bg-[#4F8CFF]
              hover:text-white
            "
          >
            Explore Projects

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;