import { Header } from "../../components/header"

export const Parkour = () => {
  return (
    <div>
      <Header id="p-f-park" title="PARKOUR"></Header>
      <div className="px-5 md:px-10 lg:px-16">
        <div id="title-info" className="flex flex-col gap-y-6">
          <p className="text-center text-3xl mt-8 mb-3 font-bold">
            ¿Qué es el parkour en Titanes Puebla All-Stars?
          </p>
          <div className="flex flex-col gap-y-6 text-justify md:text-lg lg:text-lg">
            <p>
              Es el arte de desplazarte de un lugar a otro atravesando obstáculos y dificultades en el camino.  
              Nuestras instalaciones ofrecen un entorno simulado del mundo real donde puede aprender desde los 
              conceptos básicos del parkour hasta acrobacias avanzadas del freerunning.
            </p>
            <p>
              Puede ser practicado por niños, niñas, jóvenes y adultos de forma recreativa o competitiva.
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
              <img src="./src/assets/Logo2.png" alt="..." />
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
              <img src="./src/assets/Logo2.png" alt="..." />
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
              <img src="./src/assets/Logo2.png" alt="..." />
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