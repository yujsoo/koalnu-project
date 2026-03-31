import {Link} from "react-router-dom";

const ProductCard = ({item}) => {

  if (!item) {
    return false;
  }
  return (
      <li className={'card'}>
        <div className={'img'}>
          <Link to={`/products/${item.id}`}>
            <img src={item.img} alt={item.title}/>
          </Link>
        </div>
        <div className={'info'}>
          <div className={'label'}>
            {item.new && <span className={'new'}>NEW !</span>}
            {item.choice && <span className={'choice'}>Concious Choice!</span>}
          </div>
          <Link to={`/products/${item.id}`}>
            <p className={'title'}>{item.title}</p>
          </Link>
        </div>

      </li>
  )
}

export default ProductCard;