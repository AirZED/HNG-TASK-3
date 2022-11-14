import { Fragment, useContext } from "react";

import ReactDOM from "react-dom";
import { store } from "../../store/contextStore";

import classes from "./Backdrop.module.css";

//imported component
import Modal from "./Modal";

const Backdrop = (props) => {
  //Initailizing context
  const Ctx = useContext(store);

  //close modal function
  const closeModalHandler = () => {
    Ctx.closeModal();
  };
  return <div className={classes.backdrop} onClick={closeModalHandler}></div>;
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
