import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModalContextProvider } from "../src/context/ModalContext.jsx"

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </StrictMode>,
)
