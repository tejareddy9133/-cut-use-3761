import React from "react";
import { Route, Routes } from "react-router-dom";
import Subscription from "../pages/Subscription";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/subscription"} Component={Subscription} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
