import { Header } from "../components/header"
import { BsWhatsapp } from "react-icons/bs"
import 'tw-elements'
import { BtnWhatsApp, BtnCursoVerano } from "../imports"
import { NavLink } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useContext } from "react"
import { TitanesContext } from "../context/titanesContext"

export const Inicio = () => {

  const {handleModal} = useContext(TitanesContext)

  return (
    <main>
      <Header id='p-f-home' title="TITANES ALL-STARS" />
      <div className="flex flex-col bg-black text-white">
        <section className="flex flex-col w-full justify-center items-center gap-6 px-5 md:px-10 lg:px-16 py-8">
          <div>
            <video className="w-auto md:w-[640px] md:h-[480px]" autoPlay muted controls>
              <source src="https://res.cloudinary.com/dovrrjhdw/video/upload/v1686542289/titanesLP/video_promocional_mayo_23_dehlat.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <BtnCursoVerano />
            <BtnWhatsApp />
          </div>
          <nav id="actividades-home" className="w-full flex flex-col gap-2 justify-center items-center">
            <p className="w-full text-center font-semibold text-2xl">Actividades</p>
            <ul className="w-full text-white flex flex-col md:bg-[#b00000] md:rounded-lg md:flex-row md:justify-center md:items-center md:gap-10 lg:w-[80%] lg:gap-16">
              <li className="text-center h-[48px] bg-[#b00000] rounded-t-lg md:rounded-none md:border-none border border-white flex justify-center items-center underline md:no-underline md:hover:underline">
                <NavLink to="#">
                  Mini Gym
                </NavLink>
              </li>
              <li className="text-center h-[48px] bg-[#b00000] md:border-none border-l border-r border-b border-white flex justify-center items-center underline md:no-underline md:hover:underline">
                <NavLink to="#">
                  Parkour
                </NavLink>
              </li>
              <li className="text-center h-[48px] bg-[#b00000] md:border-none border-l border-r border-b border-white flex justify-center items-center underline md:no-underline md:hover:underline">
                <NavLink to="#">
                  Porristas
                </NavLink>
              </li>
              <li className="text-center h-[48px] bg-[#b00000] rounded-b-lg md:rounded-none md:border-none border-l border-r border-b border-white flex justify-center items-center underline md:no-underline md:hover:underline">
                <NavLink to="#">
                  Gimnasia Femenil y Varonil
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <section className="w-full h-full py-8">
          <div id="s-2" className="px-5 md:px-10 lg:px-16 flex flex-col items-center">
            {/* <div>
              <p className="text-center text-4xl mb-12 font-bold">
                Contamos con dos sucursales
              </p>
            </div> */}
            <div className="text-center flex flex-col items-center gap-y-4">
              <p className="text-3xl font-semibold">
                Sucursal 1
                <br />
                Plaza Cruz del Sur
              </p>
              {/* <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-3">
                    <p className="text-xl font-semibold">Dirección</p>
                    <p className="text-xl">Calle Guadalajara, Número 47, Colonia Independencia, C.P. 72150 Puebla, Pue.</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <p className="text-xl font-semibold">Horario de atención</p>
                    <p className="text-xl">Martes a viernes de 4:00 pm a 6:30 pm</p>
                    <p className="text-xl">Sábados de 9:30 am a 11:30 am</p>
                  </div>
                </div>
                <div className="my-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7992085668384!2d-98.25611880546826!3d19.072563849706892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f297ee5555%3A0xe7ac5cc53565ad1f!2sTITANES%20PUEBLA%20ALL-STARS!5e0!3m2!1ses-419!2smx!4v1673897593961!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-md" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div> */}
              <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                <p className="text-2xl font-semibold mb-4">Instalaciones</p>
                <div className="w-full h-full border border-white rounded-lg">
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    interval={3000}
                    autoPlay
                  >
                    <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                      <img className="w-full h-full object-cover object-center rounded-lg"
                        width={1600}
                        height={1066}
                        alt=""
                        src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311648/titanes/Landing%20Page/Sucursal1/cama.jpg"
                      />
                      {/* <p className="legend">Fosa</p> */}
                    </div>
                    <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                      <img className="w-full h-full object-cover object-center rounded-lg"
                        width={1600}
                        height={1066}
                        alt=""
                        src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311649/titanes/Landing%20Page/Sucursal1/spots.jpg" />
                      {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                      <img className="w-full h-full object-cover object-center rounded-lg"
                        width={1600}
                        height={1066}
                        alt=""
                        src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311648/titanes/Landing%20Page/Sucursal1/piso.jpg" />
                      {/* <p className="legend">Legend 3</p> */}
                    </div>
                  </Carousel>
                </div>
                <NavLink to='/sucursal1' className='w-[150px] h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                  Ver más
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
        <section className="w-full h-full text-white py-8 px-5 md:px-10 lg:px-16 flex flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <p className="text-3xl font-semibold mb-6">
              Sucursal 2
              <br />
              Calzada Zavaleta
            </p>
            {/* <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-3">
                    <p className="text-xl font-semibold">Dirección</p>
                    <p className="text-xl">Calzada Zavaleta, Número 3708-1, Colonia Santa Cruz Buenavista, C.P. 72150 Puebla, Pue.</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <p className="text-xl font-semibold">Horario de atención</p>
                    <p className="text-xl">Martes a viernes de 4:00 pm a 7:30 pm</p>
                    <p className="text-xl">Sábados de 9:00 am a 11:30 am</p>
                  </div>
                </div>
                <div className="my-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.292018042998!2d-98.25103648536971!3d19.050894287102352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7bfa3c51a2d%3A0xdcff1bd819746fdf!2sTitanes%20Puebla%20All%20Star%202!5e0!3m2!1ses-419!2smx!4v1673898991254!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-md" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div> */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
              <p className="text-2xl font-semibold mb-4">Instalaciones</p>
              <div className="w-full h-full border border-black rounded-lg">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  interval={3000}
                  autoPlay
                >
                  <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                    <img className="w-full h-full object-cover object-center rounded-lg"
                      width={1600}
                      height={1066}
                      alt=""
                      src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686506988/titanesLP/Sucursal%202/barra2_z6gha3.jpg"
                    />
                    {/* <p className="legend">Fosa</p> */}
                  </div>
                  <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                    <img className="w-full h-full object-cover object-center rounded-lg"
                      width={1600}
                      height={1066}
                      alt=""
                      src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686506988/titanesLP/Sucursal%202/aros_t0ttwu.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div className="w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]">
                    <img className="w-full h-full object-cover object-center rounded-lg"
                      width={1600}
                      height={1066}
                      alt=""
                      src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686506988/titanesLP/Sucursal%202/barra1_p9iet4.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                </Carousel>
              </div>
              <NavLink to='/sucursal2' className='w-[150px] text-white h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver más
              </NavLink>
            </div>
          </div>
        </section>
        <div className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
        <section className="w-full h-full text-white py-8">
          <div className="px-5 md:px-10 lg:px-16 flex flex-col gap-y-8">
            <div>
              <p className="text-center text-4xl mb-3 font-bold">
                ¿Por qué entrenar con nosotros?
              </p>
              <p className="text-justify text-xl mt-5">
                Llevamos <strong>más de 7 años</strong> en el deporte formando atletas de alto rendimiento que han destacado en competencias nacionales e internacionales.
              </p>
              <p className="text-justify text-xl mt-5">
                Ofrecemos deportes recreativos y formativos con instalaciones seguras para la práctica del deporte y  con entrenadores capacitados y certificados.
              </p>
            </div>
            <div>
              <p className="text-center text-4xl mt-8 mb-3 font-bold">
                Uso de instalaciones
              </p>
              <p className="text-justify text-xl mt-5 ">
                Nuestras instalaciones están <strong>abiertas a todo público</strong> para la práctica de algún deporte o actividad de forma individual o grupal.
                No requieres estar inscrito en la academia para visitarnos en los <strong>OPEN GYM</strong> que tenemos para ir a practicar por horas tu estilo libre.
              </p>
            </div>
            <div>
              <p className="text-center text-4xl mt-8 mb-3 font-bold">
                Renta de instalaciones
              </p>
              <p className="text-justify text-xl mt-5">
                Si deseas aprender <strong>acrobacias</strong> o <strong>gimnasia</strong> de piso para complementar algún deporte que practicas puedes contactarnos,
                hemos tenido grupos de <strong>taekwondo</strong> donde reforzamos la parte acrobática para sus competencias de estilo libre, asi como otros deportes.
              </p>
            </div>
          </div>
        </section>
        <div className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
        <section className="w-full h-full py-8">
          <div id="s-3" className="px-5 md:px-10 lg:px-16">
            <div className="flex flex-col justify-center">
              <p className="text-center text-3xl mb-3 font-bold">Agenda tu clase muestra</p>
              <p className="text-justify text-xl mt-5">
                <strong>Inscripciones abiertas durante todo el año</strong>, puedes agendar tu clase muestra
                para conocer sobre el deporte o si deseas puedes inscribirte directamente a la academia.
              </p>
            </div>
            <div className="w-full flex justify-center my-8">
              <button onClick={handleModal} className="group flex gap-2 justify-between items-center w-fit rounded-full border border-white md:hover:border-white border-solid py-2 px-4 transition duration-300 leading-snug md:hover:bg-[#25d366] md:hover:text-white">
                <p className="">¡Agenda ahora!</p>
                <BsWhatsapp className="w-8 h-8 fill-[#25d366] stroke-[#25d366] transition duration-300 leading-snug md:group-hover:fill-white md:group-hover:stroke-white"></BsWhatsapp>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}