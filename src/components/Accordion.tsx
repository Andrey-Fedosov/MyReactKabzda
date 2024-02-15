import { access } from "fs/promises";
import React, { useState } from "react";

export type AccordionPropsType = {
  title: string;
  isCollapsed: boolean;
  accordionHandler: () => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion is rendering");

  return (
    <div>
      <AccordionTitle
        accordionTitle={props.title}
        accordionTitleHandler={props.accordionHandler}
      />
      {!props.isCollapsed && <AccordionBody />}
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
  accordionTitleHandler: () => void;
}) {
  const accordionTitleHandler = props.accordionTitleHandler;
  return (
    <>
      <h3 onClick={accordionTitleHandler}>{props.accordionTitle} </h3>
    </>
  );
}
