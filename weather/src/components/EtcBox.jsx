import ItemBox from './ItemBox'

const EtcBox = ({ item }) => {
  if (!item) return null;
  console.log(item)

  return (
    <div className={'etc-box'}>
      {item.map((el) => (
        <ItemBox key={el.key} item={el}/>
        ))}
    </div>
  );
};

export default EtcBox;

