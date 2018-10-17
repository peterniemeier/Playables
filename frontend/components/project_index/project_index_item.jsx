import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => (
  <li className="project-index-item">
    <Link to={`/projects/${project.id}`}>
      <span>{project.id}</span>

      <img src='https://picsum.photos/200/300/?random' alt={project.title} className='item-image'/>

      <div className='cover-info'>
      <span className='title'>{project.title}</span> <br />
      <span className='author'>by {project.user.username} in category</span>
      </div>
    </Link>
  </li>
);

export default ProjectIndexItem;
