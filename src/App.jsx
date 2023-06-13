import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [hover, setHover] = useState(null)

  const handleHover = (option) => {
    setHover((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <div>
      <header>
        <Navbar />
        <div
          id="about-me"
          className="h-screen flex flex-row justify-center items-center mx-20"
        >
          <img
            className="object-scale-down h-[65%] rounded-md shadow-imagenes"
            src={require("./img/foto.jpg")}
            alt="Foto personal"
          />
          <div className="flex flex-col ml-20">
            <h1 className="font-bold text-[50px] tracking-wider">
              AARÓN SÁNCHEZ
            </h1>
            <h3 className="font-medium text-[20px] tracking-wider mt-2 mb-10">
              ADMISTRADOR DE SISTEMAS INFORMÁTICOS
            </h3>
            <p className="max-w-[500px] font-sans tracking-normal">
              Estoy comenzando en el mundo de la informática, cuento con el
              título de Bachillerato científico y soy técnico superior en
              Administración de Sistemas Informáticos en Red.
              <br />
              <br />
              He experimentado en varios campos como son: la administración de
              servidores, principalmente Linux; el desarrollo web con Wordpress
              o React; y la ciberseguridad orientada al hacking ético.
            </p>
          </div>
        </div>
      </header>

      <main className="flex justify-center">
        <div
          id="proyectos"
          className="w-[95%] bg-proyectos rounded-lg shadow-imagenes py-10 mb-10"
        >
          <h1 className="text-[50px] text-center bg-blue-400 mx-10 rounded-sm">
            Proyectos
          </h1>
          <div className="flex flex-row justify-between mx-10 mt-10">
            <a
              href="https://github.com/rxfatalslash/archinstall"
              target="_blank"
              onMouseEnter={() => handleHover("option1")}
              onMouseLeave={() => handleHover("option1")}
            >
              {hover === "option1" ? (
                <div className="relative">
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm trasnition-all duration-200 ease-in-out"
                    src={require("./img/arch.png")}
                    alt="Arch Linux"
                  />
                  <p className="absolute font-bold text-[20px] top-[45%] left-[20%] transition-all duration-200 ease-in-out">
                    Automatización Arch
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/arch.png")}
                    alt="Arch Linux"
                  />
                </div>
              )}
            </a>
            <a
              href="https://rxfatalslash.github.io/iaw"
              target="_blank"
              onMouseEnter={() => handleHover("option2")}
              onMouseLeave={() => handleHover("option2")}
            >
              {hover === "option2" ? (
                <div className="relative">
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/iaw.png")}
                    alt="LAMP"
                  />
                  <p className="absolute font-bold text-[20px] top-[45%] left-[35%] transition-all duration-200 ease-in-out">
                    Trabajos IAW
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/iaw.png")}
                    alt="LAMP"
                  />
                </div>
              )}
            </a>
            <a
              href="https://github.com/rxfatalslash/debian_http"
              target="_blank"
              onMouseEnter={() => handleHover("option3")}
              onMouseLeave={() => handleHover("option3")}
            >
              {hover === "option3" ? (
                <div className="relative">
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/apache.png")}
                    alt="Logo Apache"
                  />
                  <p className="absolute font-bold text-[20px] top-[45%] left-[20%] transition-all duration-200 ease-in-out">
                    Servidor Apache en Docker
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="object-scale-down h-[200px] overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/apache.png")}
                    alt="Logo Apache"
                  />
                </div>
              )}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
