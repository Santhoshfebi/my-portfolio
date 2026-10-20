import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Layers3,
  Star,
} from "lucide-react";

import { projects } from "../data/portfolioData";

/* ==========================================================
   PROJECTS
========================================================== */

const Projects = () => {
  const featuredProject =
    projects.find((project) => project.title === "Quiztians") ||
    projects.find((project) => project.featured) ||
    projects[0];

  const remainingProjects = projects.filter(
    (project) => project !== featuredProject
  );

  return (
    <section
      id="projects"
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
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          top-[10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4F8CFF]/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[250px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.025]
          blur-[150px]
        "
      />

      {/* Side architectural lines */}

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
              04 / Projects
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
              Selected work &
              <span className="block text-[#4F8CFF]">
                practical builds.
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
                Applications I&apos;ve built while developing my
                experience with React, backend services, authentication,
                databases, responsive interfaces and deployment.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#596372]
                  "
                >
                  {projects.length} Selected Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            FEATURED PROJECT
        ==================================================== */}

        {featuredProject && (
          <motion.article
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              border-b
              border-white/[0.07]
              py-12
              sm:py-16
              lg:py-20
            "
          >
            <div
              className="
                grid
                gap-10
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-16
                xl:gap-24
              "
            >
              {/* =================================================
                  FEATURED VISUAL
              ================================================= */}

              <div
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-[#0B1018]
                  sm:min-h-[470px]
                  lg:min-h-[560px]
                "
              >
                {/* Grid */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.16]
                  "
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(79,140,255,0.10) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(79,140,255,0.10) 1px, transparent 1px)
                    `,
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[350px]
                    w-[350px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#4F8CFF]/[0.1]
                    blur-[100px]
                    transition-all
                    duration-700
                    group-hover:bg-[#4F8CFF]/[0.14]
                  "
                />

                {/* Giant project number */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    select-none
                    text-[140px]
                    font-black
                    leading-none
                    tracking-[-0.09em]
                    text-white/[0.025]
                    sm:text-[190px]
                  "
                >
                  01
                </div>

                {/* Corner details */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-8
                    w-px
                    bg-[#4F8CFF]
                  "
                />

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-8
                    bg-[#4F8CFF]
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-8
                    w-px
                    bg-[#4F8CFF]
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-px
                    w-8
                    bg-[#4F8CFF]
                  "
                />

                {/* Top metadata */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    z-10
                    flex
                    items-center
                    justify-between
                    sm:left-7
                    sm:right-7
                    sm:top-7
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#4F8CFF]
                    "
                  >
                    <Star size={11} />

                    Flagship Project
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#505967]
                    "
                  >
                    Web Application
                  </span>
                </div>

                {/* Center content */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    p-8
                  "
                >
                  <div className="text-center">
                    {/* Icon */}

                    <div
                      className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        border
                        border-[#4F8CFF]/30
                        bg-[#4F8CFF]/[0.07]
                        text-[#4F8CFF]
                        transition-all
                        duration-500
                        group-hover:border-[#4F8CFF]/60
                        group-hover:bg-[#4F8CFF]/[0.12]
                        sm:h-20
                        sm:w-20
                      "
                    >
                      <Layers3 size={30} />
                    </div>

                    <p
                      className="
                        mt-7
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.32em]
                        text-[#687281]
                      "
                    >
                      Featured Build
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[clamp(2.5rem,8vw,5rem)]
                        font-black
                        leading-none
                        tracking-[-0.06em]
                        text-[#F5F7FA]
                      "
                    >
                      {featuredProject.title}
                    </h3>

                    <p
                      className="
                        mx-auto
                        mt-4
                        max-w-sm
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#4F8CFF]
                      "
                    >
                      {featuredProject.category}
                    </p>
                  </div>
                </div>

                {/* Bottom metadata */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    z-10
                    flex
                    items-end
                    justify-between
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#48515E]
                    "
                  >
                    React / Supabase
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#4F8CFF]"
                  />
                </div>
              </div>

              {/* =================================================
                  FEATURED INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  lg:py-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.07]
                    pb-5
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#4F8CFF]
                    "
                  >
                    01 / Featured
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#4B5563]
                    "
                  >
                    Case Study
                  </span>
                </div>

                <h3
                  className="
                    mt-8
                    text-[clamp(2.5rem,6vw,4.5rem)]
                    font-black
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-[#F5F7FA]
                  "
                >
                  {featuredProject.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#4F8CFF]
                  "
                >
                  {featuredProject.category}
                </p>

                <p
                  className="
                    mt-7
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#8993A1]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  {featuredProject.description}
                </p>

                {/* Technology */}

                <div className="mt-8">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#505967]
                    "
                  >
                    Technology
                  </span>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          border
                          border-white/[0.08]
                          px-3
                          py-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#8993A1]
                          transition-all
                          duration-300
                          hover:border-[#4F8CFF]/40
                          hover:text-[#F5F7FA]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}

                <div
                  className="
                    mt-9
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      bg-[#4F8CFF]
                      px-5
                      py-4
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#6198FF]
                      hover:shadow-[0_0_40px_rgba(79,140,255,0.15)]
                      sm:min-w-[180px]
                    "
                  >
                    Live Project

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>

                  <a
                    href={featuredProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      border
                      border-white/[0.1]
                      px-5
                      py-4
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#DCE1E8]
                      transition-all
                      duration-300
                      hover:border-[#4F8CFF]/50
                      hover:bg-[#4F8CFF]/[0.07]
                      sm:min-w-[180px]
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Github size={15} />

                      Source Code
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="
                        text-[#667085]
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#4F8CFF]
                      "
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* ====================================================
            OTHER PROJECTS HEADER
        ==================================================== */}

        {remainingProjects.length > 0 && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mb-8
                flex
                items-end
                justify-between
                sm:mb-10
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
                  Project Archive
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
                  More selected work
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
                {String(remainingProjects.length).padStart(2, "0")} Projects
              </span>
            </motion.div>

            {/* ==================================================
                PROJECT LIST
            ================================================== */}

            <div className="border-t border-white/[0.07]">
              {remainingProjects.map((project, index) => {
                const projectNumber = String(index + 2).padStart(
                  2,
                  "0"
                );

                return (
                  <motion.article
                    key={project.title}
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
                      duration: 0.6,
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      relative
                      border-b
                      border-white/[0.07]
                      py-8
                      sm:py-10
                    "
                  >
                    {/* Hover */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#4F8CFF]/0
                        transition-colors
                        duration-300
                        group-hover:bg-[#4F8CFF]/[0.02]
                      "
                    />

                    <div
                      className="
                        relative
                        grid
                        gap-7
                        lg:grid-cols-[70px_0.8fr_1.2fr_auto]
                        lg:items-center
                        lg:gap-10
                      "
                    >
                      {/* Number */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          lg:block
                        "
                      >
                        <span
                          className="
                            text-[9px]
                            font-bold
                            tracking-[0.2em]
                            text-[#4F8CFF]
                          "
                        >
                          {projectNumber}
                        </span>

                        {project.featured && (
                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                              text-[7px]
                              font-bold
                              uppercase
                              tracking-[0.2em]
                              text-[#667085]
                              lg:hidden
                            "
                          >
                            <Star
                              size={10}
                              className="text-[#4F8CFF]"
                            />

                            Featured
                          </span>
                        )}
                      </div>

                      {/* Project title */}

                      <div>
                        <span
                          className="
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#4F8CFF]
                          "
                        >
                          {project.category}
                        </span>

                        <h4
                          className="
                            mt-2
                            text-2xl
                            font-bold
                            tracking-[-0.04em]
                            text-[#E6EAF0]
                            transition-colors
                            duration-300
                            group-hover:text-white
                            sm:text-3xl
                          "
                        >
                          {project.title}
                        </h4>

                        {project.featured && (
                          <div
                            className="
                              mt-3
                              hidden
                              items-center
                              gap-2
                              lg:flex
                            "
                          >
                            <Star
                              size={11}
                              className="text-[#4F8CFF]"
                            />

                            <span
                              className="
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#596372]
                              "
                            >
                              Featured Project
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description + tech */}

                      <div>
                        <p
                          className="
                            max-w-xl
                            text-sm
                            leading-7
                            text-[#747E8D]
                          "
                        >
                          {project.description}
                        </p>

                        <div
                          className="
                            mt-4
                            flex
                            flex-wrap
                            gap-x-4
                            gap-y-2
                          "
                        >
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-[#505967]
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          lg:justify-end
                        "
                      >
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code`}
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            border
                            border-white/[0.09]
                            text-[#747E8D]
                            transition-all
                            duration-300
                            hover:border-[#4F8CFF]/50
                            hover:bg-[#4F8CFF]/10
                            hover:text-[#F5F7FA]
                          "
                        >
                          <Github size={16} />
                        </a>

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live project`}
                          className="
                            flex
                            h-11
                            items-center
                            gap-2
                            border
                            border-white/[0.09]
                            px-4
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.17em]
                            text-[#DCE1E8]
                            transition-all
                            duration-300
                            hover:border-[#4F8CFF]
                            hover:bg-[#4F8CFF]
                            hover:text-white
                          "
                        >
                          Live

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
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================
            GITHUB CTA
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
            grid
            gap-6
            border-y
            border-white/[0.07]
            py-7
            sm:py-8
            lg:grid-cols-[1fr_auto]
            lg:items-center
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
              More on GitHub
            </span>

            <p
              className="
                mt-2
                max-w-xl
                text-lg
                font-semibold
                tracking-[-0.025em]
                text-[#DCE1E8]
              "
            >
              Explore the code behind my projects and development work.
            </p>
          </div>

          <a
            href="https://github.com/Santhoshfebi"
            target="_blank"
            rel="noopener noreferrer"
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
            <Github size={15} />

            GitHub Profile

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

export default Projects;