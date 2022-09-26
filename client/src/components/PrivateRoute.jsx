import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuth = JSON.parse(localStorage.getItem("userDetails"));
  console.log(isAuth);
    if (isAuth) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
  
  export default PrivateRoute;