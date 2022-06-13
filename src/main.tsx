import React from 'react' // É o coração do react
import ReactDOM from 'react-dom/client' // Representação do HTML em javaScript
import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
 