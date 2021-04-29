import React, { FC } from 'react';
import './App.css';
import { Login } from './components/login';
import VideoList from './components/video-list';

const App: FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <VideoList />
      </header>
    </div>
  );
}

export default App;
