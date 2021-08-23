import React from "react";
import { history } from "umi";

function Foo() {
  return (
    <div>
      <h2>动态路由 foo</h2>
      <button onClick={() => history.goBack()}>返回</button>
    </div>
  );
}

export default Foo;
