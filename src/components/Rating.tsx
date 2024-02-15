export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
  value: RatingValueType;
  changeRating: (value: RatingValueType) => void;
};

export function Rating(props: RatingPropsType) {
  console.log("Rating is rendering");
  return (
    <div>
      <Star
        selected={props.value > 0}
        changeRate={props.changeRating}
        value={1}
      />
      <Star
        selected={props.value > 1}
        changeRate={props.changeRating}
        value={2}
      />
      <Star
        selected={props.value > 2}
        changeRate={props.changeRating}
        value={3}
      />
      <Star
        selected={props.value > 3}
        changeRate={props.changeRating}
        value={4}
      />
      <Star
        selected={props.value > 4}
        changeRate={props.changeRating}
        value={5}
      />
    </div>
  );
}

export type StarPropsType = {
  selected: boolean;
  changeRate: (value: RatingValueType) => void;
  value: RatingValueType;
};

export function Star(props: StarPropsType) {
  console.log("Star is rendering");

  return (
    <>
      <span onClick={() => props.changeRate(props.value)}>
        {" "}
        {props.selected ? <b>Star-</b> : <>Star-</>}
      </span>
    </>
  );
}
