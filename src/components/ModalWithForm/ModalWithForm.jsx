import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  children,
  submitText = "Submit",
  onClose,
  onSubmit,
  footer,
}) {
  function handleOverlayClick(evt) {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (onSubmit) {
      onSubmit(evt);
    }
  }

  return (
    <div className="modal" onMouseDown={handleOverlayClick}>
      <div className="modal__container" role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal__close-btn"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form
          className={`modal__form modal__form_type_${name}`}
          onSubmit={handleSubmit}
        >
          {children}

          <button type="submit" className="modal__submit-btn">
            {submitText}
          </button>

          {footer && <div className="modal__footer">{footer}</div>}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
