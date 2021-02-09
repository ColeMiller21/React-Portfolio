import React, { Component } from 'react';
import { Container } from "reactstrap";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollUpButton from "react-scroll-up-button";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Home />
          <Portfolio />
          <About />
          <ScrollUpButton AnimationDuration={800} />
        </Container>


      </div>
    )
  }


}

export default App;
