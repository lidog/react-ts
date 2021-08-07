import React from "react";

export class ObjectRef extends React.Component {
  a: any = React.createRef();
  handleClick = () => {
    console.log(this.a.current, this.a.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.a}></input>
        <button onClick={this.handleClick}>=</button>
      </div>
    );
  }
}
