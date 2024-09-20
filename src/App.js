import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Bands } from './components/Bands';
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Projects />
      <About />
      <Bands />
      <Contact />
    </div>
  );
}

export default App;
