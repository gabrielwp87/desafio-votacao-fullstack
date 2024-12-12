"use client";
import MainContainer from "./ui/Util/main-container.tsx";
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";

import Associated from "./associated";
import Agenda from "./Agenda";
import Index from "./Session";
import Home from "./Home";
import Vote from "./Vote/vote.tsx";


export function App() {

  return (
        <MainContainer>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/agenda" element={<Agenda />}></Route>
                    <Route path="/associated" element={<Associated />}></Route>
                    <Route path="/session" element={<Index />}></Route>
                    <Route path="/vote" element={<Vote />}></Route>
                    {/*<Route path="/CPFvalidator" element={<CPFvalidator />}></Route>*/}
                </Routes>
            </Router>
        </MainContainer>
  )
}

export default App
