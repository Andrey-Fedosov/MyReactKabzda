import React, { useState } from "react";
import { Star } from "../Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
};

export function Rating(props: RatingPropsType) {
  console.log("rating rendering");
  let [value, setValue] = useState(0);

  return (
    <div>
      <StarC selected={props.value > 0} onClick={props.onClick} starValue={1} />
      <StarC selected={props.value > 1} onClick={props.onClick} starValue={2} />
      <StarC selected={props.value > 2} onClick={props.onClick} starValue={3} />
      <StarC selected={props.value > 3} onClick={props.onClick} starValue={4} />
      <StarC selected={props.value > 4} onClick={props.onClick} starValue={5} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingValueType) => void;
  starValue: RatingValueType;
};

function StarC(props: StarPropsType) {
  console.log("Star rendering");

  return (
    <span onClick={() => props.onClick(props.starValue)}>
      {props.selected ? <b>Star</b> : "Star"}
    </span>
  );
}
