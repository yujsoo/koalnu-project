import clearSkyIcon from '../assets/ic_clear_sky.svg';

const Box = ({ item }) => {
  console.log(item)
  const formatted = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className={'box'}>
      <div className={'main-weather'}>
        <div className='info'>
          <p className='date'>{formatted}</p>
          <b className='name'>{item && item.weather[0].description}</b>
          <b className='temp'>{item && item.main.temp}°C</b>
        </div>
        <i className={'icon'}>
          {item && item.weather[0].description === 'clear sky' && <img src={clearSkyIcon} alt=""/> }
        </i>
      </div>
    </div>
  );
};

export default Box;

