import React from "react";
import NavBar from "./NavBar";

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppLayout;
