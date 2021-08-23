import dva, { connect } from "dva";
import React from "react";
/* eslint-disable */
import { Route, Link, routerRedux } from "dva/router";

const { ConnectedRouter } = routerRedux;

export default function () {
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
    effects: {
      *goto({ to }, { put }) {
        yield put(routerRedux.push(to));
      },
    },
  });
  function Counter(props: any) {
    //props 会得到两个属性： {number, dispatch}
    // dvaCounter 是命名空间， add 是reducers的key；
    const add = () => props.dispatch({ type: "dvaCounter/add" });
    const minus = () => props.dispatch({ type: "dvaCounter/minus" });
    const goto = () => props.dispatch({ type: "dvaCounter/goto", to: "/a" });
    return (
      <div>
        <h3>counter</h3>
        <input value={props.number} readOnly></input>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={goto}>跳转到“/a”</button>
      </div>
    );
  }
  const Apage = (props: any) => <h3> a page </h3>;
  const ConnectCounter = connect(
    // 只需要第一个参数，定义取哪个命名空间的值
    (state: any) => state.dvaCounter
  )(Counter);
  const mr = { margin: "10px" };
  //定义要渲染的内容
  app.router((api: any) => (
    <ConnectedRouter history={api.history}>
      <>
        <h4>dva 跳转路由</h4>
        <Link to="/counter" style={mr}>
          counter
        </Link>
        <Link to="/a" style={mr}>
          a
        </Link>
        <Route path="/" component={ConnectCounter} exact={true} />
        <Route path="/counter" component={ConnectCounter} />
        <Route path="/a" component={Apage} />
      </>
    </ConnectedRouter>
  ));
  //开始渲染
  app.start("#goRouter");
}
