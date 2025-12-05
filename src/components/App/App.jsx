import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import DashboardPage from "../../pages/DashboardPage.jsx";
import ExercisesPage from "../../pages/ExercisesPage.jsx";
import HistoryPage from "../../pages/HistoryPage.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function openLogin() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function openRegister() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  }

  function closeAllModals() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  // Cerrar con ESC
  useEffect(() => {
    function handleEsc(evt) {
      if (evt.key === "Escape") {
        closeAllModals();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="page">
      <Header onLoginClick={openLogin} />

      <main className="page__content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>

      <Footer />

      {isLoginOpen && (
        <LoginModal
          onClose={closeAllModals}
          onSwitchToRegister={openRegister}
        />
      )}

      {isRegisterOpen && (
        <RegisterModal onClose={closeAllModals} onSwitchToLogin={openLogin} />
      )}
    </div>
  );
}

export default App;
