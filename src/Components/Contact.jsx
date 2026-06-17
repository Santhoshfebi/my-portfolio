import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";

const contactCards = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/santhosh-sam",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Santhoshfebi",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: null,
    icon: MapPin,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-6 py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          label="Contact"
          title="Let’s connect"
          description="Open to frontend developer, React developer, full stack fresher, internship, and entry-level software development opportunities."
        />

        {/* Compact Main Contact Box */}
        <motion.div
          className="mx-auto max-w-4xl rounded-[1.7rem] border border-amber-400/15 bg-neutral-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                Available for opportunities
              </div>

              <h3 className="text-2xl font-black text-white md:text-3xl">
                Have a role or project in mind?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                Feel free to reach out for Cloud Engineer roles, Frontend developer roles,
                projects, fresher openings, or collaborations.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 px-5 py-2.5 text-sm font-bold text-neutral-950 shadow-lg shadow-amber-950/40 transition hover:scale-105"
            >
              <Send size={16} />
              Send Email
            </a>
          </div>

          {/* Small Contact Cards */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              const CardContent = (
                <motion.div
                  className="group h-full rounded-2xl border border-amber-400/10 bg-neutral-950/60 p-4 transition hover:border-amber-400/35 hover:bg-amber-400/10"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                      <Icon size={18} />
                    </div>

                    {card.href && (
                      <ArrowUpRight
                        size={15}
                        className="text-neutral-500 transition group-hover:text-amber-300"
                      />
                    )}
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                    {card.label}
                  </p>

                  <p className="mt-1.5 break-words text-xs font-semibold leading-relaxed text-neutral-300">
                    {card.value}
                  </p>
                </motion.div>
              );

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {CardContent}
                </a>
              ) : (
                <div key={card.label}>{CardContent}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Compact Footer */}
        <footer className="mt-10 border-t border-amber-400/10 pt-6 flex justify-center">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} {personalInfo.name} || Built with
              React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;