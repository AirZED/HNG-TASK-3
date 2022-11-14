//imported styles
import classes from "./Card.module.css";

//imported components
import Star from "../Icons/Star";

const Card = (props) => {
  const { name, img, location, description, usage, star } = props.each;

  const numberOfStars = Array(star)
    .fill(0)
    .map((_, i) => i * i);

  const Stars = numberOfStars.map((each, id) => <Star key={id} />);

  return (
    <div className={classes.card}>
      <img src={img} alt={name} />
      <div className={classes["card-info"]}>
        <div>
          <p>{name}</p> <h2>{usage}</h2>
        </div>
        <div>
          <p>{location}</p>
          <p>{description}</p>
        </div>
        <ul>{Stars}</ul>
      </div>
    </div>
  );
};

export default Card;
