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
      </div>
    </div>
  )
}