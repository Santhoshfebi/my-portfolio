import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Award,
  BriefcaseBusiness,
  Calendar,
  Code2,
  Eye,
  GraduationCap,
  MapPin,
  X,
} from "lucide-react";

import { experiences } from "../data/portfolioData";
import { certificates } from "../data/certificates";

/* ==========================================================
   EXPERIENCE TYPE CONFIG
========================================================== */

const typeConfig = {
  Internship: {
    icon: BriefcaseBusiness,
    label: "Professional Experience",
  },

  Training: {
    icon: Code2,
    label: "Professional Training",
  },

  Certification: {
    icon: Award,
    label: "Certification",
  },

  Education: {
    icon: GraduationCap,
    label: "Education",
  },
};

/* ==========================================================
   EXPERIENCE
========================================================== */

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  /* ========================================================
     CLOSE MODAL WITH ESC
  ======================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ========================================================
     LOCK BODY WHEN MODAL IS OPEN
  ======================================================== */

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        id="experience"
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
        {/* ====================================================
            BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[250px]
            top-[15%]
            h-[500px]
            w-[500px]
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

        {/* Architectural Lines */}

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
          {/* ==================================================
              SECTION HEADER
          ================================================== */}

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
                05 / Experience
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
                Learning through
                <span className="block text-[#4F8CFF]">
                  experience.
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
                  A timeline of my internships, technical training,
                  education and cloud learning — each step contributing
                  to how I approach building software today.
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
                    Career / Education / Learning
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              TIMELINE HEADER
          ================================================== */}

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
              duration: 0.6,
            }}
            className="
              flex
              items-end
              justify-between
              border-b
              border-white/[0.07]
              py-8
              sm:py-10
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
                Timeline
              </span>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  tracking-[-0.035em]
                  text-[#F5F7FA]
                  sm:text-3xl
                "
              >
                My journey so far
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
              {String(experiences.length).padStart(2, "0")} Entries
            </span>
          </motion.div>

          {/* ==================================================
              EXPERIENCE ITEMS
          ================================================== */}

          <div className="relative">
            {experiences.map((item, index) => {
              const config =
                typeConfig[item.type] || {
                  icon: Code2,
                  label: item.type,
                };

              const TypeIcon = config.icon;

              return (
                <ExperienceItem
                  key={`${item.company}-${item.title}`}
                  item={item}
                  index={index}
                  TypeIcon={TypeIcon}
                  typeLabel={config.label}
                  isLast={index === experiences.length - 1}
                  onCertificateClick={setSelectedCertificate}
                />
              );
            })}
          </div>

          {/* ==================================================
              END MARKER
          ================================================== */}

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
              items-center
              gap-4
              border-b
              border-white/[0.07]
              py-8
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#4F8CFF]" />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#505967]
              "
            >
              Still learning. Still building.
            </span>

            <div className="h-px flex-1 bg-white/[0.05]" />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CERTIFICATE MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificateName={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

/* ==========================================================
   EXPERIENCE ITEM
========================================================== */

const ExperienceItem = ({
  item,
  index,
  TypeIcon,
  typeLabel,
  isLast,
  onCertificateClick,
}) => {
  const number = String(index + 1).padStart(2, "0");

  const hasCertificate =
    item.type === "Certification" &&
    Boolean(certificates[item.title]);

  return (
    <motion.article
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
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        grid
        border-b
        border-white/[0.07]
        py-9
        sm:py-11
        lg:grid-cols-[110px_0.75fr_1.25fr]
        lg:gap-10
        lg:py-14
      "
    >
      {/* ====================================================
          HOVER BACKGROUND
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#4F8CFF]/0
          transition-colors
          duration-500
          group-hover:bg-[#4F8CFF]/[0.018]
        "
      />

      {/* ====================================================
          NUMBER / TIMELINE
      ==================================================== */}

      <div
        className="
          relative
          mb-6
          flex
          items-center
          lg:mb-0
          lg:block
        "
      >
        <span
          className="
            relative
            z-10
            flex
            h-11
            w-11
            items-center
            justify-center
            border
            border-white/[0.08]
            bg-[#070A0F]
            text-[9px]
            font-bold
            tracking-[0.15em]
            text-[#4F8CFF]
            transition-all
            duration-300
            group-hover:border-[#4F8CFF]/50
            group-hover:bg-[#4F8CFF]/10
          "
        >
          {number}
        </span>

        {!isLast && (
          <div
            className="
              absolute
              left-[21px]
              top-11
              hidden
              h-[calc(100%+56px)]
              w-px
              bg-white/[0.06]
              lg:block
            "
          />
        )}

        <div
          className="
            ml-4
            h-px
            flex-1
            bg-white/[0.06]
            lg:hidden
          "
        />
      </div>

      {/* ====================================================
          ROLE / COMPANY
      ==================================================== */}

      <div className="relative">
        {/* Type */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-white/[0.08]
              text-[#697383]
              transition-all
              duration-300
              group-hover:border-[#4F8CFF]/40
              group-hover:text-[#4F8CFF]
            "
          >
            <TypeIcon size={15} />
          </div>

          <div>
            <span
              className="
                block
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#4F8CFF]
              "
            >
              {item.type}
            </span>

            <span
              className="
                mt-1
                block
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#454E5B]
              "
            >
              {typeLabel}
            </span>
          </div>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            max-w-md
            text-[clamp(1.45rem,3vw,2.2rem)]
            font-bold
            leading-[1.1]
            tracking-[-0.04em]
            text-[#E6EAF0]
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {item.title}
        </h3>

        {/* Company */}

        <p
          className="
            mt-3
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#4F8CFF]
          "
        >
          {item.company}
        </p>

        {/* Meta */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-x-5
            gap-y-3
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#667085]
            "
          >
            <Calendar
              size={12}
              className="text-[#4F8CFF]"
            />

            {item.period}
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#667085]
            "
          >
            <MapPin
              size={12}
              className="text-[#4F8CFF]"
            />

            {item.location}
          </span>
        </div>
      </div>

      {/* ====================================================
          DESCRIPTION / SKILLS
      ==================================================== */}

      <div
        className="
          relative
          mt-8
          lg:mt-0
        "
      >
        <p
          className="
            max-w-2xl
            text-sm
            leading-7
            text-[#7C8695]
            sm:text-[15px]
            sm:leading-8
          "
        >
          {item.description}
        </p>

        {/* Skills */}

        {item.skills?.length > 0 && (
          <div className="mt-6">
            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.27em]
                text-[#454E5B]
              "
            >
              Technologies / Skills
            </span>

            <div
              className="
                mt-3
                flex
                flex-wrap
                gap-2
              "
            >
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    border
                    border-white/[0.07]
                    px-3
                    py-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#747E8D]
                    transition-all
                    duration-300
                    hover:border-[#4F8CFF]/35
                    hover:text-[#DCE1E8]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Certificate */}

        {hasCertificate && (
          <button
            type="button"
            onClick={() =>
              onCertificateClick(item.title)
            }
            className="
              group/certificate
              mt-7
              inline-flex
              items-center
              gap-3
              border
              border-[#4F8CFF]/30
              px-4
              py-3
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#DCE1E8]
              transition-all
              duration-300
              hover:border-[#4F8CFF]
              hover:bg-[#4F8CFF]
              hover:text-white
            "
          >
            <Eye size={14} />

            View Certificate

            <span
              className="
                ml-1
                text-[#4F8CFF]
                transition-colors
                group-hover/certificate:text-white
              "
            >
              ↗
            </span>
          </button>
        )}
      </div>
    </motion.article>
  );
};

/* ==========================================================
   CERTIFICATE MODAL
========================================================== */

const CertificateModal = ({
  certificateName,
  onClose,
}) => {
  const certificateImage =
    certificates[certificateName];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-[#030507]/95
        p-4
        backdrop-blur-xl
        sm:p-6
      "
    >
      {/* Background grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,140,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,140,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          flex
          max-h-[92vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          border
          border-white/[0.1]
          bg-[#090D13]
          shadow-[0_30px_100px_rgba(0,0,0,0.65)]
        "
      >
        {/* ==================================================
            MODAL HEADER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            px-4
            py-4
            sm:px-6
            sm:py-5
          "
        >
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-[#4F8CFF]" />

              <span
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#4F8CFF]
                "
              >
                Certification
              </span>
            </div>

            <h3
              className="
                mt-2
                truncate
                text-sm
                font-bold
                tracking-[-0.02em]
                text-[#F5F7FA]
                sm:text-lg
              "
            >
              {certificateName}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.1]
              text-[#8993A1]
              transition-all
              duration-300
              hover:border-[#4F8CFF]/60
              hover:bg-[#4F8CFF]/10
              hover:text-white
            "
          >
            <X size={17} />
          </button>
        </div>

        {/* ==================================================
            CERTIFICATE VIEWER
        ================================================== */}

        <div
          className="
            min-h-0
            flex-1
            overflow-auto
            bg-[#05080C]
            p-3
            sm:p-6
          "
        >
          <div
            className="
              relative
              mx-auto
              flex
              min-h-full
              items-center
              justify-center
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#4F8CFF]/[0.06]
                blur-[100px]
              "
            />

            <img
              src={certificateImage}
              alt={`${certificateName} certificate`}
              className="
                relative
                z-10
                block
                max-h-[72vh]
                max-w-full
                object-contain
                shadow-[0_25px_70px_rgba(0,0,0,0.55)]
              "
            />
          </div>
        </div>

        {/* ==================================================
            MODAL FOOTER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-white/[0.08]
            px-4
            py-3
            sm:px-6
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#48515E]
            "
          >
            Certificate Preview
          </span>

          <span
            className="
              hidden
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#48515E]
              sm:block
            "
          >
            ESC to close
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;