import { Header } from "../../components/header"

export const Gimnasia = () => {
  return (
    <div>
      <Header id="p-f-gim" title="GIMNASIA"></Header>
      <div className="px-5 md:px-10 lg:px-16">
        <div id="title-info" className="flex flex-col gap-y-6">
          <p className="text-center text-3xl mt-8 mb-3 font-bold">
            ¿Qué es el gimnasia en Titanes Puebla All-Stars?
          </p>
          <div className="flex flex-col gap-y-6 text-justify md:text-lg lg:text-lg">
            <p>
              La gimnasia es un deporte dotado de arte y movimiento. Requiere una combinación de fuerza,
              balance, agilidad, y coordinación del cuerpo en el salón donde se practica. Los gimnastas
              realizan varios movimientos continuos que requieren flexibilidad, resistencia, y conocimiento
              de los saltos en la viga de balance y en el piso.
            </p>
          </div>
        </div>
        <div id="cats" className="flex flex-col gap-y-6 text-center mt-8">
          <p className="text-4xl font-bold">
            Categorías
          </p>
          <div className="flex flex-col justify-center items-center gap-y-12 md:flex-row md:w-full md:gap-x-8 lg:gap-x-8">
            <div id="cats-infantiles">
              <p className="text-xl font-semibold">
                Infantiles
              </p>
              <p className="italic">
                Edad de 6 a 16 años
              </p>
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg" alt="..." />
              <p className="text-justify">
                Para niños y niñas que desean aprender o que ya cuenten con experiencia.
              </p>
            </div>
            <div id="cats-femeniles">
              <p className="text-xl font-semibold">
                Femeniles
              </p>
              <p className="italic">
                Edad de 15 a 25 años
              </p>
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg" alt="..." />
              <p className="text-justify">
                Para niñas nuevas que desean aprender o que ya cuenten con experiencia.
              </p>
            </div>
            <div id="cats-mixtas">
              <p className="text-xl font-semibold">
                Mixtas
              </p>
              <p className="italic">
                Edad desde 15 años en adelante
              </p>
              <img src="https://res.cloudinary.com/dfnqqumsc/image/upload/v1674070603/titanes/Landing%20Page/Logo2.jpg" alt="..." />
              <p className="text-justify">
                Para personas que desean aprender o que ya cuenten con experiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}