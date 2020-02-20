import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CommentControl } from './comment/CommentControl';
import { ActionBar } from './action-bar/ActionBar';
import { FeedBack } from './feedback/FeedBack';
import { Heater } from './heater/Heater';
import { ProductList } from './products/ProductList';

const App = () => {
  return (
    <div className="app-wrapper">

      <div className="app">

        <ActionBar/>

        <main className="app__content">
          <div className="cover app__cover">
            <img src={logo} className="main-picture" alt="logo"/>
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
          </div>
          <div className="app__feedback">
            <h2>Send Feedback!</h2>
            <FeedBack submit={console.log}/>
          </div>

          <h2>
            Water pan
          </h2>
          <Heater/>

          <h2>
            Product list
          </h2>
          <ProductList/>
        </main>

        <aside className="app__aside">

          <h2>
            Comments
          </h2>
          <CommentControl/>
        </aside>

      </div>
    </div>
  );
};

export default App;
