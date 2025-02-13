import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import NavigationBar from "./dayOne/pages/NavigationBar.tsx";
import Home from "./dayOne/pages/Home.tsx";
import About from "./dayOne/pages/About.tsx";
import Counter from "./dayTwo/state/Counter.tsx";
import DuckContainer from "./dayTwo/state/Duck/DuckContainer.tsx";
import Reducer from "./dayThree/stateManagement/useReducer/Reducer.tsx";
import ContextApp from "./dayThree/stateManagement/useContext/ContextApp.tsx";
import ReduxerContainer from "./dayThree/stateManagement/Redux/ReduxerContainer.tsx";
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
                        <Route path="/apiCalls" element={<DuckContainer/>}/>
                        <Route path="/useReducer" element={<Reducer/>}/>
                        <Route path="/useContext" element={<ContextApp/>}/>
                        <Route path="/useRedux" element={<ReduxerContainer/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>

            </BrowserRouter>
        </div>
    </StrictMode>,
)
