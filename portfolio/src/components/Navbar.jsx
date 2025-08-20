import { Link } from "react-router";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <h3>Karani</h3>
    <nav>
      <Link to="/">Home</Link> {" "}
      <Link to="/about">About</Link> {" "}
      <Link to="/">Skills</Link> {" "}
      <Link to="/portfolio">Portfolio</Link> {" "}
      <Link to="/">Contact</Link>
    </nav>
    </div>
  );
}

export default Navbar;
