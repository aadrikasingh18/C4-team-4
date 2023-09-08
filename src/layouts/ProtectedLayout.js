import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [loginState, setLoginState] = useState(true);

  if (!loginState) {
    return <Navigate to="/auth/sign-in" replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
