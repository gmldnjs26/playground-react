import { Fragment } from "react";

import mealsImageSrc from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImageSrc} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
