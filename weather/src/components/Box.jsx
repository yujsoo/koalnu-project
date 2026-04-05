import clearSkyIcon from '../assets/ic_clear_sky.svg';
import fewCloudsIcon from '../assets/ic_few_clouds.svg';
import scatteredCloudsIcon from '../assets/ic_scattered_clouds.svg';
import brokenCloudsIcon from '../assets/ic_broken_clouds.svg';
import showerRainIcon from '../assets/ic_shower_rain.svg';
import rainIcon from '../assets/ic_rain.svg';
import thunderstormIcon from '../assets/ic_thunderstorm.svg';
import snow from '../assets/ic_snow.svg';
import mist from '../assets/ic_mist.svg';

const weatherIconMap = {
  'clear sky': clearSkyIcon,
  'few clouds': fewCloudsIcon,
  'scattered clouds': scatteredCloudsIcon,
  'broken clouds': brokenCloudsIcon,
  'shower rain': showerRainIcon,
  'rain': rainIcon,
  'thunderstorm': thunderstormIcon,
  'snow': snow,
  'haze': mist
};

const Box = ({item}) => {
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
            <b className='name'>{item ? item.weather[0].description : ''}</b>
            <b className='temp'>{item ? item.main.temp : ''} °C</b>
          </div>
          <i className="icon">
            <img src={item && weatherIconMap[item?.weather[0].description]}
                 alt=""/>
          </i>
        </div>
      </div>
  );
};

export default Box;

