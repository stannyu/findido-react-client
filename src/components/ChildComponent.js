import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h2>Hello Child!!! - {props.title}</h2>
    </div>
  );
}

export default ChildComponent;
