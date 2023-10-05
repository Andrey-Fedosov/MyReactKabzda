import React, { useState } from "react";

export function UncontrolledAccordion(props: { titleValue: string }) {
  const [collapsed, setCollapsed] = useState(false);

  const collapseAccordion = () => {
    setCollapsed(!collapsed);
  };

  console.log("accordion rendering");

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        collapseAccordion={collapseAccordion}
      />
      {/* <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button> */}
      {!collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: {
  title: string;
  collapseAccordion: () => void;
}) {
  console.log("accordion title rendering");
  return (
    <>
      <h3 onClick={props.collapseAccordion}>{props.title}</h3>
    </>
  );
}

function AccordionBody() {
  console.log("accordion body rendering");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
