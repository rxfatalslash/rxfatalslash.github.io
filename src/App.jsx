import React, { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [hover, setHover] = useState("about-me");
  const [color, setColor] = useState('#f5f5f5');
  const [isValid, setIsValid] = useState(false);

  const handleHover = (option) => {
    setHover((prevOption) => (prevOption === option ? null : option));
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setIsValid(validateEmail(value))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
    return emailRegex.test(email)
  }

  const handleColor = () => {
    const dark = color === "#f5f5f5" ? "#303030" : "#f5f5f5";
    setColor(dark);
    document.body.style.backgroundColor = dark;
    document.querySelector('#about-me').style.color = color === "#f5f5f5" ? "white" : "black";
    document.querySelector('#contacto').style.color = color === "#f5f5f5" ? "white" : "black";
    document.querySelector('.nombre').style.color = color === "#f5f5f5"? "black" : "white";
    document.querySelector('.email').style.color = color === "#f5f5f5"? "black" : "white";
    document.querySelector('.mensaje').style.color = color === "#f5f5f5"? "black" : "white";
    document.querySelector('#proyectos').style.backgroundColor = color === "#f5f5f5" ? "#636363" : "#a8e4ff";
    document.querySelector('#proyTit').style.color = color === "#f5f5f5" ? "white" : "black";
    document.querySelector('#presentation').style.color = color === "#f5f5f5" ? "#bfbfbf" : "#757778";
  }

  return (
    <div>
      <header>
        <Navbar onButtonClick={handleColor} />
        <div
          id="about-me"
          className="lg:h-screen pt-[100px] lg:pt-0 flex flex-col lg:flex-row justify-center items-center px-5 md:px-10 lg:px-20 mb-20 lg:mb-0"
        >
          <img
            className="object-contain max-h-[65vh] rounded-md shadow-imagenes"
            src={require("./img/foto.png")}
            alt="Foto personal"
          />
          <div className="flex flex-col mt-5 lg:mt-0 lg:ml-20">
            <h1 className="font-bold text-[20px]  md:text-[40px] lg:text-[50px] tracking-wider">
              AARÓN SÁNCHEZ
            </h1>
            <h3 className="font-medium lg:text-[20px] tracking-wider mt-2 mb-10">
              CYBER SECURITY ANALYST
            </h3>
            <p id="presentation" className="max-w-[500px] font-sans text-disabled tracking-normal">
              Mi nombre es Aarón Sánchez, soy administrador de sistemas y redes con conocimientos de Windows y Linux, 
              y analista de ciberseguridad interesado tanto en Blue Team como en Read Team. Además, poseo conocimiento
              sobre desarrollo web con <b>JavaScript</b> y frameworks como <b>React</b>, y en lenguajes de programación como <b>Python</b> y <b>Rust</b>.
              <br />
              <br />
              Cuento con titulación tanto en administración de sistemas y redes como en ciberseguridad. 
              Actualmente estoy certificado en <b>CCST Cybersecurity</b> y estoy en proceso de obtención de varias certificaciones como <b>eJPTv2</b> y <b>CompTIA Security+</b>.
            </p>
            <div className="mt-5">
              <h1 className="lg:text-[20px] font-rising-sun font-bold mb-2">
                Ciberseguridad
              </h1>
              <div className="w-full h-6 bg-blue-700 rounded-full">
                <div className="w-[80%] h-6 bg-blue-400 rounded-full text-white px-2">
                  80%
                </div>
              </div>
              <h1 className="lg:text-[20px] font-rising-sun font-bold my-2">
                Linux
              </h1>
              <div className="w-full h-6 bg-blue-700 rounded-full">
                <div className="w-[75%] h-6 bg-blue-400 rounded-full text-white px-2">
                  75%
                </div>
              </div>
              <h1 className="lg:text-[20px] font-rising-sun font-bold mt-2">
                Programación
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
          <h1 id="proyTit" className="text-[30px] md:text-[40px] lg:text-[50px] text-center font-rising-sun font-semibold tracking-normal mx-10 rounded-sm">
            Proyectos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 mx-5 xl:mx-0 px-5 md:px-8 xl:px-10">
            <a
              href="https://github.com/rxfatalslash/archinstall"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleHover("option1")}
              onMouseLeave={() => handleHover("option1")}
            >
              {hover === "option1" ? (
                <div className="relative">
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/arch.png")}
                    alt="Arch Linux"
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[10px] md:text-[20px] transition-all duration-200 ease-in-out">
                    Automatización Arch
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/arch.png")}
                    alt="Arch Linux"
                  />
                </div>
              )}
            </a>
            <a
              href="https://github.com/rxfatalslash/wgcl"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleHover("option2")}
              onMouseLeave={() => handleHover("option2")}
            >
              {hover === "option2" ? (
                <div className="relative">
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/wireguard.png")}
                    alt="Wireguard CLI"
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[10px] md:text-[20px] transition-all duration-200 ease-in-out">
                    Wireguard CLI
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/wireguard.png")}
                    alt="Wireguard CLI"
                  />
                </div>
              )}
            </a>
            <a
              href="https://github.com/rxfatalslash/RXBot"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleHover("option3")}
              onMouseLeave={() => handleHover("option3")}
            >
              {hover === "option3" ? (
                <div className="relative">
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes filter blur-sm transition-all duration-200 ease-in-out"
                    src={require("./img/rxbot.png")}
                    alt="Logo RXBot"
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[10px] md:text-[20px] transition-all duration-200 ease-in-out">
                    Discord Bot
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="md:h-[100px] lg:h-[200px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/rxbot.png")}
                    alt="Logo RXBot"
                  />
                </div>
              )}
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-5 xl:mx-0 px-5 md:px-8 xl:px-10">
            <a
              href="https://rxfatalslash.github.io/calculadoraWeb"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleHover("option4")}
              onMouseLeave={() => handleHover("option4")}
            >
              {hover === "option4" ? (
                <div className="relative">
                  <img
                    className="md:h-[100px] lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/calculadora.jpg")}
                    alt="Calculadora"
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[10px] md:text-[20px] transition-all duration-200 ease-in-out">
                    Calculadora web
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="md:h-[100px] lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/calculadora.jpg")}
                    alt="Calculadora"
                  />
                </div>
              )}
            </a>
            <a
              href="https://rxfatalslash.github.io/weatherApp"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleHover("option5")}
              onMouseLeave={() => handleHover("option5")}
            >
              {hover === "option5" ? (
                <div className="relative">
                  <img
                    className="md:h-[100px] lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/weather.png")}
                    alt="Tiempo"
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-proyectos shadow-imagenes px-2 rounded-[4px] font-bold font-rising-sun tracking-normal text-[10px] md:text-[20px] transition-all duration-200 ease-in-out">
                    Aplicación de tiempo
                  </p>
                </div>
              ) : (
                <div>
                  <img
                    className="md:h-[100px] lg:h-[250px] w-full overflow-y-hidden rounded-sm bg-white shadow-imagenes transition-all duration-200 ease-in-out"
                    src={require("./img/weather.png")}
                    alt="Tiempo"
                  />
                </div>
              )}
            </a>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center py-10">
        <div id="contacto" className='w-[95%]'>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-center font-rising-sun font-semibold tracking-normal mx-10 rounded-sm">
            Contacto
          </h1>
          <form id="form" className="mt-10 w-full max-w-4xl mx-auto px-4" action="https://formsubmit.co/aaronsanchezmenendez@gmail.com" method="post" onChange={handleChange}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  className="nombre h-[60px] px-4 rounded-lg mt-2 focus:outline-blue-400"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  className={`${isValid ? "focus:outline-blue-400" : "outline-red-400"} email h-[60px] px-4 rounded-lg mt-2`}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label className="font-bold" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="mensaje rounded-lg px-4 py-4 mt-2 focus:outline-blue-400"
                placeholder="Escribe aquí tu mensaje..."
                rows="5"
              ></textarea>
            </div>
            <div className="flex flex-col items-center mt-5">
              <button className="bg-blue-400 py-2 px-6 text-white rounded-sm font-rising-sun font-bold hover:bg-blue-500 transition-all duration-200 ease-in-out" type="submit">Enviar</button>
            </div>
          </form>
        </div>

        <hr className="my-20 w-[80%] self-center" />

        <div className="flex flex-row justify-center">
          <a target="_blank" rel="noreferrer" href="https://github.com/rxfatalslash" className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] text-white rounded-full bg-github hover:bg-[#545353] inline-flex items-center justify-center transition-all duration-200 ease-in-out">
            <svg className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" width="16" height="16" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"> </path> </g> </g> </g> </g></svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aarón-sánchez-menéndez-36537810a/" className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] text-white rounded-full bg-linkedin hover:bg-[#185a7a] inline-flex items-center justify-center transition-all duration-200 ease-in-out mx-10">
            <svg className="w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(8.53333,8.53333)"><path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path></g></g>
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/rxfatalslash" className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] text-white rounded-full bg-black hover:bg-gray-700 inline-flex items-center justify-center transition-all duration-200 ease-in-out">
            <svg className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" space="preserve">
              <defs>
              </defs>
              <g style={{stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'none', fillRule: 'nonzero', opacity: '1'}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <polygon points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 " style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'white', fillRule: 'nonzero', opacity: '1'}} transform="  matrix(1 0 0 1 0 0) " />
                <path d="M 72.349 0 H 17.651 C 7.902 0 0 7.902 0 17.651 v 54.699 C 0 82.098 7.902 90 17.651 90 h 54.699 C 82.098 90 90 82.098 90 72.349 V 17.651 C 90 7.902 82.098 0 72.349 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z" style={{stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'white', fillRule: 'nonzero', opacity: '1'}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
