const Box = ({ item }) => {
  if (!item) return <div>로딩중...</div>;

  return (
    <div className={`box`}>
        <p>{item && item.name}</p>
        <p>온도: {item.main.temp}°C</p>
        <p>체감: {item.main.feels_like}°C</p>
        <p>습도: {item.main.humidity}%</p>
        <p>풍속: {item.wind.speed} m/s</p>
     </div>
  )
}

export default Box;

