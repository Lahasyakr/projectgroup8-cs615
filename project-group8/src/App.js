import React, { Component } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Header from './Components/Header';
import Team from './Components/Team';
import ProjectProposal from './Components/ProjectProposal';
import Analysis from './Components/Analysis/Analysis';
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
            <Route path='analysis' Component={Analysis} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}



export default App;