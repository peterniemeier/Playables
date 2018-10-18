import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.steps = this.props.steps;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = new FormData();
    project.append('project[title]', this.state.title);
    project.append('project[description]', this.state.description);
    project.append('project[photo]', this.state.photoFile);
    this.props.createProject(project).then(this.props.history.push(`/`));
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="project-form-container">
        <div className="project-form-content">
          <form onSubmit={this.handleSubmit} className="project-form-box">
            <div className="project-form">
              <br />
            <div className="fbutton">
              <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update('title')}
              />
            </div>
            <br />
            <div className="fbutton">
              <input
              type="textbox"
              placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              />
            </div>

            <div className='fphoto'>
              <input type='file'
                onChange={this.handleFile.bind(this)}
                />
            </div>
            </div>
            <br/>
            <br/>
            <input className="project-submit" type="submit" value="Create Playable" />
          </form>
        </div>
          <br/>
          <div className="log-options">
          temp
          </div>
          {this.renderErrors()}
        <div className="blur"></div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
