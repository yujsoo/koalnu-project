import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

const Header = ({isLogin, logout}) => {

  return (
      <header className={'header'}>
        <div className={'menu'}>
          <h1><img src={logo} alt={''}/></h1>
          <nav>
            <ul>
              <li><Link to={'/'}>Women</Link></li>
              <li><Link to={'/'}>Men</Link></li>
              <li><Link to={'/'}>Kids</Link></li>
              <li><Link to={'/'}>Home</Link></li>
            </ul>
          </nav>
        </div>
        <div className="etc">
          {isLogin ? (
              <button onClick={logout}>logout</button>
          ) : (
              <Link to={'/login'}>login</Link>
          )}
        </div>
      </header>
  )
}

export default Header;