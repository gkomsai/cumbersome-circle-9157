import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = useSelector((store) => store.authReducer.token);
  // console.log(token);
    if (token) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
  
  export default PrivateRoute;