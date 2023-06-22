import { NavLink } from "react-router-dom"
import { Header } from "../../components/header"
import { Carousel } from 'react-responsive-carousel'

export const Sucursal1 = () => {
  return (
    <div className="bg-black text-white">
      <Header id='p-f-suc1' title='SUCURSAL 1'></Header>
      <div id="info-suc1" className="px-5 md:px-10 lg:px-16 text-center flex flex-col justify-center items-center py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:my-6">
          <div>
            <p className="text-justify mt-4 text-lg">Esta sucursal cuenta con la <strong>primera escuela de parkour en Puebla</strong>, el mejor lugar para iniciar y aprender parkour, durante las clases también se les enseñan elementos de acrobacia, además de contar con <strong>Mini Gym o Mini Parkour</strong>. Las instalaciones cuentan con spots especializados para entrenar parkour y además:
            </p>
            <ul className="text-lg mt-4 list-disc text-start list-inside">
              <li>Fosa o alberca de esponjas para hacer acrobacias</li>
              <li>Trampolín grande con salida a fosa</li>
              <li>Barra grande y mediana con salida a fosa</li>
              <li>Spots y estructuras profesionales para practicar parkour</li>
              <li>Colchonetas y materiales de apoyo para el aprendizaje seguro</li>
              <li>Piso mat profesional</li>
            </ul>
            <div className="hidden w-full md:flex justify-center items-center gap-5">
              <NavLink to='/sucursal1#mini' className='w-[150px] h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Mini Gym
              </NavLink>
              <NavLink to='/sucursal1#parkour' className='w-[150px] h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Parkour
              </NavLink>
            </div>
          </div>
          <div id="instalaciones">
            <div className="w-full h-full border border-white rounded-lg">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                interval={3000}
                autoPlay
              >
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311648/titanes/Landing%20Page/Sucursal1/cama.jpg"
                  />
                  {/* <p className="legend">Fosa</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311649/titanes/Landing%20Page/Sucursal1/spots.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311648/titanes/Landing%20Page/Sucursal1/piso.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>
            </div>

          </div>
        </div>
        <div className="flex w-full md:hidden justify-center items-center gap-5">
          <NavLink to='/sucursal1#mini' className='w-[150px] h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
            Ver Mini Gym
          </NavLink>
          <NavLink to='/sucursal1#parkour' className='w-[150px] h-fit rounded-full px-4 py-2 mt-[50px] bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
            Ver Parkour
          </NavLink>
        </div>
        <div id="mini" className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
      </div>
      <div className="w-full">
        <p className="text-3xl font-semibold text-center md:my-8 px-5 md:px-10 lg:px-16">Actividades en Sucursal 1</p>
        <div id="minigym-suc1" className="my-8 w-full">
          <p className="text-2xl font-semibold text-center mb-6 px-5 md:px-10 lg:px-16">Mini Gym o Mini Parkour</p>
          <p className="text-justify mb-6 text-lg px-5 md:px-10 lg:px-16">Para niños y niñas de <strong>3 a 5 años</strong>, enseñando elementos básicos de parkour y gimnasia,
            con circuitos de obstáculos para desarrollar <strong>coordinación, flexibilidad, fuerza, equilibrio y confianza en si mismo.</strong> Reforzando las instrucciones preescolares de esperar su turno, <strong>respetar y convivir con los demás.</strong></p>
          <div className="flex flex-col justify-center items-center w-full">
            {/* <div id="carousel-sucursales-sucursal1-minigym" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carousel-sucursales-sucursal1-minigym"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-sucursales-sucursal1-minigym"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption block absolute -top-6 text-center">
                    <h5 className="text-xl font-bold">Grupo 1</h5>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption block absolute -top-6 text-center">
                    <h5 className="text-xl font-bold">Grupo 2</h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carousel-sucursales-sucursal1-minigym"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carousel-sucursales-sucursal1-minigym"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
            <div className="h-[200px] w-full bg-no-repeat bg-local bg-cover bg-center lg:bg-[center_top_-650px] lg:bg-cover lg:h-[400px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1679603839/titanes/Landing%20Page/Sucursal1/_PIC0129.jpg)' }}></div>
            <div className="text-center flex flex-col gap-y-6">
              <p className="text-2xl font-semibold text-center mt-6 mb-6">Horarios</p>
              <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Mi-Vi</p>
                  <p className="text-md">De 4:00 pm a 5:00 pm</p>
                  <p id="parkour" className="text-md">De 5:00 pm a 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-center my-12">Parkour</p>
        <p className="text-justify my-8 px-5 md:px-10 lg:px-16 text-lg">Parkour, el arte del movimiento, deporte que puede ser practicado en cualquier edad, tenemos grupos para niños y niñas, jóvenes y adultos, donde desarrollarás fuerza, flexibilidad, agilidad, coordinación y sobre todo también aprenderas acrobacias. Te invitamos a aprender esta divertida actividad donde no se requiere tener experiencia.</p>
        <div className="h-[200px] w-full bg-no-repeat bg-local bg-cover bg-center lg:bg-[center_top_-300px] lg:bg-cover lg:h-[400px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1680311648/titanes/Landing%20Page/Sucursal1/cama.jpg)' }}></div>
        <div id="parkour2-suc1" className="my-8 px-5 md:px-10 lg:px-16">
          <p className="text-3xl font-semibold text-center my-12">Horarios - Categorías</p>
          <div className="flex flex-col md:flex-row md:justify-between w-full lg:flex-row lg:justify-between justify-center items-center md:items-start lg:items-start text-center gap-8">
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">6 a 14 años</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Ma-Mi-Ju-Vi</p>
                <p className="text-md">De 4:00 pm a 5:15 pm</p>
                <p className="text-md">De 5:15 pm a 6:30 pm</p>
              </div>
              <div className="text-center flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p className="text-md">De 9:30 am a 11:30 am</p>
              </div>
              <div className="text-center flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Parkour con acrobacias</p>
                <p className="text-xl font-semibold">Ma-Vi</p>
                <p className="text-md">De 6:30 pm a 7:30 pm</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">15 a 20 años</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Mi-Vi</p>
                <p className="text-md">De 10:00 am a 11:30 pm</p>
              </div>
              <div className="text-center flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p className="text-md">De 08:00 am a 09:30 am</p>
                <p className="text-md">De 09:30 am a 11:30 am</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">21 a 45 años</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Mi-Vi</p>
                <p className="text-md">De 10:00 am a 11:30 am</p>
              </div>
              <div className="text-center flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p className="text-md">De 08:00 am a 09:30 am</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 justify-center items-center my-8">
            <h2 className="text-2xl font-semibold text-center w-full">
              OPEN GYM
            </h2>
            <p className="text-justify">
             Contamos con Open gym, el gimnasio esta abierto a público para practicar los elementos de parkour o de alguna actividad, es importante agendar cita para el open gym.
            </p>
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">OPEN GYM</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábados</p>
                <p id="ubicacion" className="text-md">De 11:00 am a 2:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-5 md:px-10 lg:px-16">
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
        <p className="text-3xl font-semibold text-center mb-6">Ubicación</p>
        <div id="location" className="flex flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
          <div className="flex flex-col gap-y-4 mt-4 text-center">
            <p className="text-2xl font-semibold">Dirección</p>
            <p className="text-md">Calle Guadalajara, Número 47, Colonia Independencia, C.P. 72150 Puebla, Pue.</p>
            <div className="flex flex-col gap-y-8">
              <div>
                <p className="text-2xl font-semibold mt-4">
                  Horario de atención
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">
                  Martes a viernes
                </p>
                <p className="text-md">
                  De 4:00 pm a 6:30 pm
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">
                  Sábados
                </p>
                <p className="text-md">
                  De 9:30 am a 11:30 am
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7992085668384!2d-98.25611880546826!3d19.072563849706892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f297ee5555%3A0xe7ac5cc53565ad1f!2sTITANES%20PUEBLA%20ALL-STARS!5e0!3m2!1ses-419!2smx!4v1673897593961!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-md" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}