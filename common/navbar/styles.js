import styled from "styled-components";
import { inherits } from "util";

export const NavbarContainer = styled.div`
  text-align: center;
  padding: 20px;

  background: var(--navy);
  .avatar {
    width: 120px;
    height: 120px;
    border: 6px dotted var(--faded-navy);
    border-radius: 50%;
  }
  h1 {
    font-family: "Poppins", sans-serif;
    margin: 0px;
    padding: 10px;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  .social-link-container {
    height: 36px;
    width: 36px;
    background: var(--faded-navy);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    :visited,
    :hover,
    :active {
      color: inherit;
    }
    > img {
      width: 23px;
      height: 23px;
      border-radius: 10%;
    }
    border: 0.1px solid rgba(31, 42, 85, 0.2);
  }
  .github {
    border-radius: 7px;
    background: white;
  }
  .freecodecamp {
    /* border: 1px solid rgba(31, 42, 85, 0.2); */
    border-radius: 6px;
    /* background: #0a0a23; */
    background: white;

    /* background: grey; */
    /* color: white; */
  }
`;

export const Menu = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Tab = styled.div`
  padding: 12px 15px;
  transition: 0.3s;
  width: 100%;
  text-align: left;
  border-left: 2px solid transparent;
  /* color: ${({ active }) => (active ? "var(--blue)" : "inherit")}; */
  border-left: ${({ active }) => (active ? "1px solid var(--blue)" : "none")};
  cursor: pointer;
  :hover {
    color: var(--blue);
    border-left: 1px solid var(--blue);
  }
`;
