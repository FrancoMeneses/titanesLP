import { createContext, useState } from "react"

export const TitanesContext = createContext()

export function TitanesProvider({children}){

  const NUM_WA = '2213227932'

  const [waForm, setWaForm] = useState({
    clasePara: 'para mi',
    nombre: '',
    edad: '',
    actividad: 'Mini Gym'
  })

  const [veranoForm, setVeranoForm] = useState({
    horariov: 'martes a viernes de 4:30 pm a 6:30 pm',
    nombrev: '',
    edadv: '',
    interesadov: 'mini gym'
  })

  const handleModal = (e) => {
    if(e.target.id === 'regular'){
      const modal = document.getElementById('modalId')
      modal.classList.remove('hidden')
      modal.classList.add('flex')
    }
    if(e.target.id === 'verano'){
      const modalVerano = document.getElementById('modalVerano')
      modalVerano.classList.remove('hidden')
      modalVerano.classList.add('flex')
    }
  }

  const handleEditContactForm = (e) => {
    let element = e.target.id.split('-')[0]
    setWaForm({
      ...waForm,
      [e.target.name] : e.target.value
    })
      let ws = e.target.value.trim()
      if(e.target.value === ''  || ws.length === 0){
        document.getElementById(`${element}-p`).classList.remove('hidden')
      }else{
        document.getElementById(`${element}-p`).classList.add('hidden')
      }
}

  const handleSubmitForm = (e) => {
    e.preventDefault()
    let empty = false
    for (let field in waForm){
      if(field === 'lugarContacto') continue
      if(waForm[field].length === 0){
        document.getElementById(`${field}-p`).classList.remove('hidden')
        empty = true
      }
    }
    if(!empty){
      const newLine = '%0a'
      const space = '%20'
      let message = ''
      for (let field in waForm){
        let encoded = ''
        let fieldMessage = ''
        let trim = ''
        switch(field){
          case 'clasePara':
            trim = waForm[field].trim()
            encoded = trim.replaceAll(' ','%20')
            if(waForm[field] === 'para mi'){
              fieldMessage = `¡Hola!${space}me gustaría${space}agendar${space}una${space}clase${space}*${encoded}*,${space}mi${space}nombre${space}es${space}`
              message = message + fieldMessage 
            }
            if(waForm[field] === 'para mi hijo/a'){
              fieldMessage = `¡Hola!${space}me gustaría${space}agendar${space}una${space}clase${space}*${encoded}*,${space}su${space}nombre${space}es${space}`
              message = message + fieldMessage 
            }
            if(waForm[field] === 'para otra persona'){
              fieldMessage = `¡Hola!${space}me gustaría${space}agendar${space}una${space}clase${space}a${space}nombre${space}de${space}`
              message = message + fieldMessage
            }
            break
          case 'nombre':
            trim = waForm[field].trim()
            encoded = trim.replaceAll(' ','%20')
            fieldMessage = `*${encoded}*,${space}`
            message = message + fieldMessage
            break
          case 'edad':
            encoded = waForm[field].replaceAll(' ','%20')
            fieldMessage = `edad:${space}*${encoded}${space}años*,${space}`
            message = message + fieldMessage
            break
          case 'actividad':
            encoded = waForm[field].replaceAll(' ','%20')
            fieldMessage = `para${space}la${space}actividad${space}de${space}*${encoded}*`
            message = message + fieldMessage
            break
        }
      }
      window.open(`https://wa.me/${NUM_WA}?text=${message}`,)
      const modal = document.getElementById('modalId')
      modal.classList.remove('flex')
      modal.classList.add('hidden')
      setWaForm({
        clasePara: 'para mi',
        nombre: '',
        edad: '',
        actividad: 'Mini Gym'
      })
    }
  }

  const handleEditVeranoForm = (e) => {
    let element = e.target.id.split('-')[0]
    setVeranoForm({
      ...veranoForm,
      [e.target.name] : e.target.value
    })
      let ws = e.target.value.trim()
      if(e.target.value === ''  || ws.length === 0){
        document.getElementById(`${element}-vp`).classList.remove('hidden')
      }else{
        document.getElementById(`${element}-vp`).classList.add('hidden')
      }
}

const handleSubmitVeranoForm = (e) => {
  e.preventDefault()
  let empty = false
  for (let field in veranoForm){
    if(veranoForm[field].length === 0){
      document.getElementById(`${field}-vp`).classList.remove('hidden')
      empty = true
    }
  }
  if(!empty){
    const newLine = '%0a'
    const space = '%20'
    let message = ''
    for (let field in veranoForm){
      let encoded = ''
      let fieldMessage = ''
      let trim = ''
      switch(field){
        case 'horariov':
          trim = veranoForm[field].trim()
          encoded = trim.replaceAll(' ','%20')
          fieldMessage = `¡Hola!${space}me${space}gustaría${space}agendar${space}la${space}visita${space}al${space}curso${space}de${space}verano${space}en${space}el${space}horario${space}de${space}*${encoded}*,${space}`
          message = message + fieldMessage
          break
        case 'nombrev':
          trim = veranoForm[field].trim()
          encoded = trim.replaceAll(' ','%20')
          fieldMessage = `a${space}nombre${space}de${space}*${encoded}*,${space}`
          message = message + fieldMessage
          break
        case 'edadv':
          encoded = veranoForm[field].replaceAll(' ','%20')
          fieldMessage = `edad:${space}*${encoded}${space}años*,${space}`
          message = message + fieldMessage
          break
        case 'interesadov':
          encoded = veranoForm[field].replaceAll(' ','%20')
          fieldMessage = `estoy${space}interesado/a${space}en${space}*${encoded}*`
          message = message + fieldMessage
          break
      }
    }
    window.open(`https://wa.me/${NUM_WA}?text=${message}`,)
    const modal = document.getElementById('modalVerano')
    modal.classList.remove('flex')
    modal.classList.add('hidden')
    setVeranoForm({
        horariov: 'martes a viernes de 4:30 pm a 6:30 pm',
        nombrev: '',
        edadv: '',
        interesadov: 'mini gym'
    })
  }
}

  return(
    <TitanesContext.Provider
    value={{
      waForm,
      setWaForm,
      handleEditContactForm,
      handleModal,
      handleSubmitForm,
      veranoForm,
      setVeranoForm,
      handleEditVeranoForm,
      handleSubmitVeranoForm,
      NUM_WA
    }}
    >
      {children}
    </TitanesContext.Provider>
  )
}