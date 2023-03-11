import React, { useState } from "react";
import { AuthRoutes } from "./AuthRoutes";
import { StackRoutes } from "./StackRoutes";
import { useSelector } from "react-redux";

export const CheckRoutes = () => {
  const { isAuth, user } = useSelector((state) => state.kemps);
  console.log('user data---', user);
  console.log('isAuth----', isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>{isAuthenticated ? <>{<StackRoutes />}</> : <>{<AuthRoutes />}</>}</>
  );
};
