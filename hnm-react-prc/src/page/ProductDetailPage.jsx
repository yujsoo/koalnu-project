import {useParams} from "react-router-dom";
import ProdcutDetailCard from "../components/ProdcutDetailCard.jsx";

const ProductDetailPage = ({productsList}) => {
  const {id} = useParams();
  return (
      <div className={'container'}>
        <ProdcutDetailCard key={productsList[id].id} item={productsList[id]}/>
      </div>
  )
}

export default ProductDetailPage;