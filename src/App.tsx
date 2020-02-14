import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './top-bar/TopBar';
import { CommentList } from './comment/CommentList';

const App = () => {
  return (
    <div className="app">

      <TopBar/>

      <main className="app__content">
        <img src={logo} className="app__logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="btn"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </main>

      <aside className="app__aside">
        <CommentList/>
      </aside>
    </div>
  );
};

export default App;
