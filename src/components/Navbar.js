import { NavLink } from "react-router-dom";

const logoStyle = {
  paddingLeft: "12px",
};

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo" style={logoStyle}>
          <NavLink to="/">Logo</NavLink>
        </div>

        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
