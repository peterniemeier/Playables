import React, { Component } from 'react';
import { Route } from 'react-router-dom';
        // <Route exact path="/projects/new" component={CreateProjectFormContainer} />
import ProjectIndexItem from './project_index_item';
import CreateProjectFormContainer from '../project_form/create_project_form_container';
// <Route exact path="/" component={ProjectFormContainer} />
          // {projects.map(project => <ProjectIndexItem key={project.id} project={project} />)}
class ProjectIndex extends Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {

    const {projects} = this.props;
    return (
      <section className="projects">

        <ul>
          {projects.map(project => <ProjectIndexItem key={project.id} project={project} />)}
        </ul>
      </section>
    );
  }
}

export default ProjectIndex;
