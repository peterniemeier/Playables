import React from 'react';
import ProjectIndexItem from './project_index_item';

const ProjectIndex = ({ projects }) => (
  <div>
    <h1>Projects: </h1>
    {projects.map(project => (
      <ProjectIndexItem
        project={project}
        key={project.id}
      />
    ))}
  </div>
);

export default ProjectIndex;
