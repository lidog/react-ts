import { Redirect } from "umi";

function Auth(props) {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin) {
    return props.children;
  }
  console.log(props.location.pathname);
  // 如果没有值，重定向到登录页
  return <Redirect to={{ pathname: "/login", state: { from: props.location.pathname } }} />;
}
export default Auth;
