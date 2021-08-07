import React from "react";

class State extends React.Component {
  state = {
    number: 0,
  };
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
  };
  render() {
    return <div onClick={this.handleClick}>点击 {this.state.number}</div>;
  }
}

export default State;
