import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import profile from "../assets/Profile.png";
import { personalInfo } from "../data/portfolioData";

/* ==========================================================
   TECH STACK
========================================================== */

const techStack = [
  "React",
  "JavaScript",
  "Supabase",
  "Tailwind CSS",
  "AWS",
  "Git",
];

/* ==========================================================
   ANIMATION
========================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070A0F]
        text-[#F5F7FA]
      "
    >
      {/* ======================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,140,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,140,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ======================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[80px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4F8CFF]/[0.08]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.04]
          blur-[140px]
        "
      />

      {/* ======================================================
          DECORATIVE VERTICAL LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-0
          hidden
          h-full
          w-px
          bg-white/[0.035]
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
          bg-white/[0.035]
          xl:block
        "
      />

      {/* ======================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-[1400px]
          flex-col
          px-5
          pb-8
          pt-[105px]
          sm:px-8
          sm:pt-[120px]
          lg:px-12
          lg:pb-0
          lg:pt-[130px]
          xl:px-16
        "
      >
        {/* ====================================================
            TOP META ROW
        ==================================================== */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="
            mb-8
            flex
            items-center
            justify-between
            border-b
            border-white/[0.07]
            pb-4
            sm:mb-10
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#4F8CFF] sm:w-10" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#77808F]
              "
            >
              01 / Portfolio
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#77808F]
              sm:flex
            "
          >
            <MapPin size={12} className="text-[#4F8CFF]" />

            {personalInfo.location}
          </div>
        </motion.div>

        {/* ====================================================
            HERO GRID
        ==================================================== */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-10">
            {/* Availability */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                sm:mb-7
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#4F8CFF]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#4F8CFF]
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#8A94A3]
                  sm:text-[10px]
                "
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
            >
              <motion.h1
                variants={fadeUp}
                className="
                  text-[clamp(3.4rem,12vw,6.8rem)]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.075em]
                  text-[#F5F7FA]
                  lg:text-[clamp(5rem,7vw,7.5rem)]
                "
              >
                Frontend
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="
                  mt-2
                  flex
                  items-center
                  gap-3
                  sm:gap-5
                "
              >
                <span
                  className="
                    hidden
                    h-[2px]
                    w-[clamp(35px,6vw,90px)]
                    bg-[#4F8CFF]
                    sm:block
                  "
                />

                <h2
                  className="
                    text-[clamp(3.4rem,12vw,6.8rem)]
                    font-black
                    uppercase
                    leading-[0.82]
                    tracking-[-0.075em]
                    text-[#4F8CFF]
                    lg:text-[clamp(5rem,7vw,7.5rem)]
                  "
                >
                  Developer.
                </h2>
              </motion.div>
            </motion.div>

            {/* Cloud label */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                flex
                items-center
                gap-3
                sm:mt-6
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#5F6978]
                "
              >
                +
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#9AA4B2]
                  sm:text-[11px]
                "
              >
                AWS Cloud
              </span>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                grid
                gap-6
                sm:mt-10
                lg:grid-cols-[1fr_auto]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    max-w-xl
                    text-[15px]
                    leading-7
                    text-[#929CAA]
                    sm:text-base
                    sm:leading-8
                  "
                >
                  I build clean, responsive and user-focused web
                  applications with{" "}
                  <span className="font-semibold text-[#E6EAF0]">
                    React
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#E6EAF0]">
                    JavaScript
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#E6EAF0]">
                    Tailwind CSS
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#E6EAF0]">
                    Supabase
                  </span>
                  , while expanding my application deployment and
                  infrastructure knowledge with AWS.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
              "
            >
              {/* Projects CTA */}

              <a
                href="#projects"
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  overflow-hidden
                  bg-[#4F8CFF]
                  px-5
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#6198FF]
                  hover:shadow-[0_0_45px_rgba(79,140,255,0.18)]
                  sm:w-auto
                  sm:min-w-[205px]
                "
              >
                <span className="relative z-10">Explore my work</span>

                <ArrowDownRight
                  size={17}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />
              </a>

              {/* Socials */}

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    group
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    border
                    border-white/[0.1]
                    text-[#8A94A3]
                    transition-all
                    duration-300
                    hover:border-[#4F8CFF]/60
                    hover:bg-[#4F8CFF]/10
                    hover:text-[#F5F7FA]
                  "
                >
                  <Github
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    group
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    border
                    border-white/[0.1]
                    text-[#8A94A3]
                    transition-all
                    duration-300
                    hover:border-[#4F8CFF]/60
                    hover:bg-[#4F8CFF]/10
                    hover:text-[#F5F7FA]
                  "
                >
                  <Linkedin
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="
                    group
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    border
                    border-white/[0.1]
                    text-[#8A94A3]
                    transition-all
                    duration-300
                    hover:border-[#4F8CFF]/60
                    hover:bg-[#4F8CFF]/10
                    hover:text-[#F5F7FA]
                  "
                >
                  <Mail
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT SIDE — PORTRAIT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[500px]
              lg:mx-0
              lg:ml-auto
            "
          >
            {/* Decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                -right-2
                -top-12
                hidden
                text-[90px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-white/[0.025]
                lg:block
              "
            >
              01
            </div>

            {/* Top information */}

            <div
              className="
                mb-3
                flex
                items-end
                justify-between
              "
            >
              <div>
                <span
                  className="
                    block
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#505967]
                  "
                >
                  Profile
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8993A1]
                  "
                >
                  {personalInfo.name}
                </span>
              </div>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#4F8CFF]
                "
              >
                2026
              </span>
            </div>

            {/* =================================================
                PORTRAIT FRAME
            ================================================= */}

            <div
              className="
                group
                relative
                h-[390px]
                overflow-hidden
                border
                border-white/[0.09]
                bg-[#0B1018]
                sm:h-[500px]
                lg:h-[540px]
              "
            >
              {/* Inner grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.12]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(79,140,255,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(79,140,255,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "38px 38px",
                }}
              />

              {/* Portrait light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[28%]
                  h-[330px]
                  w-[330px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#4F8CFF]/[0.12]
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:bg-[#4F8CFF]/[0.16]
                "
              />

              {/* Giant SR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[16%]
                  -translate-x-1/2
                  select-none
                  text-[130px]
                  font-black
                  tracking-[-0.09em]
                  text-white/[0.025]
                  sm:text-[170px]
                "
              >
                SR
              </div>

              {/* Corner markers */}

              <span className="absolute left-0 top-0 h-6 w-px bg-[#4F8CFF]" />

              <span className="absolute left-0 top-0 h-px w-6 bg-[#4F8CFF]" />

              <span className="absolute bottom-0 right-0 h-6 w-px bg-[#4F8CFF]" />

              <span className="absolute bottom-0 right-0 h-px w-6 bg-[#4F8CFF]" />

              {/* Profile image */}

              <motion.img
                src={profile}
                alt={personalInfo.name}
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  z-10
                  h-[92%]
                  w-auto
                  max-w-none
                  -translate-x-1/2
                  object-contain
                  object-bottom
                  drop-shadow-[0_35px_45px_rgba(0,0,0,0.5)]
                "
              />

              {/* Bottom fade */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  h-[35%]
                  bg-gradient-to-t
                  from-[#070A0F]
                  via-[#070A0F]/70
                  to-transparent
                "
              />

              {/* Bottom information */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-30
                  flex
                  items-end
                  justify-between
                  p-5
                  sm:p-6
                "
              >
                <div>
                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#667085]
                    "
                  >
                    Role
                  </span>

                  <p
                    className="
                      mt-1.5
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#F5F7FA]
                      sm:text-[13px]
                    "
                  >
                    Frontend Developer
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#667085]
                    "
                  >
                    Focus
                  </span>

                  <p
                    className="
                      mt-1.5
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#4F8CFF]
                      sm:text-[13px]
                    "
                  >
                    React + AWS
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE LOCATION
            ================================================= */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                pb-3
                sm:hidden
              "
            >
              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#5F6978]
                "
              >
                Location
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#A1AAB7]
                "
              >
                <MapPin size={11} className="text-[#4F8CFF]" />

                {personalInfo.location}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            TECHNOLOGY STRIP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="
            mt-12
            border-t
            border-white/[0.07]
            lg:mt-10
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              py-5
              sm:gap-x-8
              lg:justify-between
            "
          >
            <span
              className="
                hidden
                text-[8px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#454D59]
                lg:block
              "
            >
              Core Stack
            </span>

            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="flex items-center gap-5 sm:gap-8"
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#747E8D]
                    transition-colors
                    duration-300
                    hover:text-[#F5F7FA]
                    sm:text-[10px]
                  "
                >
                  {tech}
                </span>

                {index !== techStack.length - 1 && (
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#4F8CFF]/40
                      lg:hidden
                    "
                  />
                )}
              </div>
            ))}

            <a
              href="#about"
              aria-label="Scroll to about section"
              className="
                hidden
                h-9
                w-9
                items-center
                justify-center
                border
                border-white/[0.08]
                text-[#6E7886]
                transition-all
                duration-300
                hover:border-[#4F8CFF]/50
                hover:text-[#4F8CFF]
                lg:flex
              "
            >
              <ArrowDownRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ======================================================
          SIDE LABEL — DESKTOP
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[130px]
          left-[22px]
          hidden
          origin-left
          -rotate-90
          text-[7px]
          font-bold
          uppercase
          tracking-[0.4em]
          text-[#333B47]
          2xl:block
        "
      >
        Design · Develop · Deploy
      </div>

      {/* ======================================================
          EXTERNAL ARROW DECORATION
      ====================================================== */}

      <ArrowUpRight
        size={16}
        className="
          pointer-events-none
          absolute
          bottom-8
          right-8
          hidden
          text-[#252C36]
          2xl:block
        "
      />
    </section>
  );
};

export default Hero;