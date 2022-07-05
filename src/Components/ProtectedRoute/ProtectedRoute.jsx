import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.accessToken) {
    return <Navigate to="/login" replace />;
  } else {
    return children ? children : <Outlet />;
  }
};

export default ProtectedRoute;
