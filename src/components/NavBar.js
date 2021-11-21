import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="test">Test</Link>
            <Link to="about">About</Link>
            <Link to="profiles">프로필</Link>
        </>
    );
};

export default NavBar;
