import { useEffect, useRef, useState } from "react";
import logo from "../img/rxnet.png";

const navigation = [
  { label: "About", href: "#about-me", id: "about-me" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [activeSection, setActiveSection] = useState("about-me");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleButtonRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeMenu);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClasses = (id) =>
    `rounded-md px-2 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 ${
      activeSection === id
        ? "text-teal-700 dark:text-teal-400"
        : "text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#0b0f14]/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10 lg:px-0">
        <a href="#about-me" className="flex items-center gap-3 font-bold">
          <img src={logo} alt="" className="h-10 w-10" />
          <span>Aarón Sánchez</span>
        </a>

        <div className="hidden items-center gap-5 font-medium lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={linkClasses(item.id)}
            >
              {item.label}
            </a>
          ))}
          <ThemeButton isDark={isDark} onClick={onThemeToggle} />
        </div>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500 dark:text-white lg:hidden"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {mobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        ref={menuRef}
        hidden={!mobileMenuOpen}
        className="border-t border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-[#0b0f14] lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${linkClasses(item.id)} py-3`}
            >
              {item.label}
            </a>
          ))}
          <ThemeButton
            isDark={isDark}
            onClick={() => {
              onThemeToggle();
              setMobileMenuOpen(false);
            }}
            mobile
          />
        </div>
      </div>
    </nav>
  );
};

const ThemeButton = ({ isDark, onClick, mobile = false }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    className={`rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-400 ${
      mobile ? "mt-2 w-full text-left" : ""
    }`}
  >
    <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    {mobile && <span className="ml-2">{isDark ? "Light mode" : "Dark mode"}</span>}
  </button>
);

export default Navbar;
