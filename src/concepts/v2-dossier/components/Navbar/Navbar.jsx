import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SECTIONS = [
  { id: "about", label: "Cover" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [visited, setVisited] = useState(() => new Set(["about"]));
  const [justConfirmed, setJustConfirmed] = useState(null);
  const confirmTimerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setVisited((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            setJustConfirmed(id);
            if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
            confirmTimerRef.current = setTimeout(() => setJustConfirmed(null), 500);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
    };
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar: all viewports up to lg */}
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm lg:hidden">
        <div className="flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <button
              onClick={() => handleNavClick("about")}
              className="truncate font-semibold text-ink"
            >
              Abhishek Patel
            </button>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href="https://github.com/patel-ab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-muted transition-colors hover:text-stamp"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-patel2000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink-muted transition-colors hover:text-stamp"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:abhishekvpatel20@gmail.com"
                aria-label="Email"
                className="text-ink-muted transition-colors hover:text-stamp"
              >
                <FaEnvelope className="h-4 w-4" />
              </a>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-small font-medium text-ink-muted underline decoration-rule underline-offset-4 hover:text-stamp"
              >
                Contact
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-ink"
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {isOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 6H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M2 11H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M2 16H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <nav id="mobile-nav" className="border-t border-rule bg-paper px-5 py-4 sm:px-8">
            <ul className="flex flex-col gap-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`flex min-h-[44px] w-full items-center text-left text-body transition-colors ${
                      activeSection === section.id ? "text-stamp" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Index rail: lg and up */}
      <nav
        aria-label="Section index"
        className="fixed left-0 top-0 z-40 hidden h-screen w-56 border-r border-rule bg-paper lg:flex lg:flex-col lg:justify-between xl2:w-64"
      >
        <div className="px-8 pt-8">
          <button
            onClick={() => handleNavClick("about")}
            className="text-left font-semibold leading-tight text-ink"
          >
            Abhishek
            <br />
            Patel
          </button>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://github.com/patel-ab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-stamp"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-patel2000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-stamp"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:abhishekvpatel20@gmail.com"
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-stamp"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
          </div>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-3 text-small font-medium text-ink-muted underline decoration-rule underline-offset-4 hover:text-stamp"
          >
            Contact
          </button>
        </div>
        <ul className="flex flex-col gap-0.5 px-8 pb-10">
          {SECTIONS.map((section, i) => {
            const isActive = activeSection === section.id;
            const isVisited = visited.has(section.id);
            const isConfirming = justConfirmed === section.id;

            return (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`group flex min-h-[44px] w-full items-center gap-3 text-left text-small transition-colors ${
                    isActive ? "text-stamp" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <span
                    className="relative flex w-7 shrink-0 items-center justify-center font-mono-id text-micro"
                    aria-hidden="true"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isActive ? "text-stamp" : isVisited ? "text-ink-muted" : "text-slate"
                      } ${isConfirming ? "scale-125" : "scale-100"}`}
                      style={{ display: "inline-block" }}
                    >
                      {isVisited && !isActive ? (
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path
                            d="M2 5.5L4.3 8L9 2.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        String(i + 1).padStart(2, "0")
                      )}
                    </span>
                  </span>
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
