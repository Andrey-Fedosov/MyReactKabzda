import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating, RatingValueType } from "./components/Rating";
import { Star } from "./Star";
import { Accordion } from "./Accordion";
import { OnOffSwithcher } from "./OnOffSwitcher";
import { UncontrolledAccordion } from "./UncontrolledAccordion copy";
import {
  RatingPropsType,
  UncontrolledRating,
} from "./components/UncontrolledRating";
import { Accordion2 } from "./Accordion2";
import { Accordion3 } from "./Accordion3";
import { OnOffSwithcher2 } from "./OnOffSwitcher2";
import { OnOffSwithcher3 } from "./OnOffSwitcher3";

function App() {
  console.log("app rendering");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapse, setAccordionCollapse] = useState<boolean>(false);
  const [accordionCollapse2, setAccordionCollapse2] = useState<boolean>(false);
  const [accordionCollapse3, setAccordionCollapse3] = useState<boolean>(false);
  const [toggler, setToggler] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  return (
    <div className={"app"}>
      <PageTitle title="This is App component" />
      <OnOffSwithcher3 onChange={setSwitchOn} />
      {switchOn.toString()};
      <Accordion3
        titleValue="Accordion for practic 3"
        collapsed={accordionCollapse3}
        onChange={() => {
          setAccordionCollapse3(!accordionCollapse3);
        }}
      />
      <hr></hr>
      <OnOffSwithcher />
      <Accordion2
        titleValue="Accordion for practic 2 "
        collapsed={accordionCollapse2}
        onClick={setAccordionCollapse2}
      />
      <OnOffSwithcher2 isOn={toggler} onClick={() => setToggler(!toggler)} />
      <Accordion
        titleValue="Uncontrolled accordion for practic"
        collapsed={accordionCollapse}
        onClick={() => {
          setAccordionCollapse(!accordionCollapse);
        }}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <Accordion titleValue="accordion for article 1" collapsed={false} /> */}
      <UncontrolledAccordion titleValue="accordion for article 1" />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOffSwithcher />
      <UncontrolledAccordion titleValue="accordion for article 2" />
      <UncontrolledRating />
      {/* <Rating value={3}/> */}
      {/* <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
    </div>
  );
}

function PageTitle(props: { title: string }) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
