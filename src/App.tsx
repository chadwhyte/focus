import React, { FC } from 'react';
import './App.css';
import { Login } from './components/login';
import VideoList from './components/video-list';

const App: FC<{}> = () => {
  return (
    <div className="app">
      <Login />
      <VideoList />
    </div>
  );
}

export default App;
