//importing styles
import classes from "./HomeNFTS.module.css";

//importing display images
import Image1 from "../../assets/home-assets/meta (1).png";
import Image2 from "../../assets/home-assets/meta (2).png";
import Image3 from "../../assets/home-assets/meta (3).png";


const HomeNFTS = (props) => {
  return (
    <div className={classes["home-nfts"]}>
      <section>
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </section>
    
      <section className={classes["non-mobile"]}>
        <img src={Image3} alt="meta 1" className={classes.img1} />
        <img src={Image1} alt="meta 1" className={classes.img2} />
        <img src={Image2} alt="meta 1" className={classes.img3} />
      </section>
    </div>
  );
};

export default HomeNFTS;
