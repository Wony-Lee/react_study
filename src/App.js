import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AppLayout from "./components/AppLayout";
import Profiles from "./components/Profiles";

const App = () => {
    return (
        <>
            <AppLayout></AppLayout>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route index path="about" element={<About />} />
                <Route path="profiles/*" element={<Profiles />}></Route>
            </Routes>
        </>
    );
};

export default App;
