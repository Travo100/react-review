import React, { Component } from 'react';
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Students from "./pages/Students";
import Add from "./pages/Add";
import NoMatch from "./pages/NoMatch";

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <ul>
            <li>
              <Link to="/">See Students</Link>
            </li>
            <li>
              <Link to="/add">Create Student</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/add" component={Add} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
     
    )
  }
}


export default App;
