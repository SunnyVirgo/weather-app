import React, { useState } from 'react';
import './App.css';
import NavBar from './components/header';
import Content from './components/content';
import Clear from './images/sunny.jpg';
import Clouds from './images/clouds.jpg';
import Thunder from './images/thunder.jpg';
import Wind from './images/windy.jpg';
import Rain from './images/rainy.jpg';
import Haze from './images/haze.jpg';
import Storm from './images/storm.jpg';

function App() {
  const [parentWeather, setParentWeather] = useState('');

  const handleWeatherChange = (weather) => {
    setParentWeather(weather);
  };

  const weatherIcons = {
    Clouds: Clouds,
    Thunder: Thunder,
    Rain: Rain,
    Clear: Clear,
    Storm: Storm,
    Wind: Wind,
    Haze: Haze,
  };

  // Check if the weather value exists in the mapping, otherwise use a default icon
  const iconPath = weatherIcons[parentWeather] || Storm;

  return (
    <div className="app" style={{ backgroundImage: `url(${iconPath})` }}>
      <NavBar />
      <Content onWeatherChange={handleWeatherChange} />
    </div>
  );
}

export default App;
