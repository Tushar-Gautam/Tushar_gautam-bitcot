import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //check user exists condition
  const tokenIsPresent = localStorage.getItem("token");

  if (!tokenIsPresent) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
