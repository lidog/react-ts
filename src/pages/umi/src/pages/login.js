import React from "react";
import { history } from "umi";

export default function Login(props) {
  return (
    <div>
      <h2>Login (路由参数获取)</h2>
      <button
        onClick={() => {
          localStorage.setItem("isLogin", "true");
          // 获取无权限自动登出的原路径
          if (props.location?.state?.from) {
            history.push(props.location?.state?.from);
          } else if (
            // 获取手动登出的原路径，通过query 获得
            history.location?.query?.path
          ) {
            history.push(history.location?.query?.path);
          }
        }}
      >
        登录
      </button>
    </div>
  );
}
