import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Child from "@pages/router/child";
import Child2 from "@pages/router/child2";

export default function Router() {
  const isMatchChild = () => /child/.test(window.location.pathname);
  return (
    <div>
      <h2>router</h2>
      <Link to="/router/child">router-child</Link>
      <br></br>
      <Link to="/router/child2"> router-child2</Link>
      <Route path="/router/child" component={Child}></Route>
      <Route path="/router/child2" component={Child2}></Route>
      {isMatchChild() ? null : <Redirect to="/router/child" />}
    </div>
  );
}
