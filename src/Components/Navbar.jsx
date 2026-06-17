import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-amber-400/15 bg-neutral-950/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <a href="#home" className="text-lg font-black tracking-wide">
          <span className="text-white">Santhosh</span>
          <span className="text-amber-400"> Raj</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeSection === link.id
                  ? "bg-amber-400 text-neutral-950"
                  : "text-neutral-300 hover:bg-amber-400/10 hover:text-amber-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-sm rounded-3xl border border-amber-400/15 bg-neutral-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? "bg-amber-400 text-neutral-950"
                    : "text-neutral-300 hover:bg-amber-400/10 hover:text-amber-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;