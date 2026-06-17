import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";
import resumePdf from "../assets/SANTHOSH_RAJ_R_CV.pdf";

const resumeHighlights = [
  "Learnings from AWS Cloud Services and Projects",
  "Hands-on projects using Supabase authentication and database features",
  "Experience with Git, GitHub, Vercel, MySQL, and basic AWS services",
  "Built practical projects like Quiztians, HR Portal, and Movie Booking App",
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-neutral-900/40 px-6 py-24"
    >
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-yellow-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="Resume"
          title="Download my resume"
          description="A quick overview of my technical skills, internships, certifications, and projects."
        />

        <motion.div
          className="mx-auto grid max-w-5xl gap-6 rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-7 backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-between rounded-[1.5rem] border border-amber-400/10 bg-neutral-950/70 p-6">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                <FileText size={28} />
              </div>

              <h3 className="text-2xl font-black text-white">
                {personalInfo.name}
              </h3>

              <p className="mt-2 font-semibold text-amber-300">
                {personalInfo.role}
              </p>

              <p className="mt-4 leading-relaxed text-neutral-400">
                Resume focused on AWS cloud Services, Cloud Engineer, frontend
                development, React projects, Supabase-based applications,
                internships, Educations and AWS cloud learning.
              </p>
            </div>

            <a
              href={resumePdf}
              download="SANTHOSH_RAJ_R_CV.pdf"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 px-6 py-3 font-bold text-neutral-950 shadow-lg shadow-amber-950/40 transition hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-amber-400/10 bg-neutral-950/50 p-6">
            <h4 className="mb-5 text-xl font-black text-white">
              Resume Highlights
            </h4>

            <div className="space-y-4">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-amber-300"
                    size={20}
                  />
                  <p className="leading-relaxed text-neutral-400">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-400/10 bg-amber-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Open To
              </p>
              <p className="mt-3 text-lg font-bold text-white">
                Cloud Engineer · DevOps · Frontend Developer · AWS Fresher
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
