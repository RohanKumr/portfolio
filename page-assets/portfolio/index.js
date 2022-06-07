import { Router } from "next/router";
import React, { useState, useEffect } from "react";
import { projects } from "./projectsData";

import { Container, Grid, Project } from "./style";

function Portfolio() {
  useEffect(() => {
    // document
    //   .querySelector(".project")
    //   .addEventListener("click", () => {}, true);
  }, []);
  console.log(projects);
  return (
    <Container id="container">
      <Grid>
        {projects.map((proj) => (
          <Project
            onClick={() => window.open(proj.link, "_blank")}
            background={proj.src}
          >
            <div className="title">{proj.name}</div>
          </Project>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio;
