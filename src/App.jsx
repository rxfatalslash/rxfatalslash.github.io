import React, { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [hover, setHover] = useState("about-me")

  const handleHover = (option) => {
    setHover((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <div>
      <header>
        <Navbar />
        <div
          id="about-me"
          className="lg:h-screen flex flex-col lg:flex-row justify-center items-center mx-20 mb-20 lg:mb-0"
        >
          <img
            className="object-scale-down h-[65%] rounded-md shadow-imagenes"
            src={require("./img/foto.jpg")}
            alt="Foto personal"
          />
          <div className="flex flex-col mt-5 lg:mt-0 lg:ml-20">
            <h1 className="font-bold text-[20px] lg:text-[50px] tracking-wider">
              AARÓN SÁNCHEZ
            </h1>
            <h3 className="font-medium lg:text-[20px] tracking-wider mt-2 mb-10">
              ADMINISTRADOR DE SISTEMAS
            </h3>
            <p className="max-w-[500px] font-sans text-disabled tracking-normal">
              Mi nombre es Aarón Sánchez, soy administrador de sistemas y redes,
              con conocimientos de Windows y Linux. Además, poseo conocimiento
              sobre desarrollo web.
              <br />
              <br />
              Estoy interesado en la ciberseguridad y actualmente estoy
              investigando el tema por mi cuenta.
            </p>
            <div className="mt-5">
              <h1 className="lg:text-[20px] font-rising-sun font-bold mb-2">
                Windows
              </h1>
              <div className="w-full h-6 bg-blue-700 rounded-full">
                <div className="w-[95%] h-6 bg-blue-400 rounded-full text-white px-2">
                  95%
                </div>
              </div>
              <h1 className="lg:text-[20px] font-rising-sun font-bold my-2">
                Linux
              </h1>
              <div className="w-full h-6 bg-blue-700 rounded-full">
                <div className="w-[70%] h-6 bg-blue-400 rounded-full text-white px-2">
                  70%
                </div>
              </div>
              <h1 className="lg:text-[20px] font-rising-sun font-bold mt-2">
                Desarrollo web
              </h1>
              <div className="w-full h-6 bg-blue-700 rounded-full">
                <div className="w-[60%] h-6 bg-blue-400 rounded-full text-white px-2">
                  60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex justify-center">
        <div
          id="proyectos"
          className="w-[95%] bg-containers rounded-lg shadow-imagenes py-10 mb-10"
        >
          <h1 className="text-[50px] text-center font-rising-sun font-semibold tracking-normal mx-10 rounded-sm">
            Proyectos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 mx-5 xl:mx-0 px-10">
            <a
              href="https://github.com/rxfatalslash/archinstall"
              target="_blank"
              onMouseEnter={() => handleHover("option1")}
              onMouseLeave={() => handleHover("option1")}
            >
              {hover === "option1" ? (
                <div className="relative">
                  <img
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm trasnition-all duration-200 ease-in-out"
                    src={require("./img/arch.png")}
                    alt="Arch Linux"
                  />
                  <p className="absolute bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[20px] top-[45%] left-[30%] transition-all duration-200 ease-in-out">
                    Automatización Arch
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
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
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/iaw.png")}
                    alt="LAMP"
                  />
                  <p className="absolute bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[20px] top-[45%] left-[35%] transition-all duration-200 ease-in-out">
                    Trabajos IAW
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm shadow-imagenes transition-all duration-200 ease-in-out"
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
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/apache.png")}
                    alt="Logo Apache"
                  />
                  <p className="absolute bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[20px] top-[45%] left-[20%] transition-all duration-200 ease-in-out">
                    Servidor Apache en Docker
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/apache.png")}
                    alt="Logo Apache"
                  />
                </div>
              )}
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-5 xl:mx-0 px-10">
            <a
              href="https://rxfatalslash.github.io/calculadoraWeb"
              target="_blank"
              onMouseEnter={() => handleHover("option4")}
              onMouseLeave={() => handleHover("option4")}
            >
              {hover === "option4" ? (
                <div className="relative">
                  <img
                    className="lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm trasnition-all duration-200 ease-in-out"
                    src={require("./img/calculadora.jpg")}
                    alt="Calculadora"
                  />
                  <p className="absolute bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[20px] top-[45%] left-[35%] transition-all duration-200 ease-in-out">
                    Calculadora web
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/calculadora.jpg")}
                    alt="Calculadora"
                  />
                </div>
              )}
            </a>
            <a
              href="https://rxfatalslash.github.io/weatherApp"
              target="_blank"
              onMouseEnter={() => handleHover("option5")}
              onMouseLeave={() => handleHover("option5")}
            >
              {hover === "option5" ? (
                <div className="relative">
                  <img
                    className="lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm trasnition-all duration-200 ease-in-out"
                    src={require("./img/weather.png")}
                    alt="Tiempo"
                  />
                  <p className="absolute bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[20px] top-[45%] left-[35%] transition-all duration-200 ease-in-out">
                    Aplicación de tiempo
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/weather.png")}
                    alt="Tiempo"
                  />
                </div>
              )}
            </a>
          </div>
        </div>
      </main>

      <footer className="flex justify-center py-10">
        <div id="contacto" className="w-[95%]">
          <h1 className="text-[50px] text-center font-rising-sun font-semibold tracking-normal mx-10 rounded-sm">
            Contacto
          </h1>
          <form className="mt-10">
            <div className="grid grid-cols-6">
              <div className="col-start-2 col-span-2 flex flex-col">
                <label className="font-bold" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  className="h-[60px] px-4 rounded-lg mt-2"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-span-2 ml-5 flex flex-col">
                <label className="font-bold" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="h-[60px] px-4 rounded-lg mt-2"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 mt-5">
              <div className="col-start-2 col-span-4 flex flex-col">
                <label className="font-bold" htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  className="rounded-lg px-4 py-4 mt-2"
                  placeholder="Escribe aquí tu mensaje para ponerte en contacto conmigo..."
                  rows="5"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
