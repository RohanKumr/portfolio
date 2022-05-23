import styled from "styled-components";

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
    :hover {
      background: var(--blue);
    }
    :visited,
    :hover,
    :active {
      color: inherit;
    }
  }
`;

export const Menu = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  div {
    padding: 12px 15px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      color: var(--blue);
    }
  }
`;
