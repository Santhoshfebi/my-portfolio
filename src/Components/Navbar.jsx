import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      {/* Responsive Container */}
      <div
        className="
          backdrop-blur-xl bg-white/10 dark:bg-black/20
          border border-white/20 shadow-2xl
          py-2 px-4 md:px-6 
          rounded-full flex items-center gap-3 md:gap-6
          overflow-x-auto scrollbar-hide
          max-w-sm sm:max-w-md md:max-w-2xl
        "
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              relative font-medium text-white dark:text-gray-200 
              px-3 py-2 whitespace-nowrap text-sm sm:text-base transition-all duration-300
              hover:-translate-y-1
              ${
                activeSection === item.id
                  ? "text-cyan-300"
                  : "hover:text-cyan-300"
              }
            `}
          >
            {item.label}

            {/* Active highlight */}
            {activeSection === item.id && (
              <span
                className="
                  absolute inset-0 -z-10 rounded-full bg-cyan-500/20
                  shadow-[0_0_15px_rgba(34,211,238,0.5)]
                  backdrop-blur-xl transition-all
                "
              ></span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
