import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TitanesProvider } from './context/titanesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitanesProvider>
      <App />
    </TitanesProvider>
  </React.StrictMode>,
)
