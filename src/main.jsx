import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApi } from './PokemonApi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonApi />
  </React.StrictMode>
)
