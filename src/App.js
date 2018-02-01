import React, { Component } from 'react';
import Robot from './components/Robot';
import './stylesheets/app.css';

const App = () => {
  return (
    <div id="home">
      <h1>Robot Factory</h1>
      <div id="component">
        <Robot />
      </div>
    </div>
  );
};

export default App;
