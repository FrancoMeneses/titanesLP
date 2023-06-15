import { BsWhatsapp } from "react-icons/bs"
import { useContext } from "react"
import { TitanesContext } from "../context/titanesContext"

export const Whatsapp = () => {

  const { handleModal } = useContext(TitanesContext)

  return (
    <button id="regular" onClick={handleModal} className="group/whatsapp fixed right-4 bottom-4 w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 border-2 rounded-[50%] bg-white flex justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in duration-300">
      <div className="bg-white w-40 rounded-md hidden group-hover/whatsapp:block absolute bottom-[65px] right-[-10px] border-2">
        <p className="m-0 p-2 text-xs">¡Haz click para agendar tu clase! 😃</p>
      </div>
      <BsWhatsapp className="pointer-events-none w-8 h-8 md:w-10 md:h-10 fill-[#25d366] stroke-[#25d366]"></BsWhatsapp>
    </button>
  )
}
