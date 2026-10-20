import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Download,
  FileText,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import resumePdf from "../assets/SANTHOSH_RAJ_R_CV.pdf";

/* ==========================================================
   RESUME HIGHLIGHTS
========================================================== */

const resumeHighlights = [
  "Frontend development with React, JavaScript and Tailwind CSS",
  "Supabase authentication, database operations and application flows",
  "Practical projects including Quiztians and HR Portal",
  "AWS cloud foundations with EC2, S3, CloudWatch and scaling concepts",
  "Internship and full-stack development training experience",
];

/* ==========================================================
   RESUME META
========================================================== */

const resumeMeta = [
  {
    label: "Focus",
    value: "Frontend + Cloud",
  },
  {
    label: "Frontend",
    value: "React",
  },
  {
    label: "Backend",
    value: "Supabase",
  },
  {
    label: "Cloud",
    value: "AWS",
  },
];

/* ==========================================================
   RESUME
========================================================== */

const Resume = () => {
  return (
    <section
      id="resume"
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
          -right-[220px]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.04]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[250px]
          bottom-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#4F8CFF]/[0.025]
          blur-[150px]
        "
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
              06 / Resume
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
              Everything in
              <span className="block text-[#4F8CFF]">
                one document.
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
                A concise overview of my technical skills, development
                experience, education, cloud learning and the projects
                I&apos;ve built.
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
                  PDF · Ready to download
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            RESUME CONTENT
        ==================================================== */}

        <div
          className="
            grid
            border-b
            border-white/[0.07]
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* ==================================================
              LEFT — DOCUMENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              border-b
              border-white/[0.07]
              py-12
              sm:py-14
              lg:border-b-0
              lg:border-r
              lg:pr-12
              lg:py-16
              xl:pr-16
            "
          >
            {/* Large decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                right-6
                top-8
                hidden
                select-none
                text-[130px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-white/[0.02]
                sm:block
              "
            >
              CV
            </div>

            {/* Document icon */}

            <div
              className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                border
                border-[#4F8CFF]/30
                bg-[#4F8CFF]/[0.06]
                text-[#4F8CFF]
                sm:h-20
                sm:w-20
              "
            >
              <FileText size={30} />

              <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-[#4F8CFF]" />

              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[#4F8CFF]" />
            </div>

            {/* Name */}

            <div className="relative mt-8">
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#505967]
                "
              >
                Curriculum Vitae
              </span>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-[-0.045em]
                  text-[#F5F7FA]
                  sm:text-4xl
                "
              >
                {personalInfo.name}
              </h3>

              <p
                className="
                  mt-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#4F8CFF]
                "
              >
                Frontend Developer · AWS Cloud
              </p>
            </div>

            {/* Description */}

            <p
              className="
                relative
                mt-7
                max-w-md
                text-sm
                leading-7
                text-[#7C8695]
                sm:text-[15px]
                sm:leading-8
              "
            >
              My resume covers frontend development, practical React
              projects, backend-connected applications, internships,
              education and my developing foundation in AWS cloud
              technologies.
            </p>

            {/* File info */}

            <div
              className="
                relative
                mt-8
                grid
                grid-cols-2
                border-l
                border-t
                border-white/[0.07]
              "
            >
              <div
                className="
                  border-b
                  border-r
                  border-white/[0.07]
                  p-4
                "
              >
                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#454E5B]
                  "
                >
                  Format
                </span>

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#D7DCE4]
                  "
                >
                  PDF
                </p>
              </div>

              <div
                className="
                  border-b
                  border-r
                  border-white/[0.07]
                  p-4
                "
              >
                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#454E5B]
                  "
                >
                  Document
                </span>

                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#D7DCE4]
                  "
                >
                  Resume
                </p>
              </div>
            </div>

            {/* Download */}

            <a
              href={resumePdf}
              download="SANTHOSH_RAJ_R_CV.pdf"
              className="
                group
                relative
                mt-7
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
                sm:min-w-[220px]
              "
            >
              <span className="flex items-center gap-3">
                <Download size={16} />

                Download Resume
              </span>

              <ArrowDown
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </a>
          </motion.div>

          {/* ==================================================
              RIGHT — HIGHLIGHTS
          ================================================== */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              py-12
              sm:py-14
              lg:pl-12
              lg:py-16
              xl:pl-16
            "
          >
            {/* Header */}

            <div>
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#4F8CFF]
                "
              >
                Resume Highlights
              </span>

              <h3
                className="
                  mt-3
                  max-w-lg
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-[-0.035em]
                  text-[#E6EAF0]
                  sm:text-3xl
                "
              >
                A quick look at what&apos;s inside.
              </h3>
            </div>

            {/* Highlights */}

            <div
              className="
                mt-8
                border-t
                border-white/[0.07]
              "
            >
              {resumeHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    grid
                    grid-cols-[35px_1fr]
                    gap-4
                    border-b
                    border-white/[0.07]
                    py-5
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.16em]
                      text-[#3F4855]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex gap-3">
                    <Check
                      size={15}
                      className="
                        mt-1
                        shrink-0
                        text-[#4F8CFF]
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[#7C8695]
                        transition-colors
                        duration-300
                        group-hover:text-[#C9D0D9]
                      "
                    >
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                RESUME META
            ================================================= */}

            <div
              className="
                mt-9
                grid
                grid-cols-2
                border-l
                border-t
                border-white/[0.07]
                sm:grid-cols-4
              "
            >
              {resumeMeta.map((item) => (
                <div
                  key={item.label}
                  className="
                    group
                    min-h-[100px]
                    border-b
                    border-r
                    border-white/[0.07]
                    p-4
                    transition-colors
                    duration-300
                    hover:bg-[#4F8CFF]/[0.025]
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#454E5B]
                    "
                  >
                    {item.label}
                  </span>

                  <p
                    className="
                      mt-6
                      text-[11px]
                      font-bold
                      text-[#D7DCE4]
                      transition-colors
                      duration-300
                      group-hover:text-[#4F8CFF]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                OPEN TO
            ================================================= */}

            <div
              className="
                relative
                mt-9
                overflow-hidden
                border
                border-[#4F8CFF]/20
                bg-[#4F8CFF]/[0.035]
                p-5
                sm:p-6
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#4F8CFF]/10
                  blur-[70px]
                "
              />

              <div className="relative">
                <div className="flex items-center gap-3">
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
                      tracking-[0.28em]
                      text-[#4F8CFF]
                    "
                  >
                    Open to opportunities
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-lg
                    font-semibold
                    leading-7
                    tracking-[-0.025em]
                    text-[#DCE1E8]
                  "
                >
                  Frontend Developer · React Developer · Entry-Level
                  Cloud / AWS Opportunities
                </p>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-xs
                    leading-6
                    text-[#667085]
                  "
                >
                  Interested in roles where I can contribute to web
                  development while continuing to grow my cloud and
                  application deployment skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            BOTTOM STRIP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            gap-3
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.27em]
              text-[#404956]
            "
          >
            Santhosh Raj R · Curriculum Vitae
          </span>

          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.27em]
              text-[#404956]
            "
          >
            Frontend · Backend Integration · Cloud Foundations
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;