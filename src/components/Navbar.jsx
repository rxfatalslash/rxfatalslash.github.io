import React, { useEffect, useState } from 'react'

const Navbar = ({ onButtonClick }) => {
  const [active, setActive] = useState(false)
  const [color, setColor] = useState('#cff0ff')


  const changeNavbarStyle = () => {
    const dark = color === "#cff0ff" ? "#636363" : "#cff0ff";
    setColor(dark);
    document.querySelector('#navbar').style.backgroundColor = dark;
    document.querySelector('#navbar').style.color = color === "#cff0ff" ? "white" : "black";
  };

  useEffect(() => {
    const scrollTracker = () => {
      const sections = [
        "about-me",
        "proyectos",
        "contacto",
        "mode"
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
    <nav id='navbar' className="fixed flex flex-row justify-center lg:justify-between px-20 items-center bg-containers shadow-navbar w-screen h-[80px] z-50">
      <a href="#" className="text-3xl flex flex-row items-center">
        <img className='w-[30px] h-[30px] mr-2' src={require('../img/d3xnet.png')} alt="Logo" />
        Portfolio
      </a>
      <div className="hidden lg:flex flex-row font-medium">
        <a
          className={`${active === "about-me" ? "text-blue-800 font-bold" : "hover:text-blue-400"
            } mr-5 hover:font-bold transition-all duration-200 ease-in-out`}
          href="#about-me"
        >
          Sobre mí
        </a>
        <a
          className={`${active === "proyectos" ? "text-blue-800 font-bold" : "hover:text-blue-400"
            } mr-5 hover:font-bold transition-all duration-200 ease-in-out`}
          href="#proyectos"
        >
          Proyectos
        </a>
        <a
          className={`${active === "contacto" ? "text-blue-800 font-bold" : "hover:text-blue-400"
            } hover:font-bold transition-all duration-200 ease-in-out`}
          href="#contacto"
        >
          Contacto
        </a>
        <button
          className="hover:text-gray-600 ml-5 hover:font-bold transition-all duration-200 ease-in-out" onClick={() => { onButtonClick(); changeNavbarStyle(); }}
        >
          {
            color === "#cff0ff" ?
              <svg className='fill-black hover:fill-[#636363] w-[15px] hover:w-[18px] transition-all duration-200 ease-in-out' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" space="preserve">
                <defs>
                </defs>
                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                  <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" strokeLinecap="round" />
                </g>
              </svg>
              :
              <svg className='fill-white stroke-white hover:fill-[#636363] w-[20px] hover:w-[23px] hover:stroke-black transition-all duration-200 ease-in-out' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g clipPath="url(#a)" strokeWidth="1.5" strokeMiterlimit="10">
                  <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" strokeLinecap="round"></path>
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                  <path d="M12 19v4M12 1v4" strokeLinecap="round"></path>
                </g>
                  <defs>
                    <clipPath id="a">
                      <path className='hover:fill-[#636363]' d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
          }
        </button>
      </div>
    </nav>
  );
}

export default Navbar
