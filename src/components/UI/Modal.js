import classes from "./Modal.module.css";

//imported images
import Metamask from "../../assets/modal-assets/image 66.png";
import walletConnet from "../../assets/modal-assets/image 69.png";

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
            <div>
              <img src={Metamask} alt="Metamask" /> Metamask
            </div>
            <OpenMore />
          </li>
          <li>
            <div>
              <img src={walletConnet} alt="walletconnect" />
              WalletConnect
            </div>
            <OpenMore />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
