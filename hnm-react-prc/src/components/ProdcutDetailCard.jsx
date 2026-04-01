const ProdcutDetailCard = ({item}) => {
  const price = item.price.toLocaleString();

  // default size
  // 사이즈가 s,m 25,26 type값에 따라 정의해야할듯?

  if (!item) {
    return false;
  }

  return (
      <div className={'detail-card'}>
        <div className={'img'}>
          <img src={item.img} alt=""/>
        </div>
        <div className={'info'}>
          <p className={'title'}>{item.title}</p>
          <p className={'price'}>{price}</p>
          <p className={'size'}>{
            item.size.map((size, index) => (
                <button>{item.size[index]}</button>
            ))
          }</p>
          <p className={'desc'}>{item.desc}</p>
        </div>
      </div>
  )
}

export default ProdcutDetailCard