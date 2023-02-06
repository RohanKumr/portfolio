import React from "react";
import { projects } from "./projectsData";

import { ProjectsWrapper, Grid, Project } from "./style";

function Portfolio() {
  return (
    // <Container id="container">
    <ProjectsWrapper>
      <h1>PROJECTS</h1>
      <Grid>
        {projects.map((proj) => (
          <Project
            onClick={() => window.open(proj.link, "_blank")}
            background={proj.src}
          >
            <div className="layer"></div>
            <div className="title">{proj.name}</div>
          </Project>
        ))}
      </Grid>
    </ProjectsWrapper>
  );
}

export default Portfolio;
