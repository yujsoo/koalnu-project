import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";

const ProductAllPage = () => {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    let url = 'http://localhost:4000/products';
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
    setProductsList(data);
  }

  useEffect(() => {
    getProducts();

  }, [])

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