import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal({ onClose, onSwitchToRegister }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // Stage 1: solo mostramos en consola
    console.log("Login form submitted:", formValues);
    onClose();
  }

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      submitText="Log in"
      onClose={onClose}
      onSubmit={handleSubmit}
      footer={
        <button
          type="button"
          className="modal__link-btn"
          onClick={onSwitchToRegister}
        >
          Don&apos;t have an account? Sign up
        </button>
      }
    >
      <div className="modal__field">
        <label htmlFor="login-email" className="modal__label">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          className="modal__input"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="modal__field">
        <label htmlFor="login-password" className="modal__label">
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          className="modal__input"
          value={formValues.password}
          onChange={handleChange}
          required
        />
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
