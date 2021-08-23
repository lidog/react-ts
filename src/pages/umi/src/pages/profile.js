import React from "react";
import styles from "./profile.css";
import { history } from "umi";

function Page() {
  const logout = () => {
    localStorage.removeItem("isLogin");
    history.push({
      pathname: "/login",
      query: {
        path: history.location.pathname,
      },
    });
  };
  return (
    <div>
      <h1 className={styles.title}>Page profile</h1>
      <button onClick={logout}>退出登录</button>
    </div>
  );
}

// @ 表示src 目录；
Page.wrappers = ["@/wrappers/auth"];

export default Page;
