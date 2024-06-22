import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: state.theme === 'light' ? 'dark' : 'light'
    });
  };

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>
      <button onClick={toggleTheme}>
        {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
