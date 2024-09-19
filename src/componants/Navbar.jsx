import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-item">
          <h1>
            <img src={logo} alt="" className="logo" />
          </h1>
          <h>Meedgo Eco System</h>
        </div>

        <ul className="nav-items">
          <li>Eleven</li>
          <li>Twelve</li>
          <li>Thirten</li>
          <li>Sixteen</li>
        </ul>

        <div className="endnav">
          <button className="btn1">Log in</button>
          <button className="btn2">Start Free Trial</button>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
