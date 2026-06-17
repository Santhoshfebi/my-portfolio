import { motion } from "framer-motion";
import { Cloud, Layout, Rocket, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const highlights = [
    {
      icon: Layout,
      title: "Frontend Development",
      text: "I build responsive and clean user interfaces using React, Tailwind CSS, and modern component-based development.",
    },
    {
      icon: Cloud,
      title: "AWS Cloud",
      text: "I have hands-on experience with AWS Services, goood knowledge in Cloud foundations.",
    },
    {
      icon: Rocket,
      title: "Project Building",
      text: "I enjoy turning real-world ideas into practical applications with proper routing, UI flows, dashboards, and deployment.",
    },
    {
      icon: ShieldCheck,
      title: "Clean Development",
      text: "I focus on readable code, reusable components, responsive layouts, and smooth user experiences.",
    },
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-24">
      <SectionTitle
        label="About Me"
        title="I build practical and user-friendly web applications"
        description="I am a frontend developer with hands-on experience in React, JavaScript, Tailwind CSS, Supabase, and MySQL. I enjoy building clean interfaces, authentication flows, dashboards, and responsive applications."
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          className="rounded-3xl border border-amber-400/15 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-5 text-2xl font-bold text-white">
            My development journey
          </h3>

          <p className="mb-5 leading-relaxed text-neutral-400">
            I started my development journey with HTML, CSS, JavaScript, and
            React. Over time, I expanded into backend-connected projects using
            Supabase and MySQL, where I worked with authentication, database
            operations, file uploads, protected pages, and admin dashboards.
          </p>

          <p className="leading-relaxed text-neutral-400">
            My recent projects include a bilingual quiz application, HR portal,
            movie booking website, and e-commerce cart application. These
            projects helped me improve my skills in UI design, React components,
            routing, state management, API integration, and deployment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {/* <div className="rounded-2xl border border-amber-400/15 bg-neutral-950/60 p-5">
              <p className="text-3xl font-black text-amber-400">4+</p>
              <p className="mt-1 text-sm text-neutral-400">Projects Built</p>
            </div> */}

            {/* <div className="rounded-2xl border border-amber-400/15 bg-neutral-950/60 p-5">
              <p className="text-3xl font-black text-amber-400">React</p>
              <p className="mt-1 text-sm text-neutral-400">Main Skill</p>
            </div> */}
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-amber-400/15 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-amber-400/10"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Icon size={24} />
                </div>

                <h4 className="mb-3 text-lg font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;