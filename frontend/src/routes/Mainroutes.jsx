import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignUpPage";
import Subscription from "../pages/Subscription";
import Playlist1 from "../components/playlist1";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/subscription" element={<Subscription />}></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/playlist1" element={<Playlist1/>}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>

  );
};

export default Mainroutes;
