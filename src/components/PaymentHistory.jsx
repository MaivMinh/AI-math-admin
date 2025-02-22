import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    navigate("/login");
  }

  return <div>Payment history</div>;
};

export default PaymentHistory;
