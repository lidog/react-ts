import React from "react";
import { Link } from "umi";

export default function Layout(props) {
  return (
    <div>
      <div>
        <h1>Layouts</h1>
        <Link to="/home">首页</Link>
        <br></br>
        <Link to="/user">个人中心 （多级路由）</Link>
        <br></br>
        <Link to="/profile">设置 （权限路由）</Link>
        <br></br>
        <Link to="/foo"> foo （前端动态路由）</Link>
        <br></br>
        <Link to="/good">good （接口动态路由）</Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
