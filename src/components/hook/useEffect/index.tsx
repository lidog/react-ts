import React from "react";
// import useEffect from './useEffect'
import { useEffect } from "react";

function HookUseEffect() {
  const [number, setNumber] = React.useState(0);
  useEffect(() => {
    console.log("开启定时器");
    const timer = setInterval(() => {
      // setNumber(number+1) 这样写由于形成闭包，number 永远拿到都是0
      setNumber(lastNumber => lastNumber + 1); // 通过传入回调函数的方式，拿到上一次的number，做累加才会有效果
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <h3>useEffect</h3>
      <h4>希望number 每秒递增 {number}</h4>
    </div>
  );
}

export default HookUseEffect;
