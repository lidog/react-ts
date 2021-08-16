import React, { useState, useMemo, memo } from "react";

function Child(props: any) {
  console.warn(props.str);
  return (
    <p>
      {props.number} {props.text}
    </p>
  );
}

const MemoChild = memo(Child);

function HookMemo() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("输入改变name");
  const handleClick = () => setNum(num + 1);
  return (
    <div>
      <h3>React.memo</h3>
      <input value={name} onChange={event => setName(event.target.value)}></input>
      <button onClick={handleClick}>改变num</button>
      <Child
        number={num}
        str={"子组件props 没有改变，但是却重新渲染了，不合理"}
        text={"普通组件"}
      />
      <MemoChild number={num} str={"子组件props 没有改变不会重新渲染，合理"} text={"缓存组件"} />
    </div>
  );
}

export default HookMemo;
