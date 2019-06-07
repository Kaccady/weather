import React, { useState } from "react";
import axios from "axios";
import sun from './sunny.svg';
import moon from './night.svg';

const currentTime = new Date().getHours();
function App() {
  const [weather, setWeather] = useState("");
  if (weather === "") {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?id=536203&APPID=4b5cb159efdd504a26993167524002db"
      )
      .then(res => setWeather(res));
  }
  const [isDark, setIsDark] = useState(currentTime < 7 ? true : false);
  if(weather!==''){
    console.log(weather.data);
  return (
    <div className="App">
      <div
        className={isDark ? "weather dark" : "weather light"}
        onClick={() => setIsDark(!isDark)}
      >
        <img src={isDark?moon:sun} alt="pic here" className='ico' />
        <div className="text-block">
          <p className="sity-name">{weather.data.name}</p>
          <p className="temp">{(weather.data.main.temp-273).toFixed()+'°C'}</p>
        </div>
      </div>
    </div>
  );
}else{return null}}

export default App;
