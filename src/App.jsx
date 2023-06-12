import { Footer, Inicio, Sucursal1, Sucursal2, Cheerleading, Parkour, Gimnasia, Aviso, Whatsapp, WaForm, VeranoForm, CursoVerano2023 } from './imports'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import { Navbar } from './components/navbar'

const HeaderLayout = () => {
  return(
    <div className="font-display">
        <Navbar/>
          <WaForm></WaForm>
          <VeranoForm></VeranoForm>
          <Outlet/>
          <Whatsapp/>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/sucursal1",
        element: <Sucursal1 />
      },
      {
        path: "/sucursal2",
        element: <Sucursal2 />
      },
      {
        path: "/cheerleading",
        element: <Cheerleading />
      },
      {
        path: "/parkour",
        element: <Parkour />
      },
      {
        path: "/gimnasia",
        element: <Gimnasia />
      },
      {
        path: "/aviso-privacidad",
        element: <Aviso />
      },
      {
        path: "/curso-de-verano-2023",
        element: <CursoVerano2023 />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App