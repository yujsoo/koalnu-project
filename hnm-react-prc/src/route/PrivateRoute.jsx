import ProductDetailPage from "../page/ProductDetailPage.jsx";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({isLoggedIn, productsList}) => {

  return (
      <>{isLoggedIn ? <ProductDetailPage productsList={productsList}/> :
          <Navigate to="/login"/>}</>
  )
}

export default PrivateRoute