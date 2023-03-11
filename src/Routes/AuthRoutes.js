import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginComponent } from "../Pages/Login";
import { SignupComponent } from "../Pages/Signup";


export const AuthRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
    </>
  );
};
