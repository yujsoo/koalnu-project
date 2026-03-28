const Box = ({ item }) => {

  return (
    <div className="box">
      <p>{item && <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon"/>}</p>
      <p>{item && item.name}</p>
      <p>{item && item.weather[0].description}</p>
      <p>최고: {item && item.main.temp_max}°C 최저: {item && item.main.temp_min}°C 체감: {item && item.main.feels_like}°C</p>
      <p>습도: {item && item.main.humidity}% 풍속: {item && item.wind.speed} m/s</p>
    </div>
  );
};

export default Box;

