import { Header } from "../../components/header"

export const Sucursal1 = () => {
  return (
    <div>
      <Header id='p-f-suc1' title='SUCURSAL 1'></Header>
      <div id="info-suc2" className="px-5 md:px-10 lg:px-16 text-center flex flex-col justify-center items-center gap-y-6">
        <div className="flex flex-col gap-y-4 mt-4">
          <p className="text-2xl font-semibold">Dirección</p>
          <p className="text-md">Calle Guadalajara, Número 47, Colonia Independencia, C.P. 72150 Puebla, Pue.</p>
        </div>
        <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7992085668384!2d-98.25611880546826!3d19.072563849706892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f297ee5555%3A0xe7ac5cc53565ad1f!2sTITANES%20PUEBLA%20ALL-STARS!5e0!3m2!1ses-419!2smx!4v1673897593961!5m2!1ses-419!2smx" className="w-[320px] h-[320px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex flex-col gap-y-8">
          <div>
            <p className="text-2xl font-semibold">
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
    </div>
  )
}