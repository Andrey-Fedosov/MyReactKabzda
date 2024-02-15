import React, { useState } from "react";
import "./App.css";

export function OnOffToggler() {
  const [isOn, setIsOn] = useState(false);

  const styleOn = {
    backgroundColor: isOn ? "green" : "inherit",
    cursor: "pointer",
  };
  const styleOff = {
    backgroundColor: !isOn ? "red" : "inherit",
    cursor: "pointer",
  };
  // const backNone = { backgroundColor:  };

  return (
    <div className="toggler">
      <div className="btn" style={styleOff} onClick={() => setIsOn(false)}>
        Off
      </div>
      <div className="btn" style={styleOn} onClick={() => setIsOn(true)}>
        {/* <div className="btn" style={props.isOn ? styleOn : backNone}> */}
        On
      </div>
      <div className="indicator" style={isOn ? styleOn : styleOff}></div>
    </div>
  );
}
