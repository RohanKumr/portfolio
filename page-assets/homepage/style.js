import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    display: "flex";
    flex-direction: "column";
    justify-content: "center";
    opacity: 0.2;
  }
  .languages {
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
  }
`;
export const Typing = styled.div`
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  background: var(--navy);
  text-align: center;
`;
