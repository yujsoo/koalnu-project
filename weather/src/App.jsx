import './App.css'
import { useEffect, useState } from 'react';
import Box from './components/Box'

function App() {
  const [position, setPosition] = useState(null)
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
         let lati = position.coords.latitude;
         console.log(lati)

         let long = position.coords.longitude;
         console.log(long)
         setPosition({ lati, long });
         getWeatherByCurrentLocation(lati, long);
        });
    }
  }

// 학교
  const getWeatherByCurrentLocation = async (lati, long) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=c3123e76f40546bce398999e12df2c88&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    console.log(data)
  }

  useEffect (() => {
    getLocation()
  }, []);

  return (
    <>
      <Box item={weather} loading={loading}/>
      <div className={'button-group'}>
        <button type="button" onClick={() => getLocation()} className="button">현재 위치</button>
      </div>
    </>
  )
}

export default App
