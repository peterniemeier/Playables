import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Me Up!',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processDemo: (demoUser) => dispatch(login(demoUser)),
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
