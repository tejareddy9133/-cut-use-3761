import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>

  );
};

export default Mainroutes;
