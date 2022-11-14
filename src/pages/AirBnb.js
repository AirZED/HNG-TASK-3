import { Fragment } from "react";

//imported components
import Home from "../components/Home/Home";
import Adventure from "../components/Adventure/Adventure";
import HomeNFTS from "../components/Home/HomeNFTS";

const AirBnb = (props) => {
  return (
    <Fragment>
      <Home />
      <Adventure />
      <HomeNFTS />
    </Fragment>
  );
};

export default AirBnb;
