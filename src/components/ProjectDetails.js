import React from "react";

import projectArray from "../projects.json";

function findProject(id) {
  // find one project whose ID matches the parameter
  return projectArray.find(oneProject => oneProject.id === id);
}

function ProjectDetails(props) {
  // "props.match" is defined by the React Router
  // (contains information about the matched route)
  const { params } = props.match;

  // "params.projectId" is the ID from the URL
  // ("projectId" is defined in App.js in the URL "/projects/:projectId")
  const projectItem = findProject(params.projectId);

  return (
    <section>
      <h2>Project Details</h2>
      <h3>{projectItem.name} ({projectItem.year})</h3>
      <p>{projectItem.description}</p>

      <h3>Technologies</h3>
      <p>{projectItem.technologies}</p>
    </section>
  );
}

export default ProjectDetails;
