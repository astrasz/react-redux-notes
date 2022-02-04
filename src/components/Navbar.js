import { Link } from "react-router-dom";

const logoStyle = {
  paddingLeft: "12px",
};

function Navbar() {
  return (
    // <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo" style={logoStyle}>
          <Link to="/">Logo</Link>
        </div>

        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
