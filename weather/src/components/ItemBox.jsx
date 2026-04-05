const ItemBox = ({item}) => {
  return (
      <div key={item.key} className="item">
        <p className={'title'}>{item.title}</p>
        <b>{item.value ?? ""}</b>
      </div>
  )
}

export default ItemBox;