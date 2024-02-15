import "./App.css";
import { Rating, RatingPropsType, RatingValueType } from "./components/Rating";
import { Accordion } from "./components/Accordion";
import { OnOffToggler } from "./OnOff";
import { SelfControlledAccordion } from "./components/SelfControlledAccordion";
import { SelfControlledRating } from "./components/SelfControlledRating";
import { useState } from "react";

export function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [rating, setRating] = useState<RatingValueType>(0);

  const accordionHandler = () => {
    setIsCollapsed(!isCollapsed);
  };
  const changeRating = (value: RatingValueType) => {
    setRating(value);
  };
  return (
    <div className="App">
      <PageTitle title="This is App Component" />
      <OnOffToggler />
      <Accordion
        title="Tits"
        isCollapsed={isCollapsed}
        accordionHandler={accordionHandler}
      />
      <Rating value={rating} changeRating={changeRating} />

      <PageTitle title="Users" />
      <OnOffToggler />
      <OnOffToggler />
      <OnOffToggler />
      <Accordion
        title="Pussies"
        isCollapsed={isCollapsed}
        accordionHandler={accordionHandler}
      />
      <Rating value={rating} changeRating={changeRating} />

      <PageTitle title="Buts" />
      <SelfControlledAccordion title="Big Buts" />
      <SelfControlledRating />
    </div>
  );
}

export function PageTitle(props: { title: string }) {
  console.log("Title has rendering");
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}
