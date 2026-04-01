import ProductCard from "../components/ProductCard";

const ProductAllPage = ({productsList}) => {

  return (
      <div className={'container'}>
        <ul className='list'>
          {productsList.map(item => (
              <ProductCard key={item.id} item={item}/>
          ))
          }
        </ul>
      </div>
  )
}

export default ProductAllPage;