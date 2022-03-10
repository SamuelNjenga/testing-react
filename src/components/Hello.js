import React from "react";

// For Testing Rendering
export default function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, Python</span>;
  }
}
