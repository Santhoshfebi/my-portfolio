import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-neutral-900/40 px-6 py-24"
    >
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="Projects"
          title="Selected projects and practical work"
          description="Projects that showcase my ability to build responsive interfaces, authentication flows, dashboards, database-connected applications, and deployment-ready web apps."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition ${
                project.featured
                  ? "border-amber-400/30 bg-amber-400/[0.06] hover:border-amber-400/50"
                  : "border-amber-400/15 bg-white/[0.04] hover:border-amber-400/35 hover:bg-white/[0.06]"
              }`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl transition group-hover:bg-amber-400/20" />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <Layers3 size={24} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-black text-white">
                          {project.title}
                        </h3>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                            <Star size={13} />
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm font-semibold text-amber-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-amber-400/15 bg-neutral-950/70 px-3 py-1.5 text-xs font-bold text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
                  >
                    <Github size={17} />
                    View Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-600 px-5 py-2.5 text-sm font-bold text-neutral-950 shadow-lg shadow-amber-950/40 transition hover:scale-105"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;