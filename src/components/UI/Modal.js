import classes from "./Modal.module.css";

//imported components
import Close from "../Icons/Close";
import OpenMore from "../Icons/OpenMore";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div>
        <h2>Connect Wallet</h2>
        <Close />
      </div>
      <div>
        <p>Choose your preferred wallet</p>
        <ul className={classes.list}>
          <li>
            <div>MetaMusk</div>
            <OpenMore />
          </li>
          <li>
            <div>MetaMusk</div>
            <OpenMore />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
