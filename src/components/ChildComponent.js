import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h2>Hello Child!!! - {props.title}</h2>
      <p>Another text</p>
    </div>
  );
}

export default ChildComponent;
