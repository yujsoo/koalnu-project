import person from '../assets/person.png';
import computer from '../assets/computer.png';

const Box = ({ title, item }) => {
  // 플레이어별 null img
  const nullImg = title === '나' ? person : computer;

  return (
    <div className={'box'}>
      <p className={'title'}>{title}</p>
      <img src={item?.img || nullImg} alt={''} className={'img'}/>
    </div>
    )
}

export default Box;

