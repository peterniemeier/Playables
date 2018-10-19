import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import ProjectForm from './project_form';
import {createProject} from '../../actions/project_actions';
import {updateState} from '../../actions/project_actions';
import {createStep} from '../../actions/project_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
    project: {title: '', description: '', photoFile: null, steps: [{body:'', photoFile: null}]},


    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    createStep: (step) => dispatch(createStep(step)),
    updateState: (state) => dispatch(updateState(state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
