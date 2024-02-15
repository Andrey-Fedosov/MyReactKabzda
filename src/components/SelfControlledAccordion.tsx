import { useState } from "react";
import React from "react";

type SelfControlledAccordionPropsType = {
  title: string;
};

export function SelfControlledAccordion(
  props: SelfControlledAccordionPropsType
) {
  console.log("Accordion is rendering");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <AccordionTitle
        accordionTitle={props.title}
        collapseHandler={() => setIsCollapsed(!isCollapsed)}
      />
      {isCollapsed && <AccordionBody />}
      {/* <AccordionBody /> */}
    </div>
  );
}

export function AccordionBody() {
  console.log("Accordion body is rendering");
  return (
    <>
      <ol>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ol>
    </>
  );
}

export function AccordionTitle(props: {
  accordionTitle: string;
  collapseHandler: () => void;
}) {
  console.log("Accordion title is rendering");
  return (
    <>
      <h3 onClick={props.collapseHandler}>{props.accordionTitle} </h3>
    </>
  );
}
