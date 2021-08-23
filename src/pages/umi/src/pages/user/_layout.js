import React from "react";
import { Link } from "umi";

export default function _layout(props) {
  return (
    <div>
      <h2>子layout</h2>
      <ul>
        <Link to="/user/list">用户列表</Link>
        <br></br>
        <Link to="/user/add">新增用户</Link>
      </ul>
      {props.children}
    </div>
  );
}
