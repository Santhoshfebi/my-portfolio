import { motion } from "framer-motion";

const SectionTitle = ({ label, title, description }) => {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
        {label}
      </p>

      <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;