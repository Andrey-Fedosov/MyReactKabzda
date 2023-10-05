import React, { useState } from "react";
import { Star } from "../Star";

export type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function UncontrolledRating() {
  console.log("rating rendering");
  const [starNumber, setStarNumber] = useState(0);

  return (
    <div>
      <Star
        selected={starNumber > 0}
        setValue={() => {
          setStarNumber(1);
        }}
      />
      <Star
        selected={starNumber > 1}
        setValue={() => {
          setStarNumber(2);
        }}
      />
      <Star
        selected={starNumber > 2}
        setValue={() => {
          setStarNumber(3);
        }}
      />
      <Star
        selected={starNumber > 3}
        setValue={() => {
          setStarNumber(4);
        }}
      />
      <Star
        selected={starNumber > 4}
        setValue={() => {
          setStarNumber(5);
        }}
      />
    </div>
  );
}
