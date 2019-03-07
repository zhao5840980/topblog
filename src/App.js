import React, {Component} from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Myblog from './pages/system/myblog';
import Nomatch from './pages/nomatch';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/home"></Redirect> }></Route>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/myblog" component={Myblog}/>
          <Route component={Nomatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
