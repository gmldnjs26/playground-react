import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className={classes.header}>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
