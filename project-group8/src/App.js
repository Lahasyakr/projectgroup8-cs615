import React, { Component } from 'react';
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import About from './Components/About';
import Header from './Components/Header';
import Team from './Components/Team';
import ProjectProposal from './Components/ProjectProposal';
import './CSS/App.css'
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Header />
          <Routes>
            <Route exact path='/' Component={About} />
            <Route path='project_proposal' Component={ProjectProposal} />
            <Route path='ourteam' Component={Team} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}



export default App;