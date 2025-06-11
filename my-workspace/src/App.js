import React from 'react';
import HeartRain from './components/HeartRain';
import Carousel from './components/Carousel';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeartRain />
      <Carousel />
      <MusicPlayer track="X" />
    </div>
  );
}

export default App;