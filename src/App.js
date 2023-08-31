import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SelectCategory from "./pages/SelectCategory";
import AnswerQuestion from "./pages/AnswerQuestion";
import DefaultRoute from "./pages/DefaultRoute";
import MyNavbar from "./components/UI/Navbar/MyNavbar";

function App() {
    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <Routes>
                <Route path="/" element={<SelectCategory/>}>
                </Route>
                <Route path="/answer" element={<AnswerQuestion/>}>
                </Route>
                <Route path="*" element={<DefaultRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
