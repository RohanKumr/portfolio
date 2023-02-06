import React, { useState } from "react";
import { ContactsWrapper, ContactForm } from "./style";

function Contact() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeInputData = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMail = () => {
    const { firstName, lastName, email, message } = inputData;
    window.open(
      `mailto:rkrohanrk065@gmail.com?subject=portfolio:${email}&body=${message}`
    );
  };
  return (
    <ContactsWrapper id="container">
      <ContactForm>
        <h1>Contact Me.</h1>
        <input
          name="firstName"
          value={inputData.firstName}
          type="text"
          placeholder="First Name"
          onChange={changeInputData}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={inputData.lastName}
          onChange={changeInputData}
        />
        <input
          name="email"
          type="text"
          onChange={changeInputData}
          placeholder="Email"
          value={inputData.email}
        />
        <textarea
          name="message"
          onChange={changeInputData}
          placeholder="Message"
          value={inputData.message}
          autoComplete="on"
        />
        <button onClick={sendMail}> SEND</button>
        {/* <div className="switch-states" onClick={() => setPage(!page)}>
          Have an Account? Login here.
        </div> */}
      </ContactForm>
    </ContactsWrapper>
  );
}

export default Contact;
