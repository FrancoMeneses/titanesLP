import { Header } from "../components/header"

export const Aviso = () => {
  return (
    <div>
      <Header id='p-f-aviso' title="AVISO DE PRIVACIDAD"></Header>
      <div className="px-5 md:px-10 lg:px-16">
        <div id="banner" className="text-center text-[38px] md:text-[44px] lg:text-[44px] my-8  font-bold">
          <p>Aviso de Privacidad Integral</p>
        </div>
        <div className="flex flex-col gap-y-8 text-xl">
          <p className="text-justify font-light">
            Titanes Puebla All-Stars, con domicilio en Calzada Zavaleta, Número 3708-1,
            Colonia Santa Cruz Buenavista, Código Postal 72150, Municipio Puebla, Estado Puebla, México,
            en cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su Reglamento,
            hacen de su conocimiento el tipo de datos personales que solicitaremos, uso, transferencia, medios para ejercer
            sus derechos ARCO y procedimiento por medio del cual se comunicarán los cambios al presente aviso.
          </p>
          <p className="text-start font-normal">
            Datos que se recaban
          </p>
          <p className="text-start font-light">
            Los datos que podremos recabar serán:
          </p>
          <div className="text-start font-light">
            <ul className="list-none">
              <li>{`a) Nombre completo`}</li>
              <li>{`b) Domicilio`}</li>
              <li>{`c) CURP`}</li>
              <li>{`d) Edad`}</li>
              <li>{`e) Sexo`}</li>
              <li>{`f) Fecha de nacimiento`}</li>
              <li>{`g) Nombres de familiares directos para contacto.`}</li>
            </ul>
          </div>
          <p className="text-start font-normal">
            Uso de los datos que se recaban
          </p>
          <p className="text-start font-light">
            Los datos que Titanes Puebla All-Stars, recaba de manera directa de usted, son utilizados para:
          </p>
          <div className="text-start font-light">
            <ul className="list-none">
              <li>{`a) El cumplimiento de la relación jurídica.`}</li>
              <li>{`b) Para proporcionarlas al Instituto Mexicano del Seguro Social y/o para el uso de la póliza de accidentes contratada, para dar una mejor atención al menor en caso de lesión o accidente.`}</li>
              <li>{`c) Contacto en caso de accidente del menor.`}</li>
              <li>{`d) Para los procesos de cobranza que pudieran derivarse de la relación jurídica.`}</li>
              <li>{`e) Facturación.`}</li>
              <li>{`f) Recabar información estadística para nuestra página de internet.`}</li>
            </ul>
          </div>
          <p className="text-start font-normal">
            Transferencia de sus datos personales
          </p>
          <p className="text-start font-light">
            Titanes Puebla All-Stars, podrá transferir sus datos personales cuando:
          </p>
          <div className="text-start font-light">
            <ul className="list-none">
              <li>{`a) Sea necesaria para la salvaguarda del interés público o para la procuración o administración de justicia.`}</li>
              <li>{`b) Sea necesaria para el reconocimiento, ejercicio o defensa de un proceso judicial.`}</li>
              <li>{`c) Para dar seguimiento a los comentarios, consultas, quejas y demás negociaciones que usted presente.`}</li>
            </ul>
          </div>
          <p className="text-start font-normal">
            Medio y procedimiento para ejercer sus derechos ARCO
          </p>
          <p className="text-start font-light">
            Usted o su representante legal, podrán ejercer sus derechos ARCO a través de los documentos que acrediten la identidad del titular o su
            representante legal y enviarlo a través de correo electrónico siguiente: informes@titanespuebla.com.mx
          </p>
          <p className="text-start font-light">
            La solicitud que presente deberá contener al menos:
          </p>
          <div className="text-start font-light">
            <ul className="list-none">
              <li>{`a) El nombre completo del solicitante.`}</li>
              <li>{`b) Relación jurídica y comprobante de la misma, con el menor.`}</li>
              <li>{`c) Correo electrónico en donde desea recibir la información del trámite.`}</li>
              <li>{`d) Adjuntar en formato PDF los documentos con los que se acredite la identidad o personalidad del solicitante.`}</li>
              <li>{`e) Una narración clara y precisa de los datos sobre los que busca ejercer los derechos ARCO que tiene a su favor.`}</li>
              <li>{`f) Elementos que nos permitan localizar los datos en cuestión.`}</li>
              <li>{`g) Firma del titular o apoderado legal.`}</li>
            </ul>
          </div>
          <p className="text-start font-light">
            Esta solicitud será atendida en un plazo no mayor a veinte días hábiles contados a partir de su recepción. El mismo procedimiento deberá
            seguirse en caso de la revocación del consentimiento.
          </p>
          <p className="text-start font-normal">
            Modificaciones al presente aviso de privacidad
          </p>
          <p className="text-start font-light">
            Titanes Puebla All-Stars, se reservan el derecho de cambiar a través de la supresión o agregado de información del presente aviso en
            cualquier momento, por lo que en dicha hipótesis, se publicaran los cambios en la presente página de internet con la fecha de modificación
            del mismo, por lo que le recomendamos visitar periódicamente la presente página para los fines antes mencionados.
          </p>
          <p className="text-start font-normal">
            Última actualización 11 de enero de 2023
          </p>
        </div>
      </div>
    </div>
  )
}