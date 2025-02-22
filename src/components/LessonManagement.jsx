import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const LessonManagement = () => {
  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    navigate("/login");
  }

  return <div>Lesson management</div>;
};

export default LessonManagement;
