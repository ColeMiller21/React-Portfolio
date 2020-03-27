import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row } from "reactstrap";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio"
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Router>
            <Row>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Row>
          </Router>
        </Container>
      </div>
    )
  }


}

export default App;
