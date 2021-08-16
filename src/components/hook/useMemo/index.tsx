import React, { useState, useMemo, memo } from "react";

function Child(props: any) {
  console.warn(props.str);
  return (
    <p>
      {props.data.num} {props.text}
    </p>
  );
}

const MemoChild = memo(Child);

function HookUseMemo() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("输入改变name");
  const handleClick = () => setNum(num + 1);
  const data = { num };
  const cacheData = useMemo(() => {
    return { num };
  }, [num]);
  return (
    <div>
      <h3>useMemo</h3>
      <input value={name} onChange={event => setName(event.target.value)}></input>
      <button onClick={handleClick}>改变num</button>
      <Child data={data} str={"子组件props 没有改变，但是却重新渲染了，不合理"} text={"普通组件"} />
      <MemoChild
        data={data}
        str={"因为传入了复杂对象，即使用了memo缓存组件，还是会触发渲染，不合理"}
        text={"缓存组件"}
      />
      <MemoChild
        data={cacheData}
        str={"利用useMemo 缓存复杂对象props，值实质不改变就不会渲染，合理"}
        text={"处理复杂类型props的缓存组件"}
      />
    </div>
  );
}

export default HookUseMemo;
