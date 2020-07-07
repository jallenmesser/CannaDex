import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import MainContainer from './Containers/MainContainer'

function App() {
  
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
