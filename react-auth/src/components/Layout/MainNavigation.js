import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authContext = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authContext.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={authContext.logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function setup() {}

export default MainNavigation;
