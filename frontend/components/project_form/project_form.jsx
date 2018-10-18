import React from 'react';
import { withRouter } from 'react-router-dom';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.handleRemoveStep = this.handleRemoveStep.bind(this);
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
    const steps = this.steps;
    this.props.createSteps(steps)
    this.props.createProject(project).then(this.props.createSteps(steps)).then(this.props.history.push(`/`));
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleStepChange = (idx) => (e) => {
  const newStep = this.state.steps.map((step, sidx) => {
    if (idx !== sidx) return step;
    return { ...step, body: e.target.value};
  });
    this.setState({ steps: newStep });
  }


  handleAddStep = () => {
    this.setState({
      steps: this.state.steps.concat([{ body: '', photoFile: null}])
    });
  }

  handleRemoveStep = (idx) => () => {
  this.setState({ steps: this.state.steps.filter((s, sidx) => idx !== sidx) });
}

handleStepFile = (idx) => (e) => {
const step = this.state.steps.map((step, sidx) => {
  if (idx !== sidx) return step;
  return { ...step, photoFile: e.target.value};
});
  this.setState({ steps: step });
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
              <br />
            <div className='fphoto'>
              <input type='file'
                onChange={this.handleFile.bind(this)}
                />
            </div>
              <br />
                {this.state.steps.map((step, idx) => (
                          <div className="step">
                            <input
                              type="text"
                              placeholder={`Step #${idx + 1}`}
                              value={step.body}
                              onChange={this.handleStepChange(idx)}
                            />
                            <input type='file'
                              onChange={this.handleStepFile(idx).bind(this)}
                              />
                          <button type="button" onClick={this.handleRemoveStep(idx)} className="fbutton">Remove Step</button>
                          </div>
                        ))}
                        <button type="button" onClick={this.handleAddStep} className="fbutton">Add Step</button>


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
