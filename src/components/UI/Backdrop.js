import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

//imported component
import Modal from "./Modal";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Portaler = () => {
  const portalEl = document.getElementById("portal");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(<Modal />, portalEl)}
    </Fragment>
  );
};

export default Portaler;
