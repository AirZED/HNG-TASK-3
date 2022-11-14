import { Fragment } from "react";

// imported style
import classes from "./Layout.module.css";

//Imported component
import Nav from "./Nav/Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
