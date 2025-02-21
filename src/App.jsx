import "./App.css";
import MainLayout from "./components/MainLayout.jsx";
import { AppContextProvider } from "../src/context/AppContext.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import UserManagement from "./components/UserManagement.jsx"
import ErrorManagement from "./components/ErrorManagement.jsx";
import PaymentManagement from "./components/PaymentManagement.jsx";
import PaymentHistory from "./components/PaymentHistory.jsx";
import LessonManagement from "./components/LessonManagement.jsx";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/error-management" element={<ErrorManagement />} />
            <Route path="/payment-management" element={<PaymentManagement />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/lesson-management" element={<LessonManagement />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
