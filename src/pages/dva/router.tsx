import dva, { connect } from "dva";
import React from "react";
/* eslint-disable */
import { Router, Route, Link } from "dva/router";

export default function () {
  function delay(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  //实例化
  const app = dva();
  //定义一个model
  app.model({
    namespace: "dvaCounter", // 当前model 的命名空间
    state: { number: 0 }, //初始state 值
    //处理函数map, key 相当于 actionType, 值是本state对应的处理函数，state 是此命名空间下的分状态
    reducers: {
      add(state, action) {
        return { number: state.number + 1 };
      },
      minus(state, action) {
        return { number: state.number - 1 };
      },
    },
  });
  function Counter(props: any) {
    //props 会得到两个属性： {number, dispatch}
    // dvaCounter 是命名空间， add 是reducers的key；
    const add = () => props.dispatch({ type: "dvaCounter/add" });
    const minus = () => props.dispatch({ type: "dvaCounter/minus" });
    return (
      <div>
        <h3>counter</h3>
        <input value={props.number} readOnly></input>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
  const Apage = () => <h3>a page</h3>;
  const Bpage = () => <h3>b page</h3>;
  const Cpage = () => <h3>c page</h3>;
  const ConnectCounter = connect(
    // 只需要第一个参数，定义取哪个命名空间的值
    (state: any) => state.dvaCounter
  )(Counter);
  const mr = { margin: "10px" };
  //定义要渲染的内容
  app.router((api: any) => (
    <Router history={api.history}>
      <>
        <h3>dva 路由</h3>
        <Link to="/counter" style={mr}>
          counter
        </Link>
        <Link to="/a" style={mr}>
          a
        </Link>
        <Link to="/b" style={mr}>
          b
        </Link>
        <Link to="/c" style={mr}>
          c
        </Link>
        <Route path="/" component={ConnectCounter} exact={true} />
        <Route path="/counter" component={ConnectCounter} />
        <Route path="/a" component={Apage} />
        <Route path="/b" component={Bpage} />
        <Route path="/c" component={Cpage} />
      </>
    </Router>
  ));
  //开始渲染
  app.start("#router");
}
