import styled from "styled-components";

export const ContactsWrapper = styled.div`
  /* @extend .container; */
  overflow: hidden;
`;
export const ContactForm = styled.div`
  h1 {
    margin: 0;
  }
  margin: auto;
  max-width: 790px;
  width: 100%;
  /* padding: 80px; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  input,
  button,
  textarea {
    padding: 0;
    margin: 0;
    padding: 16px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    color: black;
    outline: none;
    letter-spacing: 1.2px;
  }
  input,
  textarea {
    opacity: 0.7;
  }
  textarea {
    min-height: 150px;
    max-height: 400px;
    resize: vertical;
  }
  button {
    background: var(--navy);
    font-weight: bold;
    border: none;
    color: white;
    padding: 32px 16px;
  }
`;
