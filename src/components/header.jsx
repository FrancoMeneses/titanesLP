import { useEffect } from "react"

export const Header = ({id, title}) => {

  useEffect(() => {
    document.getElementById(id).classList.add('transition', 'duration-1000', 'translate-y-12', 'text-white', 'ease-in')
    document.getElementById(id).classList.remove('text-transparent')
  }, [])

  return (
    <div>
      <div className="flex justify-center items-center w-full h-40 bg-gradient-to-b from-[#9e0404] to-[#323232]">
        <p id={id} className="text-center text-transparent text-4xl md:text-6xl lg:text-6xl self-start">{title}</p>
      </div>
    </div>
  )
}