import { useAuth } from "contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to="/auth/sign-in"
        replace={true}
        state={{
          message: "login required to access",
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedLayout;
