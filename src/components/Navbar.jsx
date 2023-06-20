import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const scrollTracker = () => {
      const sections = [
        "about-me",
        "proyectos",
        "contacto",
      ]

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
    }

    window.addEventListener("scroll", scrollTracker);
    return () => {
      window.removeEventListener("scroll", scrollTracker);
    };
  }, [])

  return (
    <nav className="fixed flex flex-row justify-center lg:justify-between px-20 items-center bg-containers shadow-navbar w-screen h-[80px] z-50">
      <a href="#" className="text-3xl flex flex-row items-center">
        <img className='w-[30px] h-[30px]' src={require('../img/d3xnet.png')} alt="Logo" />
        Portfolio
      </a>
      <div className="hidden lg:flex flex-row font-medium">
        <a
          className={`${
            active === "about-me" ? "text-blue-800 font-bold" : "hover:text-gray-600"
          } mr-5 hover:font-bold transition-all duration-200 ease-in-out`}
          href="#about-me"
        >
          Sobre mí
        </a>
        <a
          className={`${
            active === "proyectos" ? "text-blue-800 font-bold" : "hover:text-gray-600"
          } mr-5 hover:font-bold transition-all duration-200 ease-in-out`}
          href="#proyectos"
        >
          Proyectos
        </a>
        <a
          className={`${
            active === "contacto" ? "text-blue-800 font-bold" : "hover:text-gray-600"
          } hover:font-bold transition-all duration-200 ease-in-out`}
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default Navbar
