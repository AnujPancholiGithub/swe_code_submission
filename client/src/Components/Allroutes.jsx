import React from "react";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const Allroutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Allroutes;
