import ProductDetailPage from "../page/ProductDetailPage.jsx";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({isLoggedIn}) => {

  return (
      <>{isLoggedIn ? <ProductDetailPage/> : <Navigate to="/login"/>}</>
  )
}

export default PrivateRoute