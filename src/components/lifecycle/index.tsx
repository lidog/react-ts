import React from "react";

class SubCounter extends React.Component<{ count: number }> {
  state = { count: 0 };
  refa: any = React.createRef();
  constructor(props: any) {
    super(props);
    console.log("子 构造函数");
  }
  // 可以代替 UNSAFE_componentWillReceiveProps  UNSAFE_componentWillMount
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    console.log("子 从props 隐射状态到state");
    return null;
  }
  UNSAFE_componentWillReceiveProps() {
    // 当props 变化时触发
    console.log("子 props 改变");
  }
  UNSAFE_componentWillMount() {
    console.log("子 准备挂载");
  }
  componentDidMount() {
    console.log("子 挂载完成");
  }
  componentWillUnmount() {
    console.log("子 卸载");
  }
  render() {
    console.log("子 render");
    return (
      <div>
        <p>子组件props变化 {this.props.count}</p>
        <div ref={this.refa}></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate() {
    return this.refa.current.scrollHeight;
  }
  // 上面返回的scrollHeight 是 componentDidUpdate 的第三个参数
  componentDidUpdate(prevProps: any, prevState: any, prevScrollHeight: number) {
    console.log(prevScrollHeight === this.refa.current.scrollHeight);
  }
}

class Counter extends React.Component {
  static defaultProps = { name: "xxx" };
  state = { number: 0 };
  constructor(props: any) {
    super(props);
    console.log("父 构造函数");
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(
      "父 state发生了改变，是否要更新组件， 返回 true 为更新，false 为不更新",
      nextState.number
    );
    return nextState.number % 2 === 0; // 奇数不更新，偶数更新，执行render
  }
  UNSAFE_componentWillMount() {
    console.log("父 准备挂载");
  }
  render() {
    console.log("父 render");
    return (
      <div>
        <input value={this.state.number} readOnly></input>
        <button onClick={this.handleClick}>增加</button>
        {this.state.number === 4 ? null : <SubCounter count={this.state.number} />}
      </div>
    );
  }
  componentDidMount() {
    console.log("父 挂载完成");
  }
}

export default Counter;
