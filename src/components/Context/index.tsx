import React from "react";
import Style from "./index.scss";

const myContext = React.createContext({});
// myContext = {provider, Consmer}
class Panel extends React.Component<any> {
  state = {
    styleName: Style["red-border"],
  };
  changeColor = (color: string) => {
    this.setState({ styleName: Style[`${color}-border`] });
  };
  render() {
    const value = {
      styleName: this.state.styleName,
      changeColor: this.changeColor,
    };
    return (
      <div className={`${this.state.styleName} ${Style.w200}`}>
        Panel
        <Main styleName={this.state.styleName} changeColor={this.changeColor} />
        <myContext.Provider value={value}>
          <ContextClassMain></ContextClassMain>
          <ContextFnMain></ContextFnMain>
        </myContext.Provider>
      </div>
    );
  }
}
// 普通传值是一层层传
class Main extends React.Component<any> {
  render() {
    return (
      <div className={this.props.styleName}>
        普通传值
        <Content changeColor={this.props.changeColor}></Content>
      </div>
    );
  }
}
class Content extends React.Component<any> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.changeColor("red")}>红</button>
        <button onClick={() => this.props.changeColor("blue")}>蓝</button>
      </div>
    );
  }
}
// 通过context 传值给到 class 子组件
class ContextClassMain extends React.Component<any> {
  render() {
    return (
      <div>
        context 传值
        <ContextClassContent></ContextClassContent>
      </div>
    );
  }
}
class ContextClassContent extends React.Component<any> {
  // 通过静态属性 contextType 指向 提供者， 通过this.context 拿到提供的value
  static contextType = myContext;
  render() {
    return (
      <div className={this.context.styleName}>
        <p>class孙组件</p>
        <button onClick={() => this.context.changeColor("red")}>红</button>
        <button onClick={() => this.context.changeColor("blue")}>蓝</button>
      </div>
    );
  }
}
// myContext.Consumer 传入回调函数，注入参数 value
function ContextFnMain(props: any) {
  return (
    <div>
      context 传值给函数组件
      <ContextFnContent></ContextFnContent>
    </div>
  );
}
function ContextFnContent(props: any) {
  return (
    <myContext.Consumer>
      {(value: any) => (
        <div className={value.styleName}>
          <p>函数孙组件</p>
          <button onClick={() => value.changeColor("red")}>红</button>
          <button onClick={() => value.changeColor("blue")}>蓝</button>
        </div>
      )}
    </myContext.Consumer>
  );
}

export default Panel;
