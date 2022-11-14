import { useContext } from "react";
import { store } from "../../../store/contextStore";

import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";

import classes from "./Nav.module.css";

const Nav = (props) => {
  const ModalCtx = useContext(store);

  const closeModalHandler = () => {
    ModalCtx.openModal();
  };

  return (
    <nav className={classes.nav}>
      <img src={logo} alt="logo" />
      <ul>
        <NavLink activeClassName={classes.active} to="/Air BnB">
          Home
        </NavLink>
        <NavLink activeClassName={classes.active} to="/place to stay">
          Place to Stay
        </NavLink>
        <NavLink activeClassName={classes.active} to="/nfts">
          NFTs
        </NavLink>
        <NavLink activeClassName={classes.active} to="/community">
          Community
        </NavLink>
      </ul>
      <button onClick={closeModalHandler}>Connect wallet</button>
    </nav>
  );
};

export default Nav;
