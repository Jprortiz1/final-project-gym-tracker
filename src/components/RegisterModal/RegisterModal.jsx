import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal({ onClose, onSwitchToLogin }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Register form submitted:", formValues);
    onClose();
  }

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      submitText="Create account"
      onClose={onClose}
      onSubmit={handleSubmit}
      footer={
        <button
          type="button"
          className="modal__link-btn"
          onClick={onSwitchToLogin}
        >
          Already have an account? Log in
        </button>
      }
    >
      <div className="modal__field">
        <label htmlFor="register-name" className="modal__label">
          Name
        </label>
        <input
          id="register-name"
          name="name"
          type="text"
          className="modal__input"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="modal__field">
        <label htmlFor="register-email" className="modal__label">
          Email
        </label>
        <input
          id="register-email"
          name="email"
          type="email"
          className="modal__input"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="modal__field">
        <label htmlFor="register-password" className="modal__label">
          Password
        </label>
        <input
          id="register-password"
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

export default RegisterModal;
