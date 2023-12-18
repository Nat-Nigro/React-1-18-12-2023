import { Component } from "react";

const ButtonComponent = (props) => (
  <button style={props.buttonStyle}>{props.content ? props.content : "testo di prova"}</button>
);

export default ButtonComponent;
