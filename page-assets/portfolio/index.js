import React from "react";
import { projects } from "./projectsData";

import { Container, Grid, Project } from "./style";

function Portfolio() {
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
