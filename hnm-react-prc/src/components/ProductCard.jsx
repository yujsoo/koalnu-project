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
          <div className={'hover-box'}>
            <select name="" id="" className={'size-select'}>
              {item.size.map(size => (
                  <option value={size}>{size}</option>
              ))}
            </select>
            <div className={'buttons'}>
              <Link to={`/`}>ADD TO CART</Link>
              <Link to={`/product/${item.id}`}>PRODUCT INFO</Link>
            </div>
          </div>
        </div>
        <div className={'info'}>
          <div className={'label'}>
            <span className={'new'}>{item.new ? 'NEW !' : ''}</span>
            <span className={'choice'}>{item.choice ? 'Concious Choice!'
                : ''}</span>
          </div>
          <Link to={`/products/${item.id}`}>
            <p className={'title'}>{item.title}</p>
          </Link>
        </div>

      </li>
  )
}

export default ProductCard;