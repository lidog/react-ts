import React from "react";
import { history } from "umi";

function Good() {
  return (
    <div>
      <h2>后端接口 动态路由 good</h2>
      <button onClick={() => history.goBack()}>返回</button>
    </div>
  );
}

export default Good;
