import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/WeMustGoLogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const redirectSignup = () =>{
    navigate('/signup');
  }
  const redirectSignin = () =>{
    navigate('/signin');
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Acceuil</a></p>
          <p><a href="#blog">Évènements</a></p>
          <p><a href="#carte">Carte</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button" onClick={redirectSignin}>Sign in</button>
        <button type="button" onClick={redirectSignup}>Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Acceuil</a></p>
            <p><a href="#blog">Évènements</a></p>
            <p><a href="#carte">Carte</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button" onClick={redirectSignin}>Sign in</button>
            <button type="button" onClick={redirectSignup}>Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
