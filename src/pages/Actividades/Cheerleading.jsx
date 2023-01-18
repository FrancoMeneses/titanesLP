import { Header } from "../../components/header"

export const Cheerleading = () => {
  return (
    <div>
      <Header id="p-f-cheer" title="CHEERLEADING"></Header>
      <div className="px-5 md:px-10 lg:px-16">
        <div id="title-info" className="flex flex-col gap-y-6">
          <p className="text-center text-3xl mt-8 mb-3 font-bold">
            ¿Qué es el cheerleading en Titanes Puebla All-Stars?
          </p>
          <div className="flex flex-col gap-y-6 text-justify md:text-lg lg:text-lg">
            <p>
              Es un deporte femenil y mixto que mezcla diversos elementos acrobáticos de piso y aéreos,
              conformando una rutina con gimnasia de piso, cargadas, pirámides, saltos, baile de forma
              coreografeada impresionando a todo público que lo ve.
            </p>
            <p>
              En Titanes Puebla All-Stars hemos formado atletas de alto rendimiento que han sido seleccionados
              dentro de filtros de mas de 2 mil porristas de todo México, estando dentro de los 24 mejores del
              país para representar a México en la máxima competencia mundial llamada ICU, obteniendo resultados
              dentro del top 3 a nivel mundial, contra países como USA, Canada, Alemania, China, Japón, Noruega,
              Taiwan, Italia, Chile, entre otros más.
            </p>
            <p>
              El cheerleading fue nombrado como deporte olímpico en junio del 2021, una gran noticia para el deporte.
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