import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
