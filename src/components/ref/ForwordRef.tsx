import React from "react";

const InputText = (props: any, ref: any) => {
  return <input ref={ref} />;
};
const InputTextRef = React.forwardRef(InputText);

export class ForwordRef extends React.Component {
  a: any = React.createRef();
  // focusInput(){
  //     ...
  //     这里访问不了this.a, 一定要像下面用箭头函数声明
  // }
  focusInput = () => {
    this.a.current.focus();
  };
  render() {
    return (
      <div>
        <InputTextRef ref={this.a} />
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
}
/**

function InputText(props){
    return <input></input>
}
 */
