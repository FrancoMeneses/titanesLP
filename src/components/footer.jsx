import { BsInstagram, BsFacebook } from "react-icons/bs"

export const Footer = () => {
  return (
    <div className="flex flex-col gap-y-2 bg-slate-300 mt-6">
      <p className="text-lg font-semibold text-center">Síguenos en nuestras redes sociales</p>
      <div className="flex justify-center gap-x-8">
        <a className="flex justify-center items-center transition ease-in duration-300 w-14 h-14 hover:bg-gradient-to-b text-black hover:rounded-full hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:-translate-y-1 hover:scale-110" href="https://www.instagram.com/titanespueblaallstars/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="w-10 h-10"></BsInstagram>
        </a>
        <a className="flex justify-center items-center transition ease-in duration-300 w-14 h-14 rounded-full text-black hover:rounded-full hover:bg-white hover:text-blue-700 hover:-translate-y-1 hover:scale-110" href="https://www.facebook.com/TitanesPueblaallstars/" target="_blank" rel="noopener noreferrer">
          <BsFacebook className="w-10 h-10"></BsFacebook>
        </a>
      </div>
    </div>
  )
}