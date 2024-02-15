import { useState } from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function SelfControlledRating() {
  console.log("Rating is rendering");
  const [rate, setRate] = useState(0);
  return (
    <div>
      <Star selected={rate > 0} starPressHandler={() => setRate(1)} />
      <Star selected={rate > 1} starPressHandler={() => setRate(2)} />
      <Star selected={rate > 2} starPressHandler={() => setRate(3)} />
      <Star selected={rate > 3} starPressHandler={() => setRate(4)} />
      <Star selected={rate > 4} starPressHandler={() => setRate(5)} />
    </div>
  );
}

export type StarPropsType = {
  selected: boolean;
  starPressHandler: () => void;
};

export function Star(props: StarPropsType) {
  console.log("Star is rendering");
  return (
    <>
      <span onClick={props.starPressHandler}>
        {props.selected ? <b>Star-</b> : <>Star-</>}
      </span>
    </>
  );
}
