import React from "react";

export class RefString extends React.Component {
  handleClick = () => {
    // console.log(this.refs, this.refs.a.value)
  };
  render() {
    return (
      <div>
        <input ref="a"></input>
        <button onClick={this.handleClick}>=</button>
      </div>
    );
  }
}
