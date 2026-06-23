import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Database,
  Cloud,
  MapPin,
  Server,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import profile from "../assets/Profile.png";
import { personalInfo } from "../data/portfolioData";

const techStack = [
  { icon: Code2, label: "React" },
  { icon: Code2, label: "JavaScript" },
  { icon: Code2, label: "Tailwind CSS" },
  { icon: Database, label: "Supabase" },
  { icon: Server, label: "AWS EC2" },
  { icon: Cloud, label: "AWS S3" },
  { icon: Cpu, label: "CloudWatch" },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "React, responsive UI, Tailwind CSS, reusable components",
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    text: "EC2, S3, Load Balancer, Auto Scaling, CloudWatch basics",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 px-6 pb-16 pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(202,138,4,0.12),transparent_35%)]" />
      <div className="absolute left-10 top-20 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-700/10 blur-3xl" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#fbbf24_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left Content */}
          <motion.div
            className="order-2 text-center lg:order-1 lg:text-left"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <Sparkles size={16} />
              Frontend Developer & AWS Cloud Engineer
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="mt-5 max-w-3xl text-xl font-bold leading-relaxed text-neutral-200 md:text-2xl lg:mx-0">
              Frontend Developer focused on React apps and AWS cloud deployment
              fundamentals.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg lg:mx-0">
              I build clean, responsive, and user-friendly web applications
              using React, JavaScript, Tailwind CSS, and Supabase. I am also
              strengthening my AWS cloud skills with EC2, S3, Load Balancing,
              Auto Scaling, and CloudWatch to understand how applications are
              hosted, monitored, and scaled.
            </p>

            {/* Focus Cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-amber-400/15 bg-white/5 p-4 backdrop-blur-xl transition hover:border-amber-400/35 hover:bg-amber-400/10"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                        <Icon size={20} />
                      </div>

                      <h3 className="font-black text-white">{item.title}</h3>
                    </div>

                    <p className="text-sm leading-relaxed text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location / Availability */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                Available for opportunities
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-300">
                <MapPin size={15} className="text-amber-300" />
                {personalInfo.location}
              </span>
            </div>

            {/* CTA Buttons */}
            {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 px-6 py-3 font-bold text-neutral-950 shadow-lg shadow-amber-950/40 transition hover:scale-105"
              >
                View Projects
                <ArrowDown size={18} />
              </a>

              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div> */}

            {/* Social Icons */}
            <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/20 bg-white/5 text-neutral-300 transition hover:bg-amber-400 hover:text-neutral-950"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/20 bg-white/5 text-neutral-300 transition hover:bg-amber-400 hover:text-neutral-950"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/20 bg-white/5 text-neutral-300 transition hover:bg-amber-400 hover:text-neutral-950"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Portrait Section */}
          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="relative flex w-[90%] sm:w-full max-w-[430px] justify-center mb-8 lg:mb-20">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-amber-400/20 blur-3xl" />

              {/* Profile Card */}
              <div className=" relative h-[300px] sm:h-[400px] lg:h-[430px] w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-neutral-900/90 to-neutral-950 shadow-2xl shadow-black/50 backdrop-blur-xl">
                {/* Inner Glow */}
                <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

                {/* Gold Ring */}
                <div className="absolute left-1/2 top-14 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-amber-400/25" />

                {/* Profile Image */}
                <motion.img
                  src={profile}
                  alt={personalInfo.name}
                  className="absolute bottom-0 left-1/2 z-20 h-[320px] sm:h-[380px] lg:h-[430px] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_35px_45px_rgba(0,0,0,0.6)]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 z-10 h-36 bg-gradient-to-t from-neutral-950/90 to-transparent" />

                {/* Bottom Label */}
                <div className="absolute bottom-1 sm:bottom-3 lg:bottom-5 left-5 right-5 z-30 h-[65px] sm:h-[80px] lg:h-[80px] rounded-2xl border border-amber-400/20 bg-neutral-950/80 px-5 py-3 text-center backdrop-blur-xl">
                  <p className="text-xs sm:text-sm lg:text-sm  text-neutral-400">
                    Frontend Developer / AWS Cloud Engineer
                  </p>
                  <p className="text-xs sm:text-lg lg:text-lg font-black text-amber-300">
                    {personalInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.label}
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-neutral-900/70 px-4 py-2 text-sm font-semibold text-neutral-300 backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
              >
                <Icon size={15} className="text-amber-300" />
                {tech.label}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
