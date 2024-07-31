import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Protected = ({ element, screen }) => {
  if(screen === 'login'){
    return isAuthenticated() ? <Navigate to="/" /> : element;
  }
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default Protected;
