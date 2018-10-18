import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => (
  <li className="project-index-item">
    <Link to={`/projects/${project.id}`}>

      <img src={project.photoUrl} alt={project.title} className='item-image'/>

      <div className='cover-info'>
      <span className='title'>{project.title}</span> <br />
      <span className='author'>by {project.username} in category</span>
      </div>
    </Link>
  </li>
);

export default ProjectIndexItem;
