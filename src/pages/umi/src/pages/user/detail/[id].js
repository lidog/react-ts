import React from "react";

export default function List(props) {
  return (
    <div>
      <h2>detail</h2>
      userId = {props.match.params.id}
    </div>
  );
}
