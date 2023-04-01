import { BsWhatsapp } from "react-icons/bs"

export const Whatsapp = () => {
  return (
    <div className="fixed right-4 bottom-4 w-12 h-12">
      <a href="#" className="text-white bg-[#25d366] cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in duration-300">
      <BsWhatsapp className="w-10 h-10 fill-[#25d366] stroke-[#25d366]"></BsWhatsapp>
      </a>
    </div>
  )
}
