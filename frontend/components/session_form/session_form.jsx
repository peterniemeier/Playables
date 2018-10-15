import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.demoUser = {
      username: 'demouser',
      password: 'demouser'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo(this.demoUser);
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
      <div className="login-form-container">
        <div className="content box">

        <form onSubmit={this.handleSubmit} className="login-form-box">


          <div className="login-form">
            <br />
          <p className="session-submit" onClick={(e) => this.handleDemo(e)} value="Continue Demo">Continue Demo</p>
            <br/>
            <div className="fbutton">
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            </div>
            <br/>
            <div class="split">
            <span class="hr">&nbsp;
            </span>
            <span>OR</span>
            <span class="hr">&nbsp;
            </span>
            </div>
            <div className="fbutton">
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            </div>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>

          <br/>
          <div className="log-options">
          Please {this.props.formType} or {this.props.navLink}
          </div>
          {this.renderErrors()}
        </form>
        <h1 class="blur"></h1>
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
