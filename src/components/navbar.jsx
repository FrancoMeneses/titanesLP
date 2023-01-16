import { NavLink } from "react-router-dom"
import { useState } from "react"
import { VscChevronDown } from "react-icons/vsc";

export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="w-full">
      <nav className="container min-w-full bg-red-800 text-slate-100 h-20">
        <div className="flex flex-row h-full w-full justify-between items-center px-4">
          <NavLink to="/">
            <img src="src/assets/Logo1.png" className="w-16 h-16" alt="Titanes All-Stars Logo" />
          </NavLink>
          <div className="">
            <ul className="flex flex-row w-[500px] justify-between">
              <li className="transition duration-300 hover:text-slate-400 leading-snug h-6 text-center">
                <NavLink end to='/' className={({ isActive }) =>
                  isActive ? "text-slate-800" : "undefined"
                }>
                  Inicio
                </NavLink>
              </li>
              <li className="group/suc">
                <button id="butSuc">
                  <div id="div-smS" className="flex transition duration-300 hover:text-slate-400 leading-snug">
                    <span id="smS-span">Sucursales</span>
                    <VscChevronDown id="smS-svg" className="self-center" />
                  </div>
                  </button>
                  <ul className="hidden group-hover/suc:block group-hover/suc:absolute group-hover/suc:text-start group-hover/suc:bg-white group-hover/suc:text-slate-600 group-hover/suc:shadow group-hover/suc:border group-hover/suc:border-black">
                    <li className="my-1 transition duration-300 hover:text-slate-400 leading-snug">
                      <NavLink end to='/sucursal1'
                        className={({ isActive }) =>
                          isActive ? "text-slate-800" : "undefined"
                        }>
                        Sucursal 1
                      </NavLink>
                    </li>
                    <li className="my-1 transition duration-300 hover:text-slate-400 leading-snug">
                      <NavLink end to='/sucursal2'
                        className={({ isActive }) =>
                          isActive ? "text-slate-800" : "undefined"
                        }>
                        Sucursal 2
                      </NavLink>
                    </li>
                  </ul>
              </li>
              <li className="group/act">
                <button id="act-btn" className="transition duration-300 hover:text-slate-400 leading-snug">
                  <div className="flex">
                    <span id="span-act" className="">Actividades</span>
                    <VscChevronDown id="svg-act" className="self-center" />
                  </div>
                </button>
                <ul className="hidden group-hover/act:transition group-hover/act:duration-300 group-hover/act:leading-snug group-hover/act:block group-hover/act:absolute group-hover/act:text-start group-hover/act:bg-white group-hover/act:text-slate-600 group-hover/act:shadow group-hover/act:border group-hover/act:border-black">
                  <li className="my-1 transition duration-300 hover:text-slate-400 leading-snug">
                    <NavLink end to='/cheerleading'
                      className={({ isActive }) =>
                        isActive ? "text-slate-800" : "undefined"
                      }>
                      Cheerleading
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-slate-400 leading-snug">
                    <NavLink end to='/parkour'
                      className={({ isActive }) =>
                        isActive ? "text-slate-800" : "undefined"
                      }>
                      Parkour
                    </NavLink>
                  </li>
                  <li className="my-1 transition duration-300 hover:text-slate-400 leading-snug">
                    <NavLink end to='/gimnasia'
                      className={({ isActive }) =>
                        isActive ? "text-slate-800" : "undefined"
                      }>
                      Gimnasia
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="transition duration-300 hover:text-slate-400 leading-snug h-6 text-center">
                <NavLink end to='/aviso-privacidad' className={({ isActive }) =>
                  isActive ? "text-slate-800" : "undefined"
                    }>
                  Aviso de Privacidad
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}