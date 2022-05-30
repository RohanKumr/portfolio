import styled from "styled-components";

export const Container = styled.div`
  /* @extend .container; */
  overflow: hidden;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr 6fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;
export const Project = styled.div`
  position: relative;
  /* border: 3px solid var(--navy); */
  border: 1px solid grey;
  height: 250px;
  width: 250px;
  /* border-radius: 8px; */
  transition-duration: 100ms;
  :hover {
    border-left: 1px solid var(--blue);
  }
  .title {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 10px;
    /* border-left: 3px solid transparent; */
    background: var(--navy);
    :hover {
      color: var(--blue);
      cursor: pointer;
    }
  }
`;
export const Typing = styled.div`
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  background: var(--navy);
`;
