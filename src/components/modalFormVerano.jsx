import { useContext } from "react"
import { TitanesContext } from "../context/titanesContext"
import { BsWhatsapp } from "react-icons/bs"

export function VeranoForm() {

  const { handleEditVeranoForm, veranoForm, handleSubmitVeranoForm } = useContext(TitanesContext)

  const hideModal = (e) => {
    document.getElementById('modalVerano').classList.add('hidden')
  }

  return (
    <article id="modalVerano" onClick={(e)=>{e.target.id === 'modalVerano' ? document.getElementById('modalVerano').classList.add('hidden') : ''}} className="hidden flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50">
      <div id='Verano' className="flex flex-col p-4 bg-white rounded-2xl w-[350px] h-auto font-text relative">
        <button className="absolute top-2 right-2 px-4 py-2 text-white rounded-full bg-[#b00000] font-semibold" onClick={hideModal}>Cerrar</button>
        <form onSubmit={handleSubmitVeranoForm} autoComplete="off" className="flex flex-col w-full h-full justify-start mt-[45px] items-center gap-6">
          <div>
            <p className="text-justify font-semibold">Ingrese la información para agendar su visita al curso de verano</p>
          </div>
          <div className="w-full flex flex-col">
            <label className="" htmlFor="horariov-vs">Horario de atención<span className="font-semibold text-red-500">*</span></label>
            <select name="horariov" id="horariov-vs" onChange={handleEditVeranoForm} value={veranoForm.horariov} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2 bg-white">
              <option value="martes a viernes de 4:30 pm a 6:30 pm">Martes a viernes de 4:30 pm a 6:30 pm</option>
              <option value="sábados de 9:30 am a 11:30 am">Sábados de 9:30 am a 11:30 am</option>
            </select>
            <p id="horariov-vp" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="nombrev-vi" className="self-start">Nombre de quien tomará el curso<span className="font-semibold text-red-500">*</span></label>
            <input id="nombrev-vi" name="nombrev" placeholder="Ej. Juan Pérez" type="text" onChange={handleEditVeranoForm} value={veranoForm.nombrev} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2"></input>
            <p id="nombrev-vp" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="edadv-vi" className="self-start">Edad de quien tomará el curso<span className="font-semibold text-red-500">*</span></label>
            <input id="edadv-vi" name="edadv" placeholder="Ej. 10" type="number" onChange={handleEditVeranoForm} value={veranoForm.edadv} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2"></input>
            <p id="edadv-vp" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label className="" htmlFor="interesadov-vs">Estoy interesado en...<span className="font-semibold text-red-500">*</span></label>
            <select name="interesadov" id="interesadov-vs" onChange={handleEditVeranoForm} value={veranoForm.interesadov} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2 bg-white">
              <option value="mini gym">Mini gym/parkour</option>
              <option value="parkour">Parkour</option>
              <option value="gimnasia y porristas">Gimnasia y Porristas</option>
            </select>
            <p id="interesadov-vp" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <button type="submit" className=" group w-fit rounded-full py-2 px-4 flex justify-center items-center gap-2 border border-black hover:border-white border-solid p-3 transition duration-300 leading-snug hover:bg-[#25d366] hover:text-white">
            Agendar mi visita
            <BsWhatsapp className="w-6 h-6 fill-[#25d366] stroke-[#25d366] transition duration-300 leading-snug group-hover:fill-white group-hover:stroke-white"></BsWhatsapp>
          </button>
        </form>
      </div>
    </article>
  )
}