import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInterface } from './user/user.interface';
import { CommentInterface } from './comment/comment.interface';
import Comment from './comment/Comment';
import { TopBar } from './top-bar/TopBar';

const activeUser: UserInterface = {
  name: 'You',
  avatarUrl: 'https://placekitten.com/g/64/64',
};

const latestComment: CommentInterface = {
  author: activeUser,
  content: 'I like to comment on the web, before it exist',
  publishedDate: new Date(0),
};

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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>

      <hr/>
      <aside className="app__aside">
        <Comment author={latestComment.author} publishedDate={latestComment.publishedDate}
                 content={latestComment.content}/>
      </aside>
    </div>
  );
};

export default App;
