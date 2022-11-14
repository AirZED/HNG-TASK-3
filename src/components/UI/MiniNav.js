import classes from "./MiniNav.module.css";

import settingIcon from "../../assets/icons-assets/setting-5.png";

const MiniNav = (props) => {
  return (
    <nav className={classes["mini-nav"]}>
      <ul>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <button>
        Location <img src={settingIcon} alt="setting Icon" />
      </button>
    </nav>
  );
};

export default MiniNav;
