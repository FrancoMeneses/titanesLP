import { Header } from "../components/header"
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import 'tw-elements';

export const Inicio = () => {

  return (
    <div>
      <Header id='p-f-home' title="TITANES ALL-STARS" />
      <div id="banner" className="text-center text-[44px] my-4  font-bold">
        <p>¡Unete al equipo!</p>
      </div>
      <div className="px-5 md:px-10 lg:px-16">
        <div id="s-1">
          <p className="text-center text-4xl mt-8 mb-3 font-bold">
            ¿Por qué entrenar con nosotros?
          </p>
          <p className="text-justify text-xl mt-5">
            Llevamos <strong>más de 7 años</strong> en el deporte formando atletas de alto rendimiento que han destacado en competencias nacionales e internacionales.
          </p>
          <p className="text-justify text-xl mt-5">
            Ofrecemos deportes recreativos y formativos con instalaciones seguras para la práctica del deporte y  con entrenadores capacitados y certificados.
          </p>
          <p className="text-center text-4xl mt-8 mb-3 font-bold">
            Uso de instalaciones
          </p>
          <p className="text-justify text-xl mt-5 ">
            Nuestras instalaciones están <strong>abiertas a todo público</strong> para la práctica de algún deporte o actividad de forma individual o grupal.
            No requieres estar inscrito en la academia para visitarnos en los <strong>OPEN GYM</strong> que tenemos para ir a practicar por horas tu estilo libre.
          </p>
          <p className="text-center text-4xl mt-8 mb-3 font-bold">
            Entrenamiento a grupos externos
          </p>
          <p className="text-justify text-xl mt-5">
            Si deseas aprender <strong>acrobacias</strong> o <strong>gimnasia</strong> de piso para complementar algún deporte que practicas puedes contactarnos,
            hemos tenido grupos de <strong>taekwondo</strong> donde reforzamos la parte acrobática para sus competencias de estilo libre, asi como otros deportes.
          </p>
        </div>
        <div id="s-2" className="flex flex-col items-center">
          <div>
            <p className="text-center text-4xl mt-8 mb-12 font-bold">
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
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Parkour</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
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
          <div className="text-center flex flex-col items-center gap-y-4 mt-8">
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
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Cheerleading</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Parkour</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Gimnasia Femenil</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Gimnasia Varonil</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="carousel-caption block absolute -top-6 text-center">
                      <h5 className="text-xl font-bold">Acrobacia</h5>
                    </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src="./src/assets/Logo2.png"
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
        </div>
        <div id="s-3">
          <div className="flex flex-col justify-center">
            <p className="text-center text-3xl mt-8 mb-3 font-bold">Agenda tu clase muestra</p>
            <p className="text-justify text-xl mt-5">
              <strong>Inscripciones abiertas durante todo el año</strong>, puedes agendar tu clase muestra
              para conocer sobre el deporte o si deseas puedes inscribirte directamente a la academia.
            </p>
          </div>
          {/* 2227080520 */}
          <div className="w-full flex justify-center my-8">
            <a className="flex flex-row justify-between items-center w-48 rounded-full border border-black border-solid p-3 transition duration-300 leading-snug hover:bg-[#25d366] hover:text-white" href="https://wa.me/2212345135?text=Quiero%20agendar%20mi%20clase%20muestra">
              <p className="font-semibold">¡Escríbenos!</p>
              <BsWhatsapp className="w-10 h-10"></BsWhatsapp>
            </a>
          </div>
          <div className="flex flex-col gap-y-6">
            <p className="text-3xl font-semibold text-center">Síguenos en nuestras redes sociales</p>
            <div className="flex justify-center gap-x-8">
              <a className="transition ease-in duration-300 text-black hover:-translate-y-1 hover:scale-110 hover:text-rose-900" href="https://www.instagram.com/titanespueblaallstars/" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="w-10 h-10"></BsInstagram>
              </a>
              <a className="transition ease-in duration-300 text-black hover:-translate-y-1 hover:scale-110 hover:text-blue-700" href="https://www.facebook.com/TitanesPueblaallstars/" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="w-10 h-10"></BsFacebook>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}