import React from "react";

export function AccordionTitle(props: { title: string; onClick: () => void }) {
  console.log("accordion title rendering");
  return (
    <>
      <h3 onClick={props.onClick}>{props.title}</h3>
    </>
  );
}
