import { Fragment } from "react";

// imported style
import classes from "./Layout.module.css";

//Imported component
import Nav from "../Nav/Nav";
const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
