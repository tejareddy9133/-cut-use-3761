import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/SignUpPage";
import Login from "../pages/LoginPage";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Mainroutes;
