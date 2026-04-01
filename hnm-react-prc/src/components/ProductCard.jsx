import {Link} from "react-router-dom";

const ProductCard = ({item}) => {
  const price = item.price.toLocaleString();

  if (!item) {
    return false;
  }

  return (
      <li className={'card'}>
        <Link to={`/products/${item.id}`}>
          <div className={'img'}>
            <img src={item.img} alt={item.title}/>
          </div>
          <div className={'info'}>
            <div className={'label'}>
              {item.new && <span className={'new'}>NEW !</span>}
              {item.choice && <span
                  className={'choice'}>Concious Choice!</span>}
            </div>
            <p className={'title'}>{item.title}</p>
            <p className={'price'}>{price}</p>
          </div>
        </Link>
      </li>
  )
}

export default ProductCard;