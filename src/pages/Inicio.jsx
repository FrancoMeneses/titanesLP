import { Header } from "../components/header"
import { BsWhatsapp} from "react-icons/bs"
import 'tw-elements'

export const Inicio = () => {

  return (
    <main>
      <Header id='p-f-home' title="TITANES ALL-STARS" />
      <div className="flex flex-col gap-y-12">
        <section className="bg-[#1e1e1e] flex flex-col md:flex-row lg:flex-row justify-center items-center text-white py-5">
          <p className="font-semibold text-2xl text-center w-[80%] mt-6 lg:mt-0">¡Unete al equipo!</p>
          <div className="w-full h-[600px] my-8 md:my-0 lg:my-0">
            <div className="w-full h-full relative">
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674875258/titanes/Landing%20Page/mixto_header2.jpg" className="absolute h-[280px] bottom-0 left-0 object-contain rounded-lg border-2 border-white max-sm:left-[24%] max-sm:top-[20%] max-md:h-[360px] max-md:top-[19%] max-md:left-[33%] md:h-[320px] md:top-[23%] md:left-[33%] lg:h-[510px] lg:top-12 lg:left-[28%]" />
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674875258/titanes/Landing%20Page/mixto_header3.jpg" className="absolute right-0 bottom-0 h-[150px] object-contain rounded-lg border-2 border-white  max-sm:right-0 max-md:right-0 max-md:h-[180px] md:h-[150px] md:top-0 md:right-0 lg:h-[180px] lg:top-0" />
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674875258/titanes/Landing%20Page/mixto_header4.jpg" className="absolute h-[150px] object-contain rounded-lg border-2 border-white max-md:h-[180px] md:bottom-0 md:h-[150px] lg:h-[180px] lg:bottom-0 lg:left-0" />
            </div>
          </div>
        </section>
        <section className="w-full h-full text-[#1e1e1e] py-5">
          <div id="s-1" className="px-5 md:px-10 lg:px-16 flex flex-col gap-y-8">
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
                Entrenamiento a grupos externos
              </p>
              <p className="text-justify text-xl mt-5">
                Si deseas aprender <strong>acrobacias</strong> o <strong>gimnasia</strong> de piso para complementar algún deporte que practicas puedes contactarnos,
                hemos tenido grupos de <strong>taekwondo</strong> donde reforzamos la parte acrobática para sus competencias de estilo libre, asi como otros deportes.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full h-full text-white bg-[#1e1e1e] py-5">
          <div id="s-2" className="px-5 md:px-10 lg:px-16 flex flex-col items-center">
            <div>
              <p className="text-center text-4xl mb-12 font-bold">
                Contamos con dos sucursales
              </p>
            </div>
            <div className="text-center flex flex-col items-center gap-y-4">
              <p className="text-3xl font-semibold">
                Sucursal 1
                (a lado de Cruz del Sur)
              </p>
              <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7992085668384!2d-98.25611880546826!3d19.072563849706892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f297ee5555%3A0xe7ac5cc53565ad1f!2sTITANES%20PUEBLA%20ALL-STARS!5e0!3m2!1ses-419!2smx!4v1673897593961!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold mb-4">Actividades en Sucursal 1</p>
                {/* <--Start Carousel Sucursal 1--> */}
                <div id="carousel-inicio-sucursal1" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      type="button"
                      data-bs-target="#carousel-inicio-sucursal1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carousel-inicio-sucursal1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                  <div className="carousel-inner relative w-full overflow-hidden  md:h-[400px] lg:h-[600px] md:w-[400px] lg:w-[600px]">
                    <div className="carousel-item active relative float-left w-full">
                      <img
                        src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                        className="block w-full"
                        alt="..."
                      />
                      <div className="carousel-caption block absolute -top-6 text-center">
                        <h5 className="text-xl font-bold">Parkour</h5>
                      </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                      <img
                        src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                        className="block w-full"
                        alt="..."
                      />
                      <div className="carousel-caption block absolute -top-6 text-center">
                        <h5 className="text-xl font-bold">Mini Gym</h5>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal1"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal1"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* <--End Carousel Sucursal 1--> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full py-5 text-[#1e1e1e]">
          <div className="text-center flex flex-col items-center gap-y-4">
            <p className="text-3xl font-semibold mb-6">
              Sucursal 2
              (sobre Zavaleta)
            </p>
            <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.292018042998!2d-98.25103648536971!3d19.050894287102352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7bfa3c51a2d%3A0xdcff1bd819746fdf!2sTitanes%20Puebla%20All%20Star%202!5e0!3m2!1ses-419!2smx!4v1673898991254!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-4">Actividades en Sucursal 2</p>
              {/* <--Start Carousel Sucursal 2--> */}
              <div id="carousel-inicio-sucursal2" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-inicio-sucursal2"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden  md:h-[400px] lg:h-[600px] md:w-[400px] lg:w-[600px]">
                  <div className="carousel-item active relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Cheerleading</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Parkour</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Gimnasia Femenil</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Gimnasia Varonil</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Acrobacia</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Mini Gym</h5>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carousel-inicio-sucursal2"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carousel-inicio-sucursal2"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <--End Carousel Sucursal 2--> */}
            </div>
          </div>
        </section>
        <section className="w-full h-full text-white bg-[#1e1e1e] pt-5">
          <div id="s-3" className="px-5 md:px-10 lg:px-16">
            <div className="flex flex-col justify-center">
              <p className="text-center text-3xl mb-3 font-bold">Agenda tu clase muestra</p>
              <p className="text-justify text-xl mt-5">
                <strong>Inscripciones abiertas durante todo el año</strong>, puedes agendar tu clase muestra
                para conocer sobre el deporte o si deseas puedes inscribirte directamente a la academia.
              </p>
            </div>
            <div className="w-full flex justify-center my-8">
              <a className="flex flex-row justify-between items-center w-48 rounded-full border border-white border-solid p-3 transition duration-300 leading-snug hover:bg-[#25d366] hover:text-white" href="https://wa.me/2227080520?text=Quiero%20agendar%20mi%20clase%20muestra">
                <p className="font-semibold">¡Escríbenos!</p>
                <BsWhatsapp className="w-10 h-10"></BsWhatsapp>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}