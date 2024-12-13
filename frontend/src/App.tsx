"use client";
import MainContainer from "./ui/Util/main-container.tsx";
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";

import Associated from "./associated";
import Agenda from "./Agenda";
import Session from "./Session";
import Home from "./Home";
import Vote from "./Vote";
import VoteResult from "./Vote/result.tsx";


export function App() {

  return (
        <MainContainer>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/agenda" element={<Agenda />}></Route>
                    <Route path="/associated" element={<Associated />}></Route>
                    <Route path="/session" element={<Session />}></Route>
                    <Route path="/vote" element={<Vote />}></Route>
                    <Route path="/vote/result" element={<VoteResult />}></Route>
                </Routes>
            </Router>
        </MainContainer>
  )
}

export default App
