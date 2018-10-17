import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
// import ProjectShowContainer from './project_show/project_show_container';
import ProjectIndexContainer from './project_index/project_index_container';
// import ProjectFormContainer from './project_form/project_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header id="greeting">
      <Link to="/" className="header-link">
        <h1>playables</h1>
      </Link>
      <GreetingContainer />
    </header>

<Switch>
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/" component={ProjectIndexContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Redirect to='/' />
</Switch>
  </div>
);

export default App;

// <Switch>
//     <AuthRoute exact path="/login" component={LogInFormContainer} />
//     <AuthRoute exact path="/signup" component={SignUpFormContainer} />
//     <ProtectedRoute exact path="/projects/new" component={ProjectFormContainer} />
//     <Route path="/projects/:projectId" component={ProjectShowContainer} />
//     <Route exact path="/" component={SearchContainer} />
// </Switch>
