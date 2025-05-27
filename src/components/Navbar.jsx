import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ onButtonClick }) => {
  const [color, setColor] = useState("#cff0ff");
  const [active, setActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = color === "#cff0ff";

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const changeNavbarStyle = () => {
    const dark = isLight ? "#636363" : "#cff0ff";
    setColor(dark);
    onButtonClick();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const scrollTracker = () => {
      const sections = ["about-me", "proyectos", "contacto", "mode"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (
          section &&
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().top <= window.innerHeight
        ) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", scrollTracker);
    return () => window.removeEventListener("scroll", scrollTracker);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed z-50 w-full h-[80px] shadow-navbar flex justify-between items-center px-6 lg:px-20 transition-colors duration-300 ${
        isLight ? "bg-[#cff0ff] text-black" : "bg-[#636363] text-white"
      }`}
    >
      <a href="#" className="flex items-center text-xl">
        <img
          src={require("../img/rxnet.png")}
          alt="Logo"
          className="w-10 h-10 mr-2"
        />
        Portfolio
      </a>

      <button
        aria-label="Abrir menú"
        className="lg:hidden"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          // Icono de cerrar
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18" stroke={isLight ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" />
            <path d="M6 18L18 6" stroke={isLight ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Icono de hamburguesa
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke={isLight ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke={isLight ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke={isLight ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div className="hidden lg:flex gap-6 items-center font-medium">
        <a
          href="#about-me"
          className={`${
            active === "about-me" ? "text-blue-800 font-bold" : "hover:text-blue-400"
          } hover:font-bold transition-all duration-200`}
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          className={`${
            active === "proyectos" ? "text-blue-800 font-bold" : "hover:text-blue-400"
          } hover:font-bold transition-all duration-200`}
        >
          Proyectos
        </a>
        <a
          href="#contacto"
          className={`${
            active === "contacto" ? "text-blue-800 font-bold" : "hover:text-blue-400"
          } hover:font-bold transition-all duration-200`}
        >
          Contacto
        </a>
        <button
          aria-label="Cambiar tema"
          onClick={changeNavbarStyle}
          className="hover:text-gray-600 hover:font-bold transition-all duration-200"
        >
          {isLight ? (
            <svg
              className="fill-black hover:fill-blue-400 w-[15px] hover:w-[18px] transition-all duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <g transform="scale(2.81)">
                <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" strokeLinecap="round" />
              </g>
            </svg>
          ) : (
            <svg
              className="fill-white stroke-white hover:fill-blue-400 w-[20px] hover:w-[23px] hover:stroke-blue-400 transition-all duration-200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g strokeWidth="1.5" strokeMiterlimit="10">
                <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" strokeLinecap="round" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M12 19v4M12 1v4" strokeLinecap="round" />
              </g>
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        ref={menuRef}
        className={`${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        } lg:hidden origin-top absolute top-full left-0 w-full ${
          isLight ? "bg-[#cff0ff] text-black" : "bg-[#303030] text-white"
        } text-center z-40 transition-all duration-300 ease-in-out backdrop-blur-md shadow-md rounded-b-xl px-6 py-4 space-y-3`}
      >
        <a
          href="#about-me"
          onClick={() => setMobileMenuOpen(false)}
          className="block py-2 text-lg hover:text-blue-400 transition-colors duration-200"
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          onClick={() => setMobileMenuOpen(false)}
          className="block py-2 text-lg hover:text-blue-400 transition-colors duration-200"
        >
          Proyectos
        </a>
        <a
          href="#contacto"
          onClick={() => setMobileMenuOpen(false)}
          className="block py-2 text-lg hover:text-blue-400 transition-colors duration-200"
        >
          Contacto
        </a>
        <button
          onClick={() => {
            changeNavbarStyle();
            toggleMobileMenu(false);
          }}
          className="flex items-center justify-center w-full gap-2 py-2 text-lg hover:text-blue-400 transition-colors duration-200"
        >
          {isLight ? (
            <>
              <svg
                className="fill-black w-[15px] stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <g transform="scale(2.81)">
                  <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" strokeLinecap="round" />
                </g>
              </svg>
              Modo oscuro
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5 fill-white stroke-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g strokeWidth="1.5" strokeMiterlimit="10">
                  <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" strokeLinecap="round" />
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M12 19v4M12 1v4" strokeLinecap="round" />
                </g>
              </svg>
              Modo claro
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;