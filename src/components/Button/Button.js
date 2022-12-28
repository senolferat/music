import React from "react";
import "./Button.scss";

export const Button = ({text, clss}) => {
  return <button className={`button ${clss || ''}`}>{text}</button>;
};
