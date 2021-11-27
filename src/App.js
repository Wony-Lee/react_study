import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPages";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<NewsPage />}>
                    <Route path=":category" element={<NewsPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
