import { Header } from "../../components/header"

export const Sucursal1 = () => {
  return (
    <div>
      <Header id='p-f-suc1' title='SUCURSAL 1'></Header>
      <div id="s1-info-suc1" className="px-5 md:px-10 lg:px-16 text-center flex flex-col justify-center items-center gap-y-6">
        <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8 md:flex-row md:gap-x-4 lg:my-6">
          <div className="flex flex-col gap-y-4 mt-4">
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7992085668384!2d-98.25611880546826!3d19.072563849706892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f297ee5555%3A0xe7ac5cc53565ad1f!2sTITANES%20PUEBLA%20ALL-STARS!5e0!3m2!1ses-419!2smx!4v1673897593961!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div id="s2-images" className="mt-8 px-5 md:px-10 lg:px-16">
        <div className="w-full px-4 h-1 bg-slate-500 rounded opacity-50 mb-6"></div>
        <p className="text-2xl font-semibold text-center mb-6">Instalaciones</p>
        <div>
          <div className="flex justify-center items-center">
            <div id="carousel-sucursales-sucursal1" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carousel-sucursales-sucursal1"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-sucursales-sucursal1"
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
                    <h5 className="text-xl font-bold">Área de entrenamiento</h5>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption block absolute -top-6 text-center">
                    <h5 className="text-xl font-bold">Recepción</h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carousel-sucursales-sucursal1"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carousel-sucursales-sucursal1"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="w-full px-4 h-1 bg-slate-500 rounded opacity-50 mb-6"></div>
          <p className="text-2xl font-semibold text-center mb-6">Actividades en Sucursal 1</p>
          <div id="parkour-suc1">
            <p className="text-2xl font-semibold text-center mb-6">Parkour</p>
            <div className="flex flex-col md:flex-row md:jusitify-around md:w-full lg:flex-row lg:justify-around lg:w-full justify-center items-center">
              <div id="carousel-sucursales-sucursal1-parkour" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carousel-sucursales-sucursal1-parkour"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-sucursales-sucursal1-parkour"
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
                  data-bs-target="#carousel-sucursales-sucursal1-parkour"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carousel-sucursales-sucursal1-parkour"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="text-center flex flex-col gap-y-6">
                <p className="text-2xl font-semibold text-center mt-6 mb-6">Horarios</p>
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Martes a viernes</p>
                  <p className="text-md">De 4:00 pm a 5:15 pm</p>
                  <p className="text-md">De 5:15 pm a 6:30 pm</p>
                </div>
                <div className="text-center flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Sábado</p>
                  <p className="text-md">De 9:30 a 11:30</p>
                </div>
              </div>
            </div>
          </div>
          <div id="minigym-suc1" className="my-8">
            <div className="w-full px-4 h-1 bg-slate-500 rounded opacity-50 mb-6"></div>
            <p className="text-2xl font-semibold text-center mb-6">Mini Gym</p>
            <div className="flex flex-col md:flex-row md:jusitify-around md:w-full lg:flex-row lg:justify-around lg:w-full justify-center items-center">
              <div id="carousel-sucursales-sucursal1-minigym" className="carousel slide carousel-dark relative" data-bs-ride="carousel">
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
                <div className="carousel-inner relative w-full overflow-hidden  md:h-[400px] lg:h-[600px] md:w-[400px] lg:w-[600px]">
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
              </div>
              <div className="text-center flex flex-col gap-y-6">
                <p className="text-2xl font-semibold text-center mt-6 mb-6">Horarios</p>
                <div className="flex flex-col gap-y-4">
                  <p className="text-xl font-semibold">Martes y viernes</p>
                  <p className="text-md">De 4:00 pm a 5:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}