//imported styles
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt={props.alt} />
      <div className={classes["card-info"]}>
        <div>
          <p>{props.name}</p> <h2>{props.usage}</h2>
        </div>
        <div>
          <p>{props.distance}</p>
          <p>{props.description}</p>
        </div>
        <div>5 Stars</div>
      </div>
    </div>
  );
};

export default Card;
