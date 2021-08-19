import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "@src/pages/home";
import Hook from "@src/pages/hook";
import Hash from "@src/pages/hash&history";

const App = () => {
  return (
    <div>
      <h1>helle react</h1>
      {/* 
      <Home></Home>
      <Hook></Hook>
      <Root></Root> 
      */}
      <HashRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/hook" component={Hook}></Route>
        <Route path="/hash" component={Hash}></Route>
      </HashRouter>
    </div>
  );
};

export default App;
