import React, { useState, useEffect } from "react";
import navAndFooterWrapper from "../../common/hoc/navAndFooterWrapper";
import { Container, Typing } from "./style";
import { helper } from "../../helper/index";
import BackgroundParticles from "./backgroundParticles";
import Portfolio from "../portfolio";
import Contact from "../contact";

function Homepage() {
  const [text, setText] = useState("");
  let i = 0;
  const texts = {
    0: "I'm a Frontend Developer",
    1: "I build scalable pixel perfect websites ",
  };
  let txt = "I'm a Frontend Developer";
  let toggle = true;
  let speed = 100;
  let speedDel = 50;
  let counter = 0;
  let t = "";
  async function typeWriter() {
    if (i == txt.length) {
      counter = 1;
      await helper.sleep(2000);
    }
    if (i < 0) {
      if (toggle) {
        txt = texts[1];
      } else {
        txt = texts[0];
      }
      toggle = !toggle;
      counter = 0;
    }
    if (i < txt.length && counter == 0) {
      t = t + txt.charAt(i);
      setText(t);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      t = txt.substring(0, i);
      setText(t);
      i--;
      setTimeout(typeWriter, speedDel);
    }
  }

  // useEffect(() => {
  //   const id = typeWriter();
  // });

  return (
    <Container id="container">
      <BackgroundParticles />
      {/* <Typing>{text}</Typing> */}
      <Introduction />
      <Portfolio />
      <Contact />
    </Container>
  );
}

const Introduction = () => {
  return (
    <div
      className="flex"
      style={{ position: "relative", maxWidth: "790px", margin: "auto" }}
    >
      <Typing>Frontend Developer ( SDE1 )</Typing>
      <hr />
      <Typing>Ex Camp-K12 (2yrs)</Typing>

      <div className="languages">
        Javascript | React | Redux | Cypress | Styled Components
      </div>
    </div>
  );
};

export default navAndFooterWrapper(Homepage);
