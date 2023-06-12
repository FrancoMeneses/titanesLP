import { useContext } from "react"
import { BsWhatsapp } from "react-icons/bs"
import { TitanesContext } from "../context/titanesContext"

export const BtnWhatsApp = () =>{

  const { handleModal } = useContext(TitanesContext)

  return(
    <button type="button" onClick={handleModal} className=" group w-fit rounded-full py-2 px-4 flex justify-center items-center gap-2 border border-white md:hover:border-white border-solid p-3 transition duration-300 leading-snug md:hover:bg-[#25d366] md:hover:text-white">
      Agenda tu clase muestra
      <BsWhatsapp className="w-6 h-6 fill-[#25d366] stroke-[#25d366] transition duration-300 leading-snug md:group-hover:fill-white md:group-hover:stroke-white"></BsWhatsapp>
    </button>
  )
}