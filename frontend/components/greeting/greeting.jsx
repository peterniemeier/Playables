import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
import { withRouter } from 'react-router-dom';

      // <p className="session-submit" onClick={(e) => processDemo()} value="Continue Demo">Continue Demo</p>
const Greeting = ({ currentUser, logout, processDemo }) => {




  const sessionLinks = () => (

    <nav className="login-signup">
      <Link to="/login" className="login-link">Login</Link>
      <span className="pipe">|</span>
      <Link to="/signup" className="signup-link">Sign Up</Link>

    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="avatar">
        <img src={window.images.avatar} />
      </div>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );


  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
