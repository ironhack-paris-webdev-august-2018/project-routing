import React from "react";
import { Link } from "react-router-dom";

import projectArray from "../projects.json";

function ProjectList() {
  return (
    <section>
      <h2>All Projects</h2>
      <ul>
        {projectArray.map(oneProject =>
          // use IDs for the key when you have them
          <li key={oneProject.id}>
            <h3>
              <Link to={`/projects/${oneProject.id}`}>
                {oneProject.name}
              </Link>
            </h3>
            <p>Technologies: {oneProject.technologies}</p>
          </li>
        )}
      </ul>
    </section>
  );
}

export default ProjectList;
