import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

export default function Form() {
  const [isOpen, setIsOpen] = useState(true);
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (new Date(dob) >= new Date()) {
      alert("Invalid Date of Birth. Please enter a valid date.");
      return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (username && email && phone && dob) {
      alert("Form submitted successfully!");
      closeModal();
    } else {
      alert("Please fill all the details.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1>Fill Details</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h3>Username:</h3>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.inputContainer}
            required
          />

          <label htmlFor="email">
            <h3>Email Address:</h3>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.inputContainer}
            required
          />

          <label htmlFor="phone">
            <h3>Phone Number:</h3>
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className={styles.inputContainer}
            required
          />

          <label htmlFor="dob">
            <h3>Date of Birth:</h3>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className={styles.inputContainer}
            required
          />

          <div style={{ marginTop: 12 }}>
            <Button
              handleClick={handleSubmit}
              variant="primary"
              type="button"
              className={styles.submitButton}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
