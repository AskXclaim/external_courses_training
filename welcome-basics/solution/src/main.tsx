import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import NavigationBar from "./dayOne/pages/NavigationBar.tsx";
import Home from "./dayOne/pages/Home.tsx";
import About from "./dayOne/pages/About.tsx";
import Counter from "./dayTwo/state/Counter.tsx";
import DuckContainer from "./dayTwo/state/Duck/DuckContainer.tsx";
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <div className="container-fluid">
            <BrowserRouter>
                <NavigationBar/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/duck" element={<DuckContainer/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>

            </BrowserRouter>
        </div>
    </StrictMode>,
)
