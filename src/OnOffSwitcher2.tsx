import React, { useState } from "react";
import "./App.css";

type OnOffPropsType = {
  isOn: boolean;
  onClick: () => void;
};

export function OnOffSwithcher2(props: OnOffPropsType) {
  const onStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: props.isOn ? "green" : "red",
  };
  const offStyle = {
    width: "50px",
    borderRadius: "5px",
    border: "1px solid black",
    // textAlign: "center",
    height: "auto",
    backgroundColor: !props.isOn ? "red" : "green",
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
    backgroundColor: props.isOn ? "green" : "red",
  };

  const onClickHandler = () => {
    props.onClick();
    // alert('button pressed' + on)
  };

  return (
    <div className="switcherBox">
      {/* <div className={props.isOn ? "btnOnPressed" : "btnOn"}>On</div>
      <div className={!props.isOn ? "btnOffPressed" : "btnOff"}>Off</div>
      <div className={props.isOn ? "greenLamp" : "redLamp"}></div> */}

      <div style={props.isOn ? onStyle : btnStyle} onClick={onClickHandler}>
        On blya
      </div>
      <div style={!props.isOn ? offStyle : btnStyle} onClick={onClickHandler}>
        Off blya
      </div>
      <div style={indicator}></div>
    </div>
  );
}
