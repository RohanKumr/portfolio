import React, { useEffect, useState } from "react";
import { NavbarContainer, SocialLinksContainer, Menu, Tab } from "./styles";
// import avatar from "../../images/man.png";
import { useRouter } from "next/router";
import Image from "next/image";

const pages = {
  HOME: "HOME",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT",
};

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(pages.HOME);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const onTabClick = (page) => {
    setCurrentPage(page);

    switch (page) {
      case pages.HOME:
        router.push("/");
        break;
      case pages.PROJECTS:
        router.push("/portfolio");
        break;
      case pages.CONTACT:
        router.push("/contact");
        break;

      default:
        router.push("/");
    }
  };
  return (
    // <NavbarContainer active={isScrolled}>
    <NavbarContainer>
      <img className="avatar" src="/images/man.png" alt="avatar" />

      <h1>Rohan Kumar</h1>

      <SocialLinksContainer>
        <a
          className="social-link-container"
          href="https://www.linkedin.com/in/rohankumarrrr/"
          target="_blank"
        >
          <Image
            height="50"
            width="50"
            src="/images/social-icons/linkedin.png"
          />
        </a>
        <a
          href="https://github.com/RohanKumr"
          target="_blank"
          className="social-link-container github"
        >
          <Image
            height="50"
            width="50"
            src="/images/social-icons/github-sign.png"
          />
        </a>
        <a
          href="https://www.freecodecamp.org/rohankumar"
          target="_blank"
          className="social-link-container freecodecamp"
        >
          <Image
            height="50"
            width="50"
            src="/images/social-icons/freecodecamp.png"
          />
        </a>
        {/* <a
          className="social-link-container"
          href="mailto:rkrohanrk065@gmail.com"
        >
          M
        </a> */}
      </SocialLinksContainer>
      <Menu>
        <Tab
          onClick={() => onTabClick(pages.HOME)}
          active={currentPage == pages.HOME}
        >
          Home
        </Tab>
        <Tab
          onClick={() => onTabClick(pages.PROJECTS)}
          active={currentPage == pages.PROJECTS}
        >
          Projects
        </Tab>
        {/* <Tab >About</Tab> */}
        <Tab
          onClick={() => onTabClick(pages.CONTACT)}
          active={currentPage == pages.CONTACT}
        >
          Contact
        </Tab>
      </Menu>
    </NavbarContainer>
  );
}
