const Menu = ({ menu }) => {

  return (
    <ul className={'menu'}>
      <li className='active'><button>{menu[0]}</button></li>
      <li><button>{menu[1]}</button></li>
      <li><button>{menu[2]}</button></li>
      <li><button>{menu[3]}</button></li>
    </ul>
  )
}

export default Menu;