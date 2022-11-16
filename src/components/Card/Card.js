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
      <svg
        className={classes.heart}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5996 5.62952L12 6.16465L12.4004 5.62952C13.3204 4.39973 14.7949 3.6 16.44 3.6C19.2315 3.6 21.5 5.8738 21.5 8.69C21.5 9.82562 21.3189 10.8737 21.0043 11.8461L21.0032 11.8493C20.249 14.236 18.7035 16.1596 17.0354 17.5933C15.365 19.0289 13.6004 19.9483 12.4589 20.3366L12.4589 20.3366L12.4536 20.3385C12.3537 20.3737 12.1893 20.4 12 20.4C11.8107 20.4 11.6463 20.3737 11.5464 20.3385L11.5464 20.3385L11.5411 20.3366C10.3996 19.9483 8.635 19.0289 6.96465 17.5933C5.29649 16.1596 3.75096 14.236 2.99676 11.8493L2.99677 11.8493L2.99572 11.8461C2.68114 10.8737 2.5 9.82562 2.5 8.69C2.5 5.8738 4.76848 3.6 7.56 3.6C9.2051 3.6 10.6796 4.39973 11.5996 5.62952Z"
          stroke="url(#paint0_linear_1_777)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_777"
            x1="12"
            y1="20.9"
            x2="12"
            y2="3.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1D0E3D" />
            <stop offset="1" stop-color="#0F051D" />
          </linearGradient>
        </defs>
      </svg>

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
