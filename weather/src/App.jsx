import './App.css'
import { useEffect, useState } from 'react';
import HomeTitle from './components/HomeTitle'
import Menu from './components/Menu'
import Box from './components/Box'
import EtcBox from './components/EtcBox'
import Loading from './components/Loading'

// menu
const menu = ['Current', 'Seoul', 'Tokyo', 'NewYork'];

function App() {
  const [position, setPosition] = useState(null)
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // 풍속, 습도 데이터
  const items1 = [
    {
      key: 'wind',
      title: '풍속',
      value: weather?.wind?.speed
    },
    {
      key: 'humidity',
      title: '습도',
      value: weather?.main?.humidity
    }
  ];

  // 최고, 최저, 체감 데이터
  const items2 = [
    {
      key: 'max',
      title: '최고',
      value: weather?.main?.temp_max
    },
    {
      key: 'min',
      title: '최저',
      value: weather?.main?.temp_min
    },
    {
      key: 'feels',
      title: '체감',
      value: weather?.main?.feels_like
    },
  ];
  /*
    1. 사이트 입장시 현재 위치의 날씨가 보여야 한다.
    2. 다른 도시 버튼들을 클릭하면 다른 도시 날씨가 나와야 한다.
    3. 유저가 클릭한 도시 버튼이 표시가 되어야 한다.
    4. 다시 current location 버튼을 누르면 다시 현재 위치의 날씨를 볼 수 있다.
    5. 도시간 이동시 로딩스피너가 보여야 한다
    6. 처음 사이트에 들어와서 위치 접근 허용을 안했을때 NaN가 아닌 로딩스피너가 나와야한다
  */
  return (
    <>
      <div className={'container'}>
        <HomeTitle/>
        <Menu menu={menu}/>
        <div className={'box-group'}>
          {loading ?
            <div className='loading'><Loading loading={loading}/></div> :
            <>
              <Box item={weather} loading={loading}/>
              <EtcBox item={items1} loading={loading}/>
              <EtcBox item={items2} loading={loading}/>
            </>
          }

        </div>
      </div>
    </>
  )
}

export default App
