import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Code2,
  Calendar,
  MapPin,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolioData";

const typeIcons = {
  Internship: BriefcaseBusiness,
  Training: GraduationCap,
  Certification: Award,
  Education: GraduationCap,
};

const getYear = (period) => {
  const match = period.match(/\d{4}/g);
  return match ? match[match.length - 1] : "";
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-neutral-950 px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="pt-10">
          <SectionTitle
            label="Experience"
            title="My professional journey"
            description="A simple timeline of my internships, training programs, certifications, and practical learning experience."
          />
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/0 via-amber-400/60 to-amber-400/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const TypeIcon = typeIcons[item.type] || Code2;
              const year = getYear(item.period);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.company}-${item.title}`}
                  className="relative grid gap-8 pl-14 md:grid-cols-2 md:pl-0"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-6 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-amber-400/35 bg-neutral-950 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.25)] md:left-1/2">
                    <TypeIcon size={17} />
                  </div>

                  {/* Left Side Card */}
                  <div className={`${isLeft ? "md:pr-12" : "hidden md:block"}`}>
                    {isLeft && (
                      <ExperienceCard
                        item={item}
                        year={year}
                        TypeIcon={TypeIcon}
                        align="right"
                      />
                    )}
                  </div>

                  {/* Right Side Card */}
                  <div className={`${!isLeft ? "md:pl-12" : "md:hidden"}`}>
                    {!isLeft && (
                      <ExperienceCard
                        item={item}
                        year={year}
                        TypeIcon={TypeIcon}
                        align="left"
                      />
                    )}

                    {/* Mobile */}
                    {isLeft && (
                      <div className="md:hidden">
                        <ExperienceCard
                          item={item}
                          year={year}
                          TypeIcon={TypeIcon}
                          align="left"
                        />
                      </div>
                    )}
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

const ExperienceCard = ({ item, year, TypeIcon, align = "left" }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`w-full rounded-[1.4rem] border border-amber-400/15 bg-neutral-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-neutral-900 ${
        align === "right" ? "md:text-right" : "text-left"
      }`}
    >
      <div
        className={`mb-3 flex flex-wrap items-center gap-3 ${
          align === "right" ? "md:justify-end" : "justify-start"
        }`}
      >
        <span className="text-2xl font-black text-amber-400">{year}</span>

        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-300">
          <TypeIcon size={13} />
          {item.type}
        </span>
      </div>

      <h3 className="text-lg font-black leading-snug text-white">
        {item.title}
      </h3>

      <p className="mt-1.5 text-sm font-bold text-amber-300">
        {item.company}
      </p>

      <div
        className={`mt-3 flex flex-wrap gap-2 text-xs text-neutral-400 ${
          align === "right" ? "md:justify-end" : "justify-start"
        }`}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/10 bg-neutral-950/60 px-3 py-1.5">
          <Calendar size={13} className="text-amber-300" />
          {item.period}
        </p>

        <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/10 bg-neutral-950/60 px-3 py-1.5">
          <MapPin size={13} className="text-amber-300" />
          {item.location}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-400">
        {item.description}
      </p>

      <div
        className={`mt-4 flex flex-wrap gap-2 ${
          align === "right" ? "md:justify-end" : "justify-start"
        }`}
      >
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-amber-400/15 bg-neutral-950/70 px-3 py-1 text-[11px] font-bold text-neutral-300 transition hover:border-amber-400/35 hover:text-amber-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Experience;