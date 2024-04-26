import logo01 from "../../../assets/logo001.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="app__header">
      <img className="header__Logo" src={logo01}></img>
    </header>
  );
}

export default Header;
