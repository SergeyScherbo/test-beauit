import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/common/navbar';
import Counter from './components/counter';
import Login from './components/login';
import Profile from './components/profile';
import Home from './components/home';
import NotFound from './components/notFound';

import { setUserLocally, removeUserLocally } from './utils/users';

class App extends Component {
  state = {
    user: null
  };

  handleLogin = user => {
    this.setState({ user });
    setUserLocally(user);
  };

  handleLogout = () => {
    this.setState({ user: null });
    removeUserLocally();
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <NavBar onLogout={this.handleLogout} />
        </div>
        <div className="container container--content">
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />} />
            {this.state.user ? <Route path="/profile" component={Profile} /> : null}
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
