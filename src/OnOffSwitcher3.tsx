import React, { useState } from "react";
import "./App.css";

type OnOffPropsType = {
  // isOn: boolean;
  onChange: (on: boolean) => void;
};

export function OnOffSwithcher3(props: OnOffPropsType) {
  let [on, setOn] = useState(false);

  const onStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: on ? "green" : "transparent",
  };
  const offStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: !on ? "red" : "transparent",
  };
  const btnStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
  };
  const indicator = {
    border: "1px solid black",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    props.onChange(true);
    setOn(true);
  };
  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };
  // const onClickHandler = () => {
  //   props.onChange(t);
  //   // alert('button pressed' + on)

  return (
    <div className="switcherBox">
      {/* <div className={props.isOn ? "btnOnPressed" : "btnOn"}>On</div>
      <div className={!props.isOn ? "btnOffPressed" : "btnOff"}>Off</div>
      <div className={props.isOn ? "greenLamp" : "redLamp"}></div> */}

      <div style={onStyle} onClick={onClicked}>
        On blin
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off blin
      </div>
      <div style={indicator}></div>
    </div>
  );
}
