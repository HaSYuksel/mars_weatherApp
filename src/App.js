import React from 'react';
import daySprite from './assets/dayNight.jpeg';
import temperatureSprite from './assets/temp_emoji.png';
import pressureSprite from './assets/atmosphere_pressure.webp';
import windSprite from './assets/wind_emoji.webp';


const Sprite = ({ imgSrc, text }) => {
  const spriteStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px' // Ensure there's some spacing around each sprite
  };

  return (
    <div style={spriteStyle}>
      <img src={imgSrc} alt={text} style={{ width: '100px', height: 'auto' }} />
      <p>{text}</p>
    </div>
  );
};


function App() {
  const style = {
    background: 'linear-gradient(#051C2C, #893C47, #2E1A47)',
    minHeight: '100vh',
    margin: 0,
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cornerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };

  return (
    <div className="App" style={style}>
      <div style={cornerStyle}>
        <Sprite imgSrc={daySprite} text="(Day/Night)" />
        <Sprite imgSrc={temperatureSprite} text="Temperature 50°F" />
      </div>
      <div style={{ flex: 1 }}></div> {/* Spacer div for demonstration */}
      <div style={cornerStyle}>
        <Sprite imgSrc={pressureSprite} text="Atmospheric Pressure 200P" />
        <Sprite imgSrc={windSprite} text="Wind Speed 346MPH" />
      </div>
    </div>
  );
}

export default App;
