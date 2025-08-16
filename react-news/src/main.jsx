import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewsComponent from './news/news'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Newscomponent2 from './newscomponent2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    {/* <NewsComponent /> */}
    <Newscomponent2 />
  </StrictMode>
)
