import React, { useState } from "react";
import Style from "./index.scss";

function HookUseState() {
  const [num, setNum] = useState(0);
  const handleClick = () => setNum(num + 1);
  return (
    <div className={Style.flex}>
      <h3>useState ({num})</h3>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default HookUseState;
