import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import Profile from "./Profile";

const Profiles = () => {
    return (
        <>
            <div>
                <h3>사용자 목록 : </h3>
                <ul>
                    <li>
                        <Link to="wony">wony</Link>
                    </li>
                    <li>
                        <Link to="gildong">gildong</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route
                    index
                    path="/"
                    element={<div>사용자를 선택해주세요.</div>}
                />
                <Route path="/:username" element={<Profile />} />
            </Routes>
            <Outlet />
            {/* <Routes>
                <Route path="/" element={<Profile />}>
                    <Route path=":username" />
                </Route>
            </Routes> */}
        </>
    );
};

export default Profiles;
