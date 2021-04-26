import React, { FC } from 'react';
import './App.css';
import VideoList from './components/video-list';

const App: FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <VideoList />
      </header>
    </div>
  );
}

export default App;
