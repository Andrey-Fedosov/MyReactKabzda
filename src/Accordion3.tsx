import React from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

export function Accordion3(props: {
  titleValue: string;
  collapsed: boolean;
  onChange: (isCollapsed: boolean) => void;
}) {
  console.log("accordion rendering");
  return (
    <div>
      <AccordionTitle3
        title={props.titleValue}
        onClick={() => props.onChange(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle3(props: { title: string; onClick: () => void }) {
  console.log("accordion title rendering");
  return (
    <>
      <h3 onClick={props.onClick}>{props.title}</h3>
    </>
  );
}
