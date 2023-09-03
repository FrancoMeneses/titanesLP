import { useContext } from "react"
import { TitanesContext } from "../context/titanesContext"
import { BsWhatsapp } from "react-icons/bs"

export function WaForm() {

  const { handleEditContactForm, waForm, handleSubmitForm } = useContext(TitanesContext)

  const hideModal = (e) => {
    document.getElementById('modalId').classList.add('hidden')
  }

  return (
    <article id="modalId" onClick={(e)=>{e.target.id === 'modalId' ? document.getElementById('modalId').classList.add('hidden') : ''}} className="hidden flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50">
      <div id='modalPrincipal' className="flex flex-col p-4 bg-white rounded-2xl w-[350px] h-auto font-text relative">
        <button className="absolute top-2 right-2 px-4 py-2 text-white rounded-full bg-[#b00000] font-semibold" onClick={hideModal}>Cerrar</button>
        <form onSubmit={handleSubmitForm} autoComplete="off" className="flex flex-col w-full h-full justify-start mt-[45px] items-center gap-6">
          <div>
            <p className="text-justify font-semibold">Ingrese la información para agendar su clase</p>
            <p className="text-justify italic text-[14px]">*Clases muestra solo aplican para clases regulares</p>
          </div>
          <div className="w-full flex flex-col">
            <label className="" htmlFor="clasePara-s">La clase es para...<span className="font-semibold text-red-500">*</span></label>
            <select name="clasePara" id="clasePara-s" onChange={handleEditContactForm} value={waForm.clasePara} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2 bg-white">
              <option value="para mi">Para mi</option>
              <option value="para mi hijo/a">Para mi hijo/a</option>
              <option value="para otra persona">Para otra persona</option>
            </select>
            <p id="clasePara-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="nombre-i" className="self-start">Nombre de quien tomará la clase<span className="font-semibold text-red-500">*</span></label>
            <input id="nombre-i" name="nombre" placeholder="Ej. Juan Pérez" type="text" onChange={handleEditContactForm} value={waForm.nombre} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2"></input>
            <p id="nombre-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="edad-i" className="self-start">Edad de quien tomará la clase<span className="font-semibold text-red-500">*</span></label>
            <input id="edad-i" name="edad" placeholder="Ej. 25" type="number" onChange={handleEditContactForm} value={waForm.edad} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2"></input>
            <p id="edad-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <div className="w-full flex flex-col">
            <label className="" htmlFor="actividad-s">Actividad<span className="font-semibold text-red-500">*</span></label>
            <select name="actividad" id="actividad-s" onChange={handleEditContactForm} value={waForm.actividad} className="w-full border-2 border-[#b00000] rounded-lg h-[50px] py-1 px-2 bg-white">
              <option value="Mini gym">Mini gym</option>
              <option value="Parkour">Parkour</option>
            </select>
            <p id="actividad-p" className="hidden italic text-red-500">Este campo es obligatorio</p>
          </div>
          <button type="submit" className=" group w-fit rounded-full py-2 px-4 flex justify-center items-center gap-2 border border-black hover:border-white border-solid p-3 transition duration-300 leading-snug hover:bg-[#25d366] hover:text-white">
            Agendar mi clase
            <BsWhatsapp className="w-6 h-6 fill-[#25d366] stroke-[#25d366] transition duration-300 leading-snug group-hover:fill-white group-hover:stroke-white"></BsWhatsapp>
          </button>
        </form>
      </div>
    </article>
  )
}