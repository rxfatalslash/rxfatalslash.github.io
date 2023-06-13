import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed bg-transparent w-screen h-[100px]">
      <div className="mx-20 my-5 flex flex-row justify-between items-center">
        <a href="#" className="text-3xl">
          Portfolio
        </a>
        <div className="hidden lg:flex flex-row font-medium">
          <a
            className="mr-5 hover:font-bold transition-all duration-200 ease-in-out"
            href="#about-me"
          >
            Sobre mí
          </a>
          <a
            className="mr-5 hover:font-bold transition-all duration-200 ease-in-out"
            href="#proyectos"
          >
            Proyectos
          </a>
          <a
            className="hover:font-bold transition-all duration-200 ease-in-out"
            href="#cursos"
          >
            Cursos
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
