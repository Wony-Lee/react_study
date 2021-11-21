import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AppLayout from "./components/AppLayout";
import Profile from "./components/Profile";

const App = () => {
    return (
        <>
            <AppLayout></AppLayout>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route index path="about" element={<About />} />
                <Route path="profiles/:username" element={<Profile />}></Route>
            </Routes>
        </>
    );
};

export default App;
