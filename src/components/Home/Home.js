import classes from "./Home.module.css";

//imported icons
import openSea from "../../assets/opensea.png";
import metaMusk from "../../assets/metamask.png";
import mbToken from "../../assets/mbtoken.png";

//home images
import image1 from "../../assets/home-assets/image 3.png";
import image2 from "../../assets/home-assets/image 4.png";
import image3 from "../../assets/home-assets/image 5.png";
import image4 from "../../assets/home-assets/image 6.png";

const Home = () => {
  return (
    <div className={classes.home}>
      <section className={classes["first-section"]}>
        <div className={classes["text-section"]}>
          <h1>
            Rent a <span className={classes.highlight}>Place</span> away from{" "}
            <span className={classes.highlight}>Home</span> in the
            <span className={classes.highlight}>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className={classes["input-field"]}>
            <input placeholder="Search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className={classes["image-section"]}>
          <div>
            <div className={classes["sec-1"]}>
              <img src={image1} alt="display-nft" />
              <img src={image2} alt="display-nft" />
            </div>
            <div className={classes["sec-2"]}>
              <img src={image3} alt="display-nft" />
              <img src={image4} alt="display-nft" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <img src={mbToken} alt="mbtoken" />
        <img src={metaMusk} alt="mbtoken" />
        <img src={openSea} alt="mbtoken" />
      </footer>
    </div>
  );
};

export default Home;
