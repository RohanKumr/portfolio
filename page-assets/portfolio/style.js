import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  overflow: hidden;
  padding: 80px;
  h1 {
    max-width: 790px;
    margin: auto;
    padding-bottom: 30px;
  }
`;
export const Grid = styled.div`
  max-width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: 6fr 6fr 6fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;
export const Project = styled.div`
  position: relative;
  border: 1px solid grey;
  height: 250px;
  width: 250px;
  transition-duration: 600ms;
  background-image: ${(props) =>
    props.background ? `url(${props.background})` : ""};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  :hover {
    border-left: 1px solid var(--blue);
    .title {
      color: var(--blue);
    }
    .layer {
      background: none;
    }
  }
  .layer {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.6;
    transition-duration: 600ms;
  }
  .title {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    background: var(--navy);
    color: rgba(255, 255, 255, 0.7);
    transition-duration: 600ms;
  }

  /* BUTTONS FANCY */

  /* color: #fff; */
  transition: all 0.3s;
  position: relative;
  margin: 1px;
  /* font-size: 1.5em; */
  /* padding: 5px; */
  display: inline-block;
  background-color: #ff6766;
  font-family: "Open Sans Condensed", sans-serif;
  /* width: 2em; */
  /* height: 2em; */
  font-weight: bold;
  /* color: rgba(255, 255, 255, 0.7); */
  span {
    transition: all 0.3s;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    transform: scale(0.1, 1);
  }
  :hover span {
    /* letter-spacing: 2px; */
  }
  :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  :hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;
export const Typing = styled.div`
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  background: var(--navy);
`;
