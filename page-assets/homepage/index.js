import React, { useState, useEffect } from "react";
import navAndFooterWrapper from "../../common/hoc/navAndFooterWrapper";
import { Container, Typing } from "./style";
import { helper } from "../../helper/index";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

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

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(tsParticles);
  };

  useEffect(() => {
    // const id = typeWriter();
  });

  return (
    <Container id="container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* <Typing>{text}</Typing> */}
      <div className="flex" style={{ position: "relative" }}>
        <Typing>Frontend Developer ( SDE1 )</Typing>
        <hr />
        <Typing>Camp-K12</Typing>

        <div className="languages">
          Javascript | React | Redux | Cypress | Styled Componenets
        </div>
      </div>
    </Container>
  );
}

export default navAndFooterWrapper(Homepage);
