import React, { Component } from "react";
import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./containers/Admin"

class App extends Component {
  render() {
    return (

       <Router>
        <React.Fragment>
          <Route exact path="/" component={Main} />
          <Route exact path="/admin" component={Admin} />
        </React.Fragment>
      </Router>

    );
  }
}

export default App;