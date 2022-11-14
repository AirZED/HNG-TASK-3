//imported images
import whiteLogo from "../../assets/logo-white.png";

//importing icons components
import Twitter from "../Icons/Twitter";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div>
        <img src={whiteLogo} alt="logo" />
        <div className={classes["footer-logo"]}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className={classes["foot-links"]}>
        <ul>
          <li>Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li>Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
        <ul>
          <li>About us</li>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
