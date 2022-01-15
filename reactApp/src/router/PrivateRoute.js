import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  return auth.isAuthen ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
