import classes from "./NFTs.module.css";
import Card from "../components/Card/Card";
import { Images } from "../components/Images";

const NFTs = (props) => {
  const displayImages = Images.map((each, id) => <Card each={each} key={id} />);
  return (
    <div className={classes.nfts}>
      <main>{displayImages}</main>
    </div>
  );
};

export default NFTs;
