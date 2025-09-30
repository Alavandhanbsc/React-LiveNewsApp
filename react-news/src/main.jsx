import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewsComponent from './news/news'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsComponent />
  </StrictMode>
)
