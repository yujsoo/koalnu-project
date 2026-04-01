import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAllPage from "./page/ProductAllPage";
import LoginPage from "./page/LoginPage";
import Header from "./components/Header.jsx";
import LandingPage from "./page/LandingPage.jsx";
import {useEffect, useState} from "react";
import PrivateRoute from "./route/PrivateRoute.jsx";

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다. (ok)
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다. (ok)
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.

// Mini 과제 Comment
// concious choice 부분도 true이면 보이고 false이면 안보이게 해주세요. (ok)
// 카드에 마우스를 올려두면 카드가 커지는 hover 이벤트를 만들어 주세요. (ok)
// 로그인 버튼을 클릭하면 로그인 페이지가 나오게 스스로 도전해보세요! (ok)
// 로그인 페이지의 디자인을 스스로 해보세요. (ok)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    let url = 'https://my-json-server.typicode.com/yujsoo/koalnu-project/hnm-react-prc/products';
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
    setProductsList(data);
  }

  useEffect(() => {
    getProducts();

  }, [])

  return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route index path="/" element={<LandingPage/>}/>
          <Route path="/products"
                 element={<ProductAllPage productsList={productsList}/>}/>
          <Route path="/products/:id"
                 element={<PrivateRoute isLoggedIn={isLoggedIn}
                                        productsList={productsList}/>}/>
          <Route path="/login"
                 element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
      </>
  )
}

export default App
