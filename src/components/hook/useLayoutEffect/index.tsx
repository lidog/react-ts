import React from "react";
import Style from "./index.scss";

function UseEffectBox() {
  const ref: any = React.useRef();
  React.useEffect(() => {
    ref.current.style.WebkitTransform = `translate(500px)`;
  }, []);
  return (
    <div>
      <h4>在render之后执行, 产生动画； 属于红任务</h4>
      <div className={Style.box} ref={ref}></div>
    </div>
  );
}

function UseLayoutEffectBox() {
  const ref: any = React.useRef();
  React.useLayoutEffect(() => {
    ref.current.style.WebkitTransform = `translate(500px)`;
  }, []);
  return (
    <div>
      <h4>render之前执行, 没有产生动画; 属于微任务</h4>
      <div className={Style.box} ref={ref}></div>
    </div>
  );
}

function HookUseLayoutEffect() {
  const [state, setState] = React.useState(true);
  const reRender = () => {
    setState(false);
    setTimeout(() => setState(true), 1000);
  };
  return (
    <div>
      <h3>
        UseLayoutEffect <button onClick={() => reRender()}>reRender</button>
      </h3>
      {state ? (
        <div>
          <UseEffectBox></UseEffectBox>
          <UseLayoutEffectBox></UseLayoutEffectBox>
        </div>
      ) : null}
    </div>
  );
}

export default HookUseLayoutEffect;
