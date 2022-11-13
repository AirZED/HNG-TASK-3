import { Fragment } from "react";

//imported components
import Home from "../components/Home/Home";
import Adventure from "../components/Adventure/Adventure";

const PlaceToStay = (props) => {
  return (
    <Fragment>
      <Home />
      <Adventure />
    </Fragment>
  );
};

export default PlaceToStay;
