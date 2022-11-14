import classes from "./Adventure.module.css";
import { Images } from "../Images";

//imported components
import Card from "../Card/Card";

const Adventure = (props) => {
  const displayedImages = Images.slice(0, 8).map((each, id) => (
    <Card each={each} key={id} />
  ));
  return (
    <div className={classes.adventure}>
      <h2>Inspiration for your next adventure</h2>
      <main>{displayedImages}</main>
    </div>
  );
};

export default Adventure;
