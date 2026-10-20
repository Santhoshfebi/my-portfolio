import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ==========================================================
     ACTIVE SECTION
  ========================================================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ==========================================================
     SCROLL STATE
  ========================================================== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================== */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ========================================================
          DESKTOP / MOBILE NAVBAR
      ======================================================== */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          transition-all
          duration-500
          ${
            scrolled
              ? "border-white/[0.08] bg-[#070A0F]/90 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* ====================================================
              BRAND
          ==================================================== */}
          <motion.a
            href="#home"
            onClick={closeMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            {/* Logo */}
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 border border-[#4F8CFF]/40 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#4F8CFF]" />

              <span className="relative z-10 text-[11px] font-black tracking-tight text-[#F5F7FA]">
                SR
              </span>
            </div>

            {/* Name */}
            <div className="hidden flex-col sm:flex">
              <span className="text-[14px] font-bold leading-none tracking-[-0.02em] text-[#F5F7FA]">
                SANTHOSH RAJ
              </span>

              <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.32em] text-[#667085]">
                Software Developer
              </span>
            </div>
          </motion.a>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + index * 0.04,
                    }}
                    className={`
                      group
                      relative
                      flex
                      h-[72px]
                      items-center
                      px-3
                      lg:px-4
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-[#F5F7FA]"
                          : "text-[#7E8796] hover:text-[#F5F7FA]"
                      }
                    `}
                  >
                    <span className="relative">
                      {link.label}

                      {isActive && (
                        <motion.span
                          layoutId="active-nav-dot"
                          className="absolute -right-2.5 top-0 h-1 w-1 rounded-full bg-[#4F8CFF] shadow-[0_0_10px_rgba(79,140,255,0.9)]"
                        />
                      )}
                    </span>

                    {/* Bottom active line */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-line"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 32,
                        }}
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#4F8CFF] lg:left-4 lg:right-4"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Separator */}
            <div className="mx-4 h-5 w-px bg-white/[0.1]" />

            {/* Contact CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="
                group
                flex
                items-center
                gap-2
                border
                border-[#4F8CFF]/40
                px-4
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#F5F7FA]
                transition-all
                duration-300
                hover:border-[#4F8CFF]
                hover:bg-[#4F8CFF]
                hover:text-white
                hover:shadow-[0_0_35px_rgba(79,140,255,0.18)]
              "
            >
              Let's Talk

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </nav>

          {/* ====================================================
              MOBILE MENU BUTTON
          ==================================================== */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/[0.12]
              text-[#F5F7FA]
              transition-all
              duration-300
              hover:border-[#4F8CFF]/60
              hover:bg-[#4F8CFF]/10
              md:hidden
            "
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION OVERLAY
      ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#070A0F] md:hidden"
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(79,140,255,0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(79,140,255,0.12) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Blue ambient light */}
            <div className="pointer-events-none absolute -right-32 top-20 h-[320px] w-[320px] rounded-full bg-[#4F8CFF]/[0.08] blur-[100px]" />

            <div className="relative flex min-h-full flex-col px-5 pb-8 pt-[100px] sm:px-8">
              {/* Small heading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-7 bg-[#4F8CFF]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#667085]">
                  Navigation
                </span>
              </motion.div>

              {/* Links */}
              <nav className="flex flex-1 flex-col">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;

                  return (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 + index * 0.055,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`
                        group
                        flex
                        items-center
                        border-b
                        border-white/[0.07]
                        py-4
                        transition-colors
                        ${
                          isActive
                            ? "text-[#F5F7FA]"
                            : "text-[#6F7887] hover:text-[#F5F7FA]"
                        }
                      `}
                    >
                      {/* Number */}
                      <span
                        className={`
                          mr-5
                          w-6
                          text-[9px]
                          font-bold
                          tracking-wider
                          ${
                            isActive
                              ? "text-[#4F8CFF]"
                              : "text-[#3E4653]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Label */}
                      <span className="text-[clamp(1.5rem,7vw,2.3rem)] font-semibold tracking-[-0.04em]">
                        {link.label}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="ml-auto h-2 w-2 rounded-full bg-[#4F8CFF] shadow-[0_0_15px_rgba(79,140,255,0.9)]"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile bottom CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    bg-[#4F8CFF]
                    px-5
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                  "
                >
                  Start a conversation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#4B5563]">
                    Santhosh Raj
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#4B5563]">
                    © {new Date().getFullYear()}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;