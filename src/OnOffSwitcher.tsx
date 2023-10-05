import React, { useState } from "react";
import "./App.css";

type OnOffPropsType = {
  // isOn: boolean;
};

export function OnOffSwithcher(props: OnOffPropsType) {
  
  let [on, setOn] = useState(false);
  
  const onStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: on ? "green" : "red",
  };
  const offStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: !on ? "red" : "green",
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

  const onClickHandler = () => {
    setOn(!on);
    // alert('button pressed' + on)
  }

  return (
    <div className="switcherBox">
      {/* <div className={props.isOn ? "btnOnPressed" : "btnOn"}>On</div>
      <div className={!props.isOn ? "btnOffPressed" : "btnOff"}>Off</div>
      <div className={props.isOn ? "greenLamp" : "redLamp"}></div> */}

      <div style={on ? onStyle : btnStyle} onClick={()=>{setOn(true)}}>On</div>
      <div style={!on ? offStyle : btnStyle} onClick={()=>{setOn(false)}}>Off</div>
      <div style={indicator}></div>
    </div>
  );
}
