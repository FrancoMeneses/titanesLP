import { NavLink } from "react-router-dom"
import { Header } from "../../components/header"
import { Carousel } from 'react-responsive-carousel'

export const Sucursal2 = () => {
  return (
    <div className="bg-black text-white">
      <Header id='p-f-suc1' title='SUCURSAL 2'></Header>
      <div id="info" className="px-5 md:px-10 lg:px-16 text-center flex flex-col justify-center items-center py-6">
        <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-8 lg:my-6">
          <div>
            <p className="text-justify mt-4 text-lg">En esta sucursal se cuenta con actividades como <strong>porra acrobática, gimnasia, mini gym y parkour</strong>, dentro de las instalaciones contamos con:
            </p>
            <ul className="text-lg mt-4 list-disc text-start list-inside">
              <li>Tumble Track de 9m con salida a colchoneta</li>
              <li>Trampolín grande con salida a fosa</li>
              <li>Spring Floor con 9 líneas de mat (piso con resortes)</li>
              <li>Spots, estructuras y área profesional para practicar parkour</li>
              <li>Aparatos para gimnasia femenil y varonil</li>
              <li>Colchonetas y materiales de apoyo para el aprendizaje seguro</li>
              <li>Área de pesas para los alumnos y alumnas</li>
            </ul>
            <div className="hidden w-full h-fit md:flex flex-wrap justify-center items-center gap-5 py-2">
              <NavLink to='/sucursal2#mini' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Mini Gym
              </NavLink>
              <NavLink to='/sucursal2#parkour' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Parkour
              </NavLink>
              <NavLink to='/sucursal2#porristas' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Porristas
              </NavLink>
              <NavLink to='/sucursal2#acrobacia' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Acrobacia
              </NavLink>
              <NavLink to='/sucursal2#gimnasia' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
                Ver Gimnasia
              </NavLink>
            </div>
          </div>
          <div id="s2-instalaciones" className="md:w-full">
            {/* <p className="text-3xl font-semibold text-center mb-6">Instalaciones</p> */}
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
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_5_eh3ygy.jpg"
                  />
                  {/* <p className="legend">Fosa</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_6_oammfs.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_4_b7qmxt.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_3_uvc8kd.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_1_bmxrhf.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_7_uv1wyy.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_2_tv9yqq.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className="w-full h-[216.5px] md:h-[400px] lg:h-[450px] 2xl:h-[650px]">
                  <img className="w-full h-full object-cover object-center rounded-lg"
                    width={1600}
                    height={1066}
                    alt=""
                    src="https://res.cloudinary.com/dovrrjhdw/image/upload/v1686788224/titanesLP/Sucursal%202/Instalaciones_8_wptbyl.jpg" />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>
            </div>

          </div>
          <div className="flex w-full flex-wrap md:hidden justify-center items-center gap-3 py-4">
            <NavLink to='/sucursal2#mini' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
              Ver Mini Gym
            </NavLink>
            <NavLink to='/sucursal2#parkour' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
              Ver Parkour
            </NavLink>
            <NavLink to='/sucursal2#porristas' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
              Ver Porristas
            </NavLink>
            <NavLink to='/sucursal2#acrobacia' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
              Ver Acrobacia
            </NavLink>
            <NavLink to='/sucursal2#gimnasia' className='w-[150px] h-fit rounded-full px-4 py-2 bg-[#b00000] border border-white transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'>
              Ver Gimnasia
            </NavLink>
          </div>
        </div>
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
      </div>
      <div id="mini" className="mt-8 w-full">
        <p className="text-3xl font-semibold text-center my-10 md:my-12 px-5 md:px-10 lg:px-16">Actividades en Sucursal 2</p>
        <div id="minigym-suc2" className="my-8 w-full">
          <p className="text-2xl font-semibold text-center mb-6 px-5 md:px-10 lg:px-16">Mini Gym o Mini Parkour</p>
          <p className="text-justify mb-6 text-lg px-5 md:px-10 lg:px-16">Para niños y niñas de <strong>3 a 5 años</strong>, enseñando elementos básicos de parkour y gimnasia,
            con circuitos de obstáculos para desarrollar <strong>coordinación, flexibilidad, fuerza, equilibrio y confianza en si mismo.</strong> Reforzando las instrucciones preescolares de esperar su turno, <strong>respetar y convivir con los demás.</strong></p>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="h-[200px] w-full bg-no-repeat bg-local bg-[center_top_-600px] lg:bg-cover lg:h-[300px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dovrrjhdw/image/upload/v1686468552/titanesLP/9_rxqkxm.jpg)' }}></div>
            <div className="text-center flex flex-col gap-y-6">
              <p className="text-2xl font-semibold text-center mt-6 mb-6">Horarios</p>
              <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Mi-Vi-Ju-Vi</p>
                  <p className="text-md">De 4:00 pm a 5:00 pm</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Sábado</p>
                  <p id="parkour" className="text-md">De 9:00 am a 10:00 am</p>
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
        <div className="h-[200px] bg-[length:1000px_700px] bg-no-repeat bg-local bg-[center_top_-200px] lg:bg-cover lg:h-[300px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1679603030/titanes/Landing%20Page/Actividades/Parkour/_DSC2527.jpg)' }}></div>
        <div id="parkour2-suc1" className="my-8 px-5 md:px-10 lg:px-16">
          <p className="text-3xl font-semibold text-center my-12">Horarios - Categorías</p>
          <div className="flex flex-col w-full justify-center items-center md:items-start md:flex-row text-center gap-8">
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Ma-Mi-Ju-Vi</p>
                <p className="text-md">De 4:00 pm a 5:15 pm</p>
                <p className="text-md">De 5:15 pm a 6:30 pm</p>
              </div>
              <div className="text-center flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p id="porristas" className="text-md">De 9:30 am a 11:30 am</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-center my-12">Porristas</p>
        <p className="text-justify my-8 px-5 md:px-10 lg:px-16 text-lg">
          Es un deporte femenil y mixto que mezcla diversos elementos acrobáticos de piso y aéreos,
          conformando una rutina con gimnasia de piso, cargadas, pirámides, saltos, baile de forma
          coreografeada impresionando a todo público que lo ve.</p>
        <div className="h-[200px] bg-[length:1000px_700px] bg-no-repeat bg-local bg-[center_top_-200px] lg:bg-cover lg:h-[300px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1679603030/titanes/Landing%20Page/Actividades/Parkour/_DSC2527.jpg)' }}></div>
        <div id="parkour2-suc1" className="my-8 px-5 md:px-10 lg:px-16">
          <p className="text-3xl font-semibold text-center my-12">Horarios - Categorías</p>
          <div className="flex flex-col w-full justify-center items-center md:items-start md:flex-row text-center gap-8">
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">Infantil</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Mi-Vi</p>
                <p className="text-md">De 5:00 pm a 6:00 pm</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">Femenil</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Mi-Vi</p>
                <p id="acrobacia" className="text-md">De 7:00 pm a 8:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-center my-12">Acrobacia</p>
        <p className="text-justify my-8 px-5 md:px-10 lg:px-16 text-lg">
          Clases para aprender exclusivamente acrobacias desde lo más básico hasta lo más avanzado (paradas de manos, vueltas de carro, mortales, flips, giros y demas).</p>
        <div className="h-[200px] bg-[length:1000px_700px] bg-no-repeat bg-local bg-[center_top_-200px] lg:bg-cover lg:h-[300px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1679603030/titanes/Landing%20Page/Actividades/Parkour/_DSC2527.jpg)' }}></div>
        <div id="parkour2-suc1" className="my-8 px-5 md:px-10 lg:px-16">
          <p className="text-3xl font-semibold text-center my-12">Horarios - Categorías</p>
          <div className="flex flex-col w-full justify-center items-center md:items-start md:flex-row text-center gap-8">
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">Niveles 1 al 7</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Mi-Vi</p>
                <p id="gimnasia" className="text-md">De 6:00 pm a 7:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-center my-12">Gimnasia Artística</p>
        <p className="text-justify my-8 px-5 md:px-10 lg:px-16 text-lg">
          Es un deporte dotado de arte y movimiento. Requiere una combinación de fuerza,
          balance, agilidad, y coordinación del cuerpo. Los gimnastas
          realizan varios movimientos continuos que requieren flexibilidad, resistencia, y conocimiento
          de de cada uno de los aparatos, no se requiere tener experiencia.</p>
        <div className="h-[200px] bg-[length:1000px_700px] bg-no-repeat bg-local bg-[center_top_-200px] lg:bg-cover lg:h-[300px] border border-solid border-[#b00000]" style={{ backgroundImage: 'url(https://res.cloudinary.com/dfnqqumsc/image/upload/v1679603030/titanes/Landing%20Page/Actividades/Parkour/_DSC2527.jpg)' }}></div>
        <div id="parkour2-suc1" className="my-8 px-5 md:px-10 lg:px-16">
          <p className="text-3xl font-semibold text-center my-12">Horarios - Categorías</p>
          <div className="flex flex-col w-full justify-center items-center md:items-start md:flex-row text-center gap-8">
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">Femenil</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Ma-Mi-Ju-Vi</p>
                <p className="text-md">De 4:30 pm a 5:30 pm</p>
                <p className="text-md">De 5:30 pm a 6:30 pm</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p className="text-md">De 9:00 am a 11:00 am</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-6 border-2 border-[#b00000] rounded-md h-auto w-[250px] md:w-[295px] p-6 md:p-10 justify-center md:justify-start">
              <p className="text-2xl font-semibold">Varonil</p>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Ma-Mi-Ju-Vi</p>
                <p className="text-md">De 4:30 pm a 5:30 pm</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Ma-Ju</p>
                <p className="text-md">De 5:30 pm a 6:30 pm</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">Sábado</p>
                <p id="ubicacion" className="text-md">De 10:00 am a 12:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ubicacion" className="py-8 px-5 md:px-10 lg:px-16">
        <div className="w-full px-4 h-1 bg-slate-100 rounded mb-6"></div>
        <p className="text-3xl font-semibold text-center mb-6">Ubicación</p>
        <div id="location" className="flex flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
          <div className="flex flex-col gap-y-4 mt-4 text-center">
            <p className="text-2xl font-semibold">Dirección</p>
            <p className="text-md">Calzada Zavaleta, Número 3708-1, Colonia Santa Cruz Buenavista, C.P. 72150 Puebla, Pue.</p>
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
                  De 4:00 pm a 7:30 pm
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-xl font-semibold">
                  Sábados
                </p>
                <p className="text-md">
                  De 9:00 am a 11:30 am
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.292018042998!2d-98.25103648536971!3d19.050894287102352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7bfa3c51a2d%3A0xdcff1bd819746fdf!2sTitanes%20Puebla%20All%20Star%202!5e0!3m2!1ses-419!2smx!4v1673898991254!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-md" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}