/* eslint-disable prettier/prettier */
import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, SignInPage, SignUpPage } from "../pages";

const AllRoutes: FC = function () {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<SignInPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/dashboard" element={<DashboardPage />} >
      </Route>
    </Routes>
  );
};

export {AllRoutes};
