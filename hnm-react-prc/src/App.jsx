import { Routes, Route } from "react-router-dom";
import { ProductAllPage } from "./page/ProductAllPage";
import { ProductDetailPage } from "./page/ProductDetailPage";
import { LoginPage } from "./page/LoginPage";

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.
function App() {

  return (
    <Routes>
      /* 메인 페이지 */
      <Route path="/products" element={<ProductAllPage/>} />
      /* 상세 페이지 */
      <Route path="/products/:id" element={<ProductDetailPage/>} />
      /* 로그인 페이지 */
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  )
}

export default App
