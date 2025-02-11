import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Heroes from './HeroesApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Heroes />
    </BrowserRouter>
  </StrictMode>
)
