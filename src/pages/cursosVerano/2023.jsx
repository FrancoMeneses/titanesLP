import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

export function CursoVerano2023() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div className="flex justify-center items-center w-full h-auto py-8 bg-gradient-to-b from-[#b00000] to-[#000000]">
        <p id='mini' className="text-center text-white text-4xl md:text-6xl lg:text-6xl self-start">CURSO DE VERANO 2023</p>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-6 px-5 md:px-10 lg:px-16 py-8">
        <section className="w-full flex flex-col justify-center items-center gap-8">
          <div id="header-container" className="w-full flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-4xl text-center">Mini Gym/Parkour</h2>
            <p className="font-bold text-2xl text-cente">3 a 5 años</p>
          </div>
          <div id="media-container" className="w-full flex flex-col justify-center items-center gap-5">
            <video className="w-auto md:w-[640px] md:h-[480px]" autoPlay muted controls>
              <source src="https://res.cloudinary.com/dovrrjhdw/video/upload/v1686468718/titanesLP/VIDEO_PROMO_MAYO2023_nuennl.mp4" type="video/mp4" />
            </video>
          </div>
          <div id='mini-info' className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Fechas y horarios</h3>
              {/* <ul className="list-disc text-start list-inside">
                <li>
                  Del 24 de julio al 11 de agosto de lunes a viernes de 9:00 am a 12:00 pm.
                </li>
              </ul> */}
              <p className="text-justify">Del 24 de julio al 11 de agosto de lunes a viernes de 9:00 am a 12:00 pm.</p>
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Actividades</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Actividades de gimnasia, parkour, taekwondo, baile para su edad.
                </li>
                <li>
                  Ejercicios para el desarrollo de coordinación y control de su cuerpo.
                </li>
                <li>
                  Manualidades. (incluye material)
                </li>
                <li>
                  Cocina fría (incluye material)
                </li>
                <li>
                  Pintura (incluye material)
                </li>
                <li>
                  Inglés y francés.
                </li>
                <li>
                  Circuitos de escalar, trepar, rodar, correr y más.
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Cupo limite 10 alumnos(as) – 2 entrenadoras.
                </p>
              </div> 
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Costos</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Costo normal - $4150 pesos.
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Promociones</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Antes del 17 de junio - $3150 pesos.
                </li>
                <li>
                  Antes del 30 de junio - $3355 pesos. 
                </li>
                <li>
                  1 al 15 de julio - $3550 pesos. 
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Puede apartar la promoción y lugar con el 50%, liquidando 5 dias antes de inicio del curso.
                </p>
                <p className='font-semibold'>
                  *Contamos con descuento por hermanos(as).
                </p>
              </div>                
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Ubicaciones</h3>
              <div className="w-full flex flex-col">
                <p>
                  Esta actividad se impartirá en:
                </p>
              </div>
              <ul className="list-disc text-start list-inside">
                <li>
                  <NavLink to='/sucursal1#ubicacion' className='hover:underline'>
                    Sucursal 1 (Cruz del Sur)
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/sucursal2#ubicacion' className='hover:underline'>
                    Sucursal 2 (Calzada Zavaleta)
                  </NavLink>
                </li>
              </ul>
              <div id='parkour'></div>            
            </div>
          </div>
        </section>
        <div className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
        <section className="w-full flex flex-col justify-center items-center gap-8">
          <div id="header-container" className="w-full flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-4xl text-center">Parkour</h2>
            <p className="font-bold text-2xl text-cente">6 a 15 años</p>
          </div>
          <div id="media-container" className="w-full flex flex-col justify-center items-center gap-5">
            <video className="w-auto md:w-[640px] md:h-[480px]" autoPlay muted controls>
              <source src="https://res.cloudinary.com/dovrrjhdw/video/upload/v1686468705/titanesLP/video_promocional_de_mayo_parkour_r49hfy.mp4" type="video/mp4" />
            </video>
          </div>
          <div id='parkour-info' className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Fechas y horarios</h3>
              {/* <ul className="list-disc text-start list-inside">
                <li>
                  Del 24 de julio al 11 de agosto de lunes a viernes
                </li>
              </ul> */}
              <p className="text-justify">Del 24 de julio al 11 de agosto de lunes a viernes</p>
              <div>
                <p>Contamos con <strong>3 grupos</strong></p>
                <ul className="list-disc text-start list-inside">
                  <li>
                    9:00 am a 11:00 am - Cupo límite de 10 alumnos.
                  </li>
                  <li>
                    12:00 pm a 2:00 pm - Cupo límite de 10 alumnos.
                  </li>
                  <li>
                    4:00 pm a 6:00 pm- Cupo límite de 10 alumnos.
                  </li>
                </ul>
                <p className='font-semibold'>*Si requiere extendido de 9 am a 2 pm, favor de preguntar</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Actividades</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Actividades de parkour, taekwondo y acrobacia.
                </li>
                <li>
                  Manualidades. (incluye material)
                </li>
                <li>
                  Juegos recreativos para su edad.
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Cupo limite 10 alumnos(as).
                </p>
              </div> 
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Costos</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Costo normal - $3300 pesos.
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Promociones</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Antes del 17 de junio - $2600 pesos.
                </li>
                <li>
                  Antes del 30 de junio - $2800 pesos. 
                </li>
                <li>
                  1 al 15 de julio - $3000 pesos. 
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Puede apartar la promoción y lugar con el 50%, liquidando 5 dias antes de inicio del curso.
                </p>
                <p className='font-semibold'>
                  *Contamos con descuento por hermanos(as).
                </p>
              </div>                
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Ubicaciones</h3>
              <div className="w-full flex flex-col">
                <p>
                  Esta actividad se impartirá en:
                </p>
              </div>
              <ul className="list-disc text-start list-inside">
                <li>
                  <NavLink to='/sucursal1#ubicacion' className='hover:underline'>
                    Sucursal 1 (Cruz del Sur)
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/sucursal2#ubicacion' className='hover:underline'>
                    Sucursal 2 (Calzada Zavaleta)
                  </NavLink>
                </li>
              </ul>
              <div id="gimnasiayporristas"></div>             
            </div>
          </div>
        </section>
        <div className="w-full px-4 h-1 bg-slate-100 rounded my-6"></div>
        <section className="w-full flex flex-col justify-center items-center gap-8">
          <div id="header-container" className="w-full flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-4xl text-center">Gimnasia y Porristas</h2>
            <p className="font-bold text-2xl text-cente">6 a 15 años</p>
          </div>
          <div id="media-container" className="w-full flex flex-col justify-center items-center gap-5">
            {/* <video className="w-auto md:w-[640px] md:h-[480px]" autoPlay muted controls>
              <source src="https://res.cloudinary.com/dovrrjhdw/video/upload/v1686468718/titanesLP/VIDEO_PROMO_MAYO2023_nuennl.mp4" type="video/mp4" />
            </video> */}
            <div className=" w-auto md:w-[640px] lg:w-[900px] h-full border border-white rounded-lg">
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
          </div>
          <div id='gimnasiayporristas-info' className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Fechas y horarios</h3>
              {/* <ul className="list-disc text-start list-inside">
                <li>
                  Del 24 de julio al 11 de agosto de lunes a viernes
                </li>
              </ul> */}
              <p className="text-justify">Del 24 de julio al 11 de agosto de lunes a viernes</p>
              <div>
                <p>Contamos con <strong>1 grupos</strong></p>
                <ul className="list-disc text-start list-inside">
                  <li>
                    9:00 am a 11:00 am - Cupo límite de 12 alumnos.
                  </li>
                </ul>
                <p className='font-semibold'>*Si requiere extendido de 9 am a 2 pm, favor de preguntar</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Actividades</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Actividades de gimnasia artística, porristas, baile, flexibilidad y acrobacias.
                </li>
                <li>
                  Manualidades. (incluye material)
                </li>
                <li>
                  Juegos recreativos para su edad.
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Cupo limite 12 alumnos(as).
                </p>
              </div> 
            </div>
            <div className="w-full flex flex-col justify-center gap-4">
              <h3 className="font-semibold text-2xl text-center">Costos</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Costo normal - $3300 pesos.
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Promociones</h3>
              <ul className="list-disc text-start list-inside">
                <li>
                  Antes del 17 de junio - $2600 pesos.
                </li>
                <li>
                  Antes del 30 de junio - $2800 pesos. 
                </li>
                <li>
                  1 al 15 de julio - $3000 pesos. 
                </li>
              </ul>
              <div className="w-full flex flex-col">
                <p className='font-semibold'>
                  *Puede apartar la promoción y lugar con el 50%, liquidando 5 dias antes de inicio del curso.
                </p>
                <p className='font-semibold'>
                  *Contamos con descuento por hermanos(as).
                </p>
              </div>                
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-center">Ubicaciones</h3>
              <div className="w-full flex flex-col">
                <p>
                  Esta actividad se impartirá en:
                </p>
              </div>
              <ul className="list-disc text-start list-inside">
                <li>
                  <NavLink to='/sucursal2#ubicacion' className='hover:underline'>
                    Sucursal 2 (Calzada Zavaleta)
                  </NavLink>
                </li>
              </ul>               
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}