import React, { useEffect } from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";

import UserInput from "./UserInput";
import GreenButton from "./GreenButton";

/**
 * ContactForm component - form for sending emails
 */
function ContactForm() {
  const S_ID = import.meta.env.VITE_SERVICE_ID;
  const T_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUB_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [isLoading, setLoading] = useState(false);
  const [btnDisplay, setBtnDisplay] = useState({
    content: "send email",
    color: "",
  });
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

  const confirmSubmission = () => {
    setBtnDisplay({ content: "email sent!", color: "btn-white" });
    setTimeout(() => {
      setBtnDisplay({ content: "send email", color: "" });
    }, 2000);
  };

  const handleSubmit = async (e) => {
    const tempForm = formData;
    clearForm();
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(S_ID, T_ID, tempForm, {
        publicKey: PUB_KEY,
      });
      setLoading(false);
      confirmSubmission();
      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      setLoading(false);
      console.log("FAILED...", error);
    }
  };

  return (
    <form
      id="contact-form"
      className="contact-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
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
        <GreenButton
          id="contact-btn"
          btnTxtColor={btnDisplay.color}
          isLoading={isLoading}
        >
          {btnDisplay.content}
        </GreenButton>
      </div>
    </form>
  );
}

export default ContactForm;
