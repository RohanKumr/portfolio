import React from "react";
import { projects } from "./projectsData";

import { Container, Grid, Project } from "./style";

function Portfolio() {
  return (
    <Container id="container">
      <Grid>
        <h1>PROJECTS</h1>
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
