import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/common/navbar';
import Counter from './components/counter';
import Login from './components/login';
import Profile from './components/profile';
import Home from './components/home';
import NotFound from './components/notFound';

class App extends Component {
  state = {
    user: null
  };

  handleLogin = user => {
    console.log(user);
    if (user.username === 'Admin' && user.password === '12345') {
      this.setState({
        user
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <NavBar user={this.state.user} />
        </div>
        <div className="container container--content">
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />} />
            <Route path="/profile" render={(props) => <Profile user={this.state.user} {...props} />} />
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
