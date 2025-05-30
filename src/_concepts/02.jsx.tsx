// import { createElement, StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
// )

// Asi es la tificacion de jsx

const container = document.querySelector('#root');

const app = (
  <div>
    <h1 className='hello-title'>Hola Info</h1>
    <button>Click me!</button>
  </div>
)

if (!container) {
  throw new Error('Este elemento no existe');
}
const root = createRoot(container);
root.render(app);