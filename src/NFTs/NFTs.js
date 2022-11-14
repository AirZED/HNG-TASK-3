import classes from "./NFTs.module.css";
import Card from "../components/Card/Card";
import { Images } from "../components/Images";

const NFTs = (props) => {
  const displayImages = Images.map((each) => <Card each={each} />);
  return (
    <div className={classes.nfts}>
      <main>{displayImages}</main>
    </div>
  );
};

export default NFTs;
