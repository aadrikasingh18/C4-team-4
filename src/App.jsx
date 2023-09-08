import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ProtectedLayout from "layouts/ProtectedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />

      <Route element={<ProtectedLayout/>}>
        <Route path="admin/*" element={<AdminLayout />} />
      </Route>
      
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
