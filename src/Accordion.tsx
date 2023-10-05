import React from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

export function Accordion(props: {
  titleValue: string;
  collapsed: boolean;
  onClick: () => void;
}) {
  console.log("accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={props.onClick} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}
