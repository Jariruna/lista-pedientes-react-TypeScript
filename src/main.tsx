import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { TododApp } from './components/TododApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <TododApp></TododApp>
  </React.StrictMode>,
)
