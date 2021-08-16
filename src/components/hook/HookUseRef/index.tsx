import React from "react";

function Child(props: any, forwordRef: any) {
  return <input ref={forwordRef}></input>;
}
const ForwaredChild = React.forwardRef(Child);

function SaveChild(props: any, forwordRef: any) {
  const inputRef: any = React.useRef();
  // 定制给到父组件的 ref
  React.useImperativeHandle(forwordRef, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });
  return <input ref={inputRef}></input>;
}
const SaveForwaredChild = React.forwardRef(SaveChild);

function HookUseRef() {
  const inputRef: any = React.useRef();
  const saveInputRef: any = React.useRef();
  const getFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "1秒后删此input";
    // 因为这里提供的是dom 实例，所以存在随意删除的危险；
    setTimeout(() => inputRef.current.remove(), 1000);
    setTimeout(() => {
      saveInputRef.current.focus();
      try {
        saveInputRef.current.remove();
      } catch (e) {
        console.warn(e);
      }
    }, 3000);
  };
  return (
    <div>
      <h3>forworRef & useRef</h3>
      <p>希望点击按钮，子组件的input 获取到焦点</p>
      <ForwaredChild ref={inputRef}></ForwaredChild>
      <SaveForwaredChild ref={saveInputRef}></SaveForwaredChild>
      <button onClick={getFocus}>获得焦点</button>
    </div>
  );
}

export default HookUseRef;
