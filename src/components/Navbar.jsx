import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='login'>login</NavLink>
        </li>
        <li>
          <NavLink to='/logout'>logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
