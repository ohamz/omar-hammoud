import React from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";

import UserInput from "./UserInput";
import GreenButton from "./GreenButton";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        clearForm();
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="contact-form-content">
        <h3>Get in touch</h3>
        <UserInput
          name="name"
          icon="profile"
          value={formData.name}
          onChange={handleChange}
        >
          Enter your full name
        </UserInput>
        <UserInput
          name="email"
          type="email"
          icon="mail"
          value={formData.email}
          onChange={handleChange}
        >
          Enter your Email address
        </UserInput>
        <UserInput
          name="message"
          icon="edit"
          value={formData.message}
          onChange={handleChange}
        >
          Write Message...
        </UserInput>
        <GreenButton id="contact-btn">send email</GreenButton>
      </div>
    </form>
  );
}

export default ContactForm;
