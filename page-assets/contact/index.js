import React, { useState } from "react";
import { Container, ContactForm } from "./style";

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
    console.log(inputData);
  };
  return (
    <Container id="container">
      <ContactForm>
        <h1>Hire Me</h1>
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
    </Container>
  );
}

export default Contact;
