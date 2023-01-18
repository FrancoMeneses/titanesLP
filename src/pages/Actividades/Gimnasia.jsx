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
      </div>
    </div>
  )
}