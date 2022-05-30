import React, { useEffect, useState } from "react";
import { NavbarContainer, SocialLinksContainer, Menu } from "./styles";
import avatar from "../../images/man.png";
import { useRouter } from "next/router";

export default function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   setIsScrolled(window.scrollY > 0 ? true : false);
  // };

  // useEffect(() => {
  //   setIsScrolled(window.scrollY >= 500);
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  const router = useRouter();

  return (
    // <NavbarContainer active={isScrolled}>
    <NavbarContainer>
      <img className="avatar" src={avatar.src} alt="avatar" />
      <h1>Rohan Kumar</h1>

      <SocialLinksContainer>
        <a
          className="social-link-container"
          href="https://www.linkedin.com/in/rohankumarrrr/"
          target="_blank"
        >
          <img
            src="https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png"
            alt=""
          />
        </a>
        <a
          href="https://github.com/RohanKumr"
          target="_blank"
          className="social-link-container"
        >
          G
        </a>
        <a
          href="https://www.freecodecamp.org/rohankumar"
          target="_blank"
          className="social-link-container"
        >
          F
        </a>
        <a
          className="social-link-container"
          href="mailto:rkrohanrk065@gmail.com"
        >
          M
        </a>
      </SocialLinksContainer>
      <Menu>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/portfolio")}>Portfolio</div>
        <div>About</div>
        <div>Contact</div>
      </Menu>
    </NavbarContainer>
  );
}
