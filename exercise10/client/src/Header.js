import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          XXXXXXXXXXX
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            <Link to="/">React Intro</Link>
          </a>
          <Link to="exampledataview">Component</Link>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;
