import logo from '../assets/logo.svg';
import {Link} from "react-router-dom";

const Header = ({}) => {

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
          <button>로그인</button>
        </div>
      </header>
  )
}

export default Header;