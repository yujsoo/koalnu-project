import logo from '../assets/logo.svg';
import {Link, useNavigate} from "react-router-dom";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  }

  const goLogout = () => {
    setIsLoggedIn(false)
    navigate("/"); // 로그아웃 버튼 클릭시 메인 페이지로 이동

  }

  return (
      <header className={'header'}>
        <div className={'menu'}>
          <h1><Link to={'/'}><img src={logo} alt={''}/></Link></h1>
          <nav>
            <ul>
              <li><Link to={'/products'}>여성</Link></li>
              <li><Link to={'/products'}>남성</Link></li>
              <li><Link to={'/products'}>아동</Link></li>
              <li><Link to={'/products'}>홈웨어</Link></li>
              <li><Link to={'/products'}>SALE !</Link></li>
            </ul>
          </nav>
        </div>
        <div className="etc">
          {!isLoggedIn ?
              <button onClick={goLogin}>로그인</button> :
              <button onClick={goLogout}>로그아웃</button>
          }
        </div>
      </header>
  )
}

export default Header;