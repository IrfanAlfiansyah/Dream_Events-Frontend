import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = "admin";

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && roleUser !== "admin") {
    return <Navigate to="*" state={{ form: location }} replace />;
  }

  return <Outlet />;
}
