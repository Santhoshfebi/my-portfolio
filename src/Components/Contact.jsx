import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

/* ==========================================================
   CONTACT LINKS
========================================================== */

const contactLinks = [
  {
    number: "01",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    number: "02",
    label: "LinkedIn",
    value: "linkedin.com/in/santhosh-sam",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    number: "03",
    label: "GitHub",
    value: "github.com/Santhoshfebi",
    href: personalInfo.github,
    icon: Github,
  },
];

/* ==========================================================
   CONTACT
========================================================== */

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#070A0F]
        px-5
        pb-8
        pt-24
        text-[#F5F7FA]
        sm:px-8
        sm:pt-28
        lg:px-12
        lg:pt-32
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
          left-1/2
          top-[30%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#4F8CFF]/[0.045]
          blur-[170px]
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
          blur-[150px]
        "
      />

      {/* Blueprint grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[65%]
          opacity-[0.1]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,140,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,140,255,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Architectural lines */}

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
              07 / Contact
            </span>
          </div>

          <div
            className="
              mt-7
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#4A5360]
              "
            >
              Final stop
            </span>

            <div
              className="
                flex
                items-center
                gap-3
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
                    opacity-40
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
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#667085]
                "
              >
                Available for opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            MAIN CLOSING MESSAGE
        ==================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/[0.07]
            py-14
            sm:py-16
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-end
            lg:gap-20
            lg:py-24
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              Let&apos;s work together
            </span>

            <h2
              className="
                mt-6
                max-w-[1000px]
                text-[clamp(3.4rem,11vw,8.5rem)]
                font-black
                leading-[0.82]
                tracking-[-0.075em]
                text-[#F5F7FA]
              "
            >
              Have something
              <span className="block text-[#4F8CFF]">
                worth building?
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-2"
          >
            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-[#8993A1]
                sm:text-base
                sm:leading-8
              "
            >
              I&apos;m open to frontend and React development
              opportunities, entry-level cloud roles, practical software
              projects and teams where I can contribute while continuing
              to grow as a developer.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="
                group
                mt-8
                flex
                w-full
                items-center
                justify-between
                bg-[#4F8CFF]
                px-5
                py-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.19em]
                text-white
                transition-all
                duration-300
                hover:bg-[#6198FF]
                hover:shadow-[0_0_45px_rgba(79,140,255,0.17)]
                sm:w-fit
                sm:min-w-[210px]
              "
            >
              <span className="flex items-center gap-3">
                <Send size={15} />

                Send an Email
              </span>

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

        {/* ====================================================
            CONTACT DETAILS
        ==================================================== */}

        <div
          className="
            grid
            border-b
            border-white/[0.07]
            lg:grid-cols-[0.7fr_1.3fr]
          "
        >
          {/* Location / intro */}

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
            className="
              border-b
              border-white/[0.07]
              py-10
              lg:border-b-0
              lg:border-r
              lg:pr-12
              lg:py-14
            "
          >
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#505967]
              "
            >
              Based in
            </span>

            <div
              className="
                mt-4
                flex
                items-center
                gap-3
              "
            >
              <MapPin
                size={18}
                className="shrink-0 text-[#4F8CFF]"
              />

              <p
                className="
                  text-xl
                  font-bold
                  tracking-[-0.03em]
                  text-[#DCE1E8]
                  sm:text-2xl
                "
              >
                {personalInfo.location}
              </p>
            </div>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#667085]
              "
            >
              The easiest way to reach me is by email. You can also
              connect with me on LinkedIn or explore my development work
              on GitHub.
            </p>
          </motion.div>

          {/* Contact links */}

          <div className="lg:pl-12">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    relative
                    grid
                    grid-cols-[35px_45px_1fr_auto]
                    items-center
                    gap-3
                    border-b
                    border-white/[0.07]
                    py-6
                    transition-colors
                    duration-300
                    last:border-b-0
                    hover:bg-[#4F8CFF]/[0.02]
                    sm:grid-cols-[45px_50px_1fr_auto]
                    sm:gap-5
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-[#3F4855]
                    "
                  >
                    {item.number}
                  </span>

                  {/* Icon */}

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
                      transition-all
                      duration-300
                      group-hover:border-[#4F8CFF]/50
                      group-hover:bg-[#4F8CFF]/10
                      group-hover:text-[#4F8CFF]
                    "
                  >
                    <Icon size={16} />
                  </div>

                  {/* Text */}

                  <div className="min-w-0">
                    <span
                      className="
                        block
                        text-[7px]
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
                        mt-1.5
                        truncate
                        text-[11px]
                        font-semibold
                        text-[#C9D0D9]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-sm
                      "
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* Arrow */}

                  <ArrowUpRight
                    size={16}
                    className="
                      text-[#404956]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#4F8CFF]
                    "
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            LARGE EMAIL
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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            border-b
            border-white/[0.07]
            py-12
            sm:py-14
          "
        >
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#505967]
            "
          >
            Direct contact
          </span>

          <a
            href={`mailto:${personalInfo.email}`}
            className="
              group
              mt-5
              flex
              items-center
              justify-between
              gap-5
            "
          >
            <span
              className="
                break-all
                text-[clamp(1.35rem,5vw,4rem)]
                font-bold
                leading-tight
                tracking-[-0.05em]
                text-[#DCE1E8]
                transition-colors
                duration-300
                group-hover:text-[#4F8CFF]
              "
            >
              {personalInfo.email}
            </span>

            <ArrowUpRight
              className="
                hidden
                shrink-0
                text-[#4F8CFF]
                transition-transform
                duration-300
                group-hover:-translate-y-2
                group-hover:translate-x-2
                sm:block
              "
              size={32}
              strokeWidth={1.5}
            />
          </a>
        </motion.div>

        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer
          className="
            flex
            flex-col
            gap-6
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#4A5360]
              "
            >
              © {currentYear} {personalInfo.name}
            </p>

            <p
              className="
                mt-2
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#343C47]
              "
            >
              Built with React · Tailwind CSS · Framer Motion
            </p>
          </div>

          {/* Right */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
              sm:justify-end
            "
          >
            <span
              className="
                hidden
                text-[7px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#343C47]
                md:block
              "
            >
              Design · Develop · Deploy
            </span>

            <a
              href="#home"
              aria-label="Back to top"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/[0.09]
                text-[#667085]
                transition-all
                duration-300
                hover:border-[#4F8CFF]
                hover:bg-[#4F8CFF]
                hover:text-white
              "
            >
              <ArrowUp
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;