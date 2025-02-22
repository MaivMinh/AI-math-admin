import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ErrorManagement = () => {
  const {isAuthenticated} = useContext(AppContext);
  if (!isAuthenticated) {
    navigate("/login");
  }
  
  return (
    <div>Error management</div>
  )
}

export default ErrorManagement