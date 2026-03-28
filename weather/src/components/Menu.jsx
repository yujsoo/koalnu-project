const Menu = ({ menu, selectedCity, setSelectedCity }) => {
  return (
    <ul className="menu">
      {menu.map((el) => (
        <li key={el} className={selectedCity === el ? 'active' : ''}>
          <button onClick={() => setSelectedCity(el)}>
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Menu;