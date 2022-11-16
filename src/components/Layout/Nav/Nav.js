import { useContext, useState } from "react";
import { store } from "../../../store/contextStore";

import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";
import mobileLogo from "../../../assets/mobile-icons/Vector (1).png";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const [showNav, setShowNav] = useState(false);
  const ModalCtx = useContext(store);

  const closeModalHandler = () => {
    ModalCtx.openModal();
  };

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const handleOpenNav = (e) => {
    if (e.target.tagName === "A") {
      setShowNav((prev) => !prev);
    }
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.mobile}>
        <BiMenu onClick={toggleNav} />
        <img src={mobileLogo} alt="mobile Logo" className={classes.logo} />
      </div>
      <img src={logo} alt="logo" className={classes["non-mobile"]} />

      {showNav && (
        <ul onClick={handleOpenNav}>
          <NavLink activeClassName={classes.active} to="/Air BnB">
            Home
          </NavLink>
          <NavLink activeClassName={classes.active} to="/place to stay">
            Place to Stay
          </NavLink>
          <NavLink activeClassName={classes.active} to="#">
            NFTs
          </NavLink>
          <NavLink activeClassName={classes.active} to="#">
            Community
          </NavLink>
        </ul>
      )}
      <div className={classes.actions}>
        <button onClick={closeModalHandler}>Connect wallet</button>
        <div className={`${classes.mobile} ${classes.search}`}>
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
