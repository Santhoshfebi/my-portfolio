import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Cloud,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    text: "Building responsive, accessible and reusable interfaces with React, JavaScript and Tailwind CSS.",
  },
  {
    number: "02",
    icon: Database,
    title: "Backend Integration",
    text: "Connecting applications with Supabase and MySQL for authentication, database operations, storage and application data.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "AWS Cloud",
    text: "Building foundational cloud knowledge across EC2, S3, Load Balancing, Auto Scaling and CloudWatch.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Product Development",
    text: "Turning ideas into complete web experiences with routing, dashboards, application flows and deployment.",
  },
];

const stack = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "MySQL",
  "AWS",
  "Git",
];

const About = () => {
  return (
    <section
      id="about"
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
          right-[-220px]
          top-[15%]
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
              02 / About
            </span>
          </div>

          <div
            className="
              mt-7
              grid
              gap-7
              lg:grid-cols-[1.15fr_0.85fr]
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
              Building ideas into
              <span className="block text-[#4F8CFF]">
                digital products.
              </span>
            </h2>

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-[#8993A1]
                sm:text-base
                sm:leading-8
                lg:ml-auto
              "
            >
              I&apos;m a frontend developer focused on building practical,
              responsive web applications. My work combines clean interfaces,
              application logic, backend-connected features and an expanding
              understanding of cloud infrastructure.
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            STORY
        ==================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/[0.07]
            py-12
            sm:py-16
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
            lg:py-20
          "
        >
          {/* Left label */}

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
            transition={{
              duration: 0.65,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#4F8CFF]
                "
              >
                My Journey
              </span>

              <ArrowDownRight
                size={15}
                className="text-[#4F8CFF]"
              />
            </div>

            <p
              className="
                mt-5
                max-w-[300px]
                text-xs
                leading-6
                text-[#596372]
              "
            >
              From learning the fundamentals of the web to building
              complete React applications and exploring cloud
              infrastructure.
            </p>
          </motion.div>

          {/* Story content */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                text-[clamp(1.35rem,3vw,2rem)]
                font-medium
                leading-[1.45]
                tracking-[-0.025em]
                text-[#D8DDE5]
              "
            >
              My development journey started with{" "}
              <span className="text-white">
                HTML, CSS and JavaScript
              </span>
              , then evolved into building modern applications with{" "}
              <span className="text-[#4F8CFF]">
                React
              </span>{" "}
              and connecting them to real backend services.
            </p>

            <div
              className="
                mt-8
                grid
                gap-6
                text-sm
                leading-7
                text-[#818B99]
                sm:grid-cols-2
                sm:gap-10
              "
            >
              <p>
                Working with Supabase and MySQL introduced me to
                authentication, database operations, file storage,
                protected routes and admin-focused application flows.
                These experiences helped me understand how frontend
                interfaces connect with the systems behind them.
              </p>

              <p>
                More recently, I&apos;ve been expanding my knowledge into
                AWS cloud fundamentals including EC2, S3, Load Balancing,
                Auto Scaling and CloudWatch to better understand how web
                applications can be deployed, monitored and scaled.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            CAPABILITIES
        ==================================================== */}

        <div className="py-12 sm:py-16 lg:py-20">
          <div
            className="
              mb-9
              flex
              items-end
              justify-between
              sm:mb-12
            "
          >
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
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#596372]
                "
              >
                What I work with
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
                Development capabilities
              </h3>
            </motion.div>

            <span
              className="
                hidden
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#3D4653]
                sm:block
              "
            >
              04 Focus Areas
            </span>
          </div>

          {/* ==================================================
              CAPABILITY ROWS
          ================================================== */}

          <div className="border-t border-white/[0.07]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="
                    group
                    relative
                    grid
                    gap-5
                    border-b
                    border-white/[0.07]
                    py-7
                    transition-colors
                    duration-300
                    sm:grid-cols-[60px_1fr]
                    sm:py-8
                    lg:grid-cols-[80px_70px_0.75fr_1.25fr]
                    lg:items-center
                  "
                >
                  {/* Hover background */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#4F8CFF]/0
                      transition-colors
                      duration-300
                      group-hover:bg-[#4F8CFF]/[0.025]
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                      relative
                      hidden
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      text-[#404956]
                      sm:block
                    "
                  >
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      text-[#6E7887]
                      transition-all
                      duration-300
                      group-hover:border-[#4F8CFF]/50
                      group-hover:bg-[#4F8CFF]/10
                      group-hover:text-[#4F8CFF]
                    "
                  >
                    <Icon size={18} />
                  </div>

                  {/* Title */}

                  <h4
                    className="
                      relative
                      text-lg
                      font-semibold
                      tracking-[-0.025em]
                      text-[#DCE1E8]
                      transition-colors
                      duration-300
                      group-hover:text-white
                      sm:col-start-2
                      lg:col-start-auto
                      lg:text-xl
                    "
                  >
                    {item.title}
                  </h4>

                  {/* Description */}

                  <p
                    className="
                      relative
                      max-w-xl
                      text-sm
                      leading-7
                      text-[#707A89]
                      sm:col-start-2
                      lg:col-start-auto
                    "
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            STACK STRIP
        ==================================================== */}

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
          transition={{
            duration: 0.65,
          }}
          className="
            border-y
            border-white/[0.07]
            py-5
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-4
              sm:gap-x-7
            "
          >
            <span
              className="
                mr-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#4F8CFF]
              "
            >
              Stack
            </span>

            {stack.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 sm:gap-7"
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#747E8D]
                    transition-colors
                    duration-300
                    hover:text-[#F5F7FA]
                    sm:text-[10px]
                  "
                >
                  {item}
                </span>

                {index !== stack.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#4F8CFF]/30" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;