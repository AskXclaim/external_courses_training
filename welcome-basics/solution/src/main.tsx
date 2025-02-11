import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import NavigationBar from "./dayOne/pages/NavigationBar.tsx";
import Home from "./dayOne/pages/Home.tsx";
import About from "./dayOne/pages/About.tsx";
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
      <BrowserRouter>
          <NavigationBar/>
          <main>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
          </main>
        
      </BrowserRouter>
  </StrictMode>,
)
