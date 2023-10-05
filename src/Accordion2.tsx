import React from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

export function Accordion2(props: {
  titleValue: string;
  collapsed: boolean;
  onClick: (isCollapsed: boolean) => void;
}) {
  console.log("accordion rendering");
  return (
    <div>
      <AccordionTitle2
        title={props.titleValue}
        onClick={() => props.onClick(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle2(props: { title: string; onClick: () => void }) {
  console.log("accordion title rendering");
  return (
    <>
      <h3 onClick={props.onClick}>{props.title}</h3>
    </>
  );
}
