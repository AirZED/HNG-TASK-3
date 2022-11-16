import { useContext, useEffect, useState } from "react";
import { store } from "../../../store/contextStore";

import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";
import mobileLogo from "../../../assets/mobile-icons/Vector (1).png";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const ModalCtx = useContext(store);

  const closeModalHandler = () => {
    ModalCtx.openModal();
  };

  const toggleNav = () => {
    setShowNav((prev) => !prev);
    setShowSearch(false);
  };

  const handleCloseNav = (e) => {
    if (e.target.tagName === "A") {
      setShowNav((prev) => false);
      setShowSearch(false);
    }
  };

  const showSearchEl = () => {
    setShowSearch((prev) => !prev);
    setShowNav(false);
  };

  const navClassName = !showNav ? classes.hidden : "";

  const SearchEl = () => {
    return (
      <div className={classes.searchEl}>
        <input placeholder="Search for location" />
        <button onClick={showSearchEl}>Search</button>
      </div>
    );
  };

  return (
    <nav className={classes.nav}>
      {showSearch && <SearchEl />}
      <div className={classes.mobile}>
        <BiMenu onClick={toggleNav} />
        <img src={mobileLogo} alt="mobile Logo" className={classes.logo} />
      </div>
      <img src={logo} alt="logo" className={classes["non-mobile"]} />

      <ul onClick={handleCloseNav} className={navClassName}>
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

      <div className={classes.actions}>
        <button onClick={closeModalHandler}>Connect wallet</button>
        <div
          className={`${classes.mobile} ${classes.search}`}
          onClick={showSearchEl}
        >
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
