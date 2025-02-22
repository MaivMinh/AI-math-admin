import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';



const PaymentManagement = () => {
  const {isAuthenticated} =useContext(AppContext);
  const navigate = useNavigate();
  
    if (!isAuthenticated) {
      navigate("/login");
    }
  
  return (
    <div>Payment management</div>
  )
}

export default PaymentManagement