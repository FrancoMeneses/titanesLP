import { createContext, useState } from "react"

export const TitanesContext = createContext()

export function TitanesProvider({children}){

  const [waForm, setWaForm] = useState({
    clasePara: 'para mi',
    nombre: '',
    edad: '',
    actividad: 'Mini Gym'
  })

  const handleModal = () => {
    const modal = document.getElementById('modalId')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
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
      window.open(`https://wa.me/2227080520?text=${message}`,)
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

  return(
    <TitanesContext.Provider
    value={{
      waForm,
      setWaForm,
      handleEditContactForm,
      handleModal,
      handleSubmitForm
    }}
    >
      {children}
    </TitanesContext.Provider>
  )
}