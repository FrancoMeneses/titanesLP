import { BsInstagram, BsFacebook } from "react-icons/bs"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 bg-[#1e1e1e] p-3">
      <p className="text-lg font-semibold text-center text-white">Síguenos en nuestras redes sociales</p>
      <div className="flex justify-center gap-x-8">
        <a className="flex justify-center items-center transition ease-in duration-300 w-14 h-14 hover:bg-gradient-to-b text-white hover:rounded-full hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:-translate-y-1 hover:scale-110" href="https://www.instagram.com/titanespueblaallstars/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="w-10 h-10"></BsInstagram>
        </a>
        <a className="flex justify-center items-center transition ease-in duration-300 w-14 h-14 rounded-full text-white hover:rounded-full hover:bg-white hover:text-blue-700 hover:-translate-y-1 hover:scale-110" href="https://www.facebook.com/TitanesPueblaallstars/" target="_blank" rel="noopener noreferrer">
          <BsFacebook className="w-10 h-10"></BsFacebook>
        </a>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center h-full md:gap-4 text-white text-[12px]">
        <p>
          Derechos de autor © 2023 Titanes All-Stars
        </p>
        <NavLink to='/aviso-privacidad' className='underline'>
          Aviso de privacidad
        </NavLink>
      </div>
    </div>
  )
}