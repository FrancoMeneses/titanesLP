import { NavLink, ScrollRestoration } from "react-router-dom"
import { useState } from "react"
import { VscChevronDown, VscMenu } from "react-icons/vsc";

export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="w-full sticky z-10 top-0 h-20">
      <nav className="container min-w-full bg-[#b00000] text-[#ffffff] py-2">
        <div className="flex flex-row h-full w-full justify-between items-center px-4 flex-wrap md:flex-nowrap lg:flex-nowrap">
          <NavLink to="/" onClick={() => setNavbarOpen(false)}>
            <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674072102/titanes/Landing%20Page/Logo1.png" className="w-16 h-16" alt="Titanes All-Stars Logo" />
          </NavLink>
          <button className="md:hidden lg:hidden" onClick={() => { setNavbarOpen(!navbarOpen) }}>
            <VscMenu className="text-4xl"></VscMenu>
          </button>
          <div className={
            "w-full md:w-auto lg:w-auto lg:flex lg:flex-row md:flex md:flex-row" +
            (navbarOpen ? "transition-all duration-300 ease-in-out relative" : " hidden")
          }>
            <ul className={"bg-neutral-700 w-full absolute flex top-0 flex-col justify-center items-center border rounded md:bg-transparent md:static md:border-transparent lg:bg-transparent lg:static lg:border-transparent shadow md:shadow-none lg:shadow-none md:flex md:flex-row md:w-auto md:gap-x-6 lg:flex lg:flex-row lg:w-auto lg:gap-x-6"}>
              <li className="transition duration-300 hover:text-[#c0c0c0] leading-snug h-6 text-center">
                <NavLink end to='/' className={({ isActive }) =>
                  isActive ? "font-bold" : "undefined"
                }
                  onClick={() => setNavbarOpen(false)}>
                  Inicio
                </NavLink>
              </li>
              <li className="transition duration-300 hover:text-[#c0c0c0] leading-snug h-6 text-center">
                <NavLink end to='/sucursal1' className={({ isActive }) =>
                  isActive ? "font-bold" : "undefined"
                }
                  onClick={() => setNavbarOpen(false)}>
                  Sucursal 1
                </NavLink>
              </li>
              {/* <li className="group/suc">
                <button id="butSuc">
                  <div id="div-smS" className="flex transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <span id="smS-span">Sucursales</span>
                    <VscChevronDown id="smS-svg" className="self-center" />
                  </div>
                </button>
                <ul className="hidden text-black group-hover/suc:block group-hover/suc:absolute group-hover/suc:text-start group-hover/suc:w-auto group-hover/suc:px-2 group-hover/suc:bg-white group-hover/suc:text-slate-600 group-hover/suc:shadow group-hover/suc:border group-hover/suc:rounded-sm group-hover/suc:border-black">
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/sucursal1'
                      className={({ isActive }) =>
                        isActive ? "font-semibold" : "undefined"
                      }
                      onClick={() => setNavbarOpen(false)}>
                      Sucursal 1
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li className="group/ver">
                <button id="butVer">
                  <div id="div-smS" className="flex transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <span id="smS-span">Curso de verano 2023</span>
                    <VscChevronDown id="smS-svg" className="self-center" />
                  </div>
                </button>
                <ul className="hidden text-black group-hover/ver:block group-hover/ver:absolute group-hover/ver:text-start group-hover/ver:w-auto group-hover/ver:px-2 group-hover/ver:bg-white group-hover/ver:text-slate-600 group-hover/ver:shadow group-hover/ver:border group-hover/ver:rounded-sm group-hover/ver:border-black">
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/curso-de-verano-2023#mini'
                      onClick={() => setNavbarOpen(false)}>
                      Mini Gym/Parkour
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/curso-de-verano-2023#parkour'
                      onClick={() => setNavbarOpen(false)}>
                      Parkour
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/curso-de-verano-2023#gimnasiayporristas'
                      onClick={() => setNavbarOpen(false)}>
                      Gimnasia/Porristas
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li className="group/act">
                <button id="act-btn" className="transition duration-300 hover:text-[#c0c0c0] leading-snug">
                  <div className="flex">
                    <span id="span-act" className="">Actividades</span>
                    <VscChevronDown id="svg-act" className="self-center" />
                  </div>
                </button>
                <ul className="hidden group-hover/act:transition group-hover/act:duration-300 group-hover/act:leading-snug group-hover/act:block group-hover/act:absolute group-hover/act:text-start group-hover/act:bg-white group-hover/act:text-slate-600 group-hover/act:shadow group-hover/act:border group-hover/act:rounded-sm group-hover/act:border-black">
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/cheerleading'
                      className={({ isActive }) =>
                        isActive ? "font-semibold" : "undefined"
                      }
                      onClick={() => setNavbarOpen(false)}>
                      Cheerleading
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/parkour'
                      className={({ isActive }) =>
                        isActive ? "font-semibold" : "undefined"
                      }
                      onClick={() => setNavbarOpen(false)}>
                      Parkour
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-[#c0c0c0] leading-snug">
                    <NavLink end to='/gimnasia'
                      className={({ isActive }) =>
                        isActive ? "font-semibold" : "undefined"
                      }
                      onClick={() => setNavbarOpen(false)}>
                      Gimnasia
                    </NavLink>
                  </li>
                </ul>
              </li> */}
              <li className="transition duration-300 hover:text-[#c0c0c0] leading-snug h-6 text-center">
                <NavLink end to='/aviso-privacidad' className={({ isActive }) =>
                  isActive ? "font-bold" : "undefined"
                }
                  onClick={() => setNavbarOpen(false)}>
                  Aviso de Privacidad
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ScrollRestoration />
    </div>
  )
}