import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './top-bar/timer/Timer';
import Welcome from './top-bar/welcome/Welcome';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Welcome name={'World'}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Timer label={"time is"}/>
      </header>
    </div>
  );
}

export default App;
