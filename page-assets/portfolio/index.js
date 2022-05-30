import { Router } from "next/router";
import React, { useState, useEffect } from "react";

import { Container, Grid, Project } from "./style";

function Portfolio() {
  useEffect(() => {
    document
      .querySelector(".project")
      .addEventListener("click", () => {}, true);
  }, []);

  return (
    <Container id="container">
      <Grid>
        <Project
          className="project"
          onClick={
            () => console.log("yo")
            // window.open("https://rohankumr.github.io/campk12/", "_blank")
            // window.open("https://rohankumr.github.io/campk12/", "_blank")
          }
        >
          <div
            onClick={(e) => {
              console.log("inside");
              e.stopPropagation();
            }}
            className="title"
          >
            Social Media App
          </div>
        </Project>
        <Project
          onClick={() =>
            window.open(
              "https://netflix-clone-demo-e189a.firebaseapp.com",
              "_blank"
            )
          }
        >
          <div className="title">Netflix Clone</div>
        </Project>
        <Project
          onClick={() =>
            window.open("https://codepen.io/rohan-kumar/full/eYYKjJK", "_blank")
          }
        >
          <div className="title">Quoter</div>
        </Project>
        <Project
          onClick={() =>
            window.open("https://codepen.io/rohan-kumar/full/abzNvOM", "_blank")
          }
        >
          <div className="title">Calculator</div>
        </Project>
        <Project
          onClick={() =>
            window.open(`https://codepen.io/rohan-kumar/full/JjjqYbg`, "_blank")
          }
        >
          <div className="title">Drum Machine</div>
        </Project>
        <Project></Project>
      </Grid>
    </Container>
  );
}

export default Portfolio;
