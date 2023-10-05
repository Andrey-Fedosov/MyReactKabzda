import React from "react";
import { RatingPropsType } from "./components/UncontrolledRating";

type StarComponentPropsType = {
  selected: boolean;

  setValue: () => void;
};

export function Star(props: StarComponentPropsType) {
  // const spanClickHandler = (value: RatingPropsType) => {
  //   props.setValue(value);
  //};
  console.log("star rendering");
  return (
    <span
      onClick={() => {
        props.setValue();
      }}
    >
      {props.selected ? <b>Star</b> : "Star"}
    </span>
  );
}
