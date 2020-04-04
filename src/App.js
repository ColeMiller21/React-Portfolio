import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollUpButton from "react-scroll-up-button";
import skills from "./files/skills.json";
import './App.css';

class App extends Component {

  state = {
    skills
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Home />
          <About skills={skills} />
          <Portfolio />
          <ScrollUpButton AnimationDuration={800} />
        </Container>


      </div>
    )
  }


}

export default App;