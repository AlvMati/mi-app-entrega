// import { createElement, StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
// )

// Asi se crean elementos en React

const container = document.querySelector('#root');

function App() {
  return (
    <div>
      <h1 className='hello-title'>Hola, info</h1>
      <button>Click me!</button>
    </div>
  );
}

if (!container) {
  throw new Error('Este elemento no existe');
}
const root = createRoot(container);
root.render(<App/>); 