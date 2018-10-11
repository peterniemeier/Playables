import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Playables</h1>
      </Link>

    </header>
    <Switch>

    </Switch>

  </div>
);
