import React from "react";

export class Fun extends React.Component {
  a: any = null;
  handleClick = () => {
    console.log(this.a);
    console.log(this.a.value);
  };
  render() {
    return (
      <div>
        <input ref={inst => (this.a = inst)}></input>
        <button onClick={this.handleClick}>=</button>
      </div>
    );
  }
}
