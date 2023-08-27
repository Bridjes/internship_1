import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SelectCategory from "./pages/SelectCategory";
import SelectQuestion from "./pages/SelectQuestion";
import AnswerQuestion from "./pages/AnswerQuestion";
import Defaultroute from "./pages/Defaultroute";
import MyNavbar from "./components/UI/Navbar/MyNavbar";

function App() {
    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <Routes>
                <Route path="/" element={<SelectCategory/>}>
                </Route>
                <Route path="/question" element={<SelectQuestion/>}>
                </Route>
                <Route path="/answer" element={<AnswerQuestion/>}>
                </Route>
                <Route path="*" element={<Defaultroute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
