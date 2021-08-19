import React from "react";
import { HashRouter, BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "@src/pages/home";
import Hook from "@src/pages/hook";
import Hash from "@src/pages/hash&history";
import regulex from "@pages/regulex";
import Router from "@pages/router";

const App = () => {
  const mr10 = { marginRight: "10px" };
  return (
    <div>
      <h1>helle react</h1>
      {/* 
      <Home></Home>
      <Hook></Hook>
      <Root></Root> 
      */}
      {/* <HashRouter>
        <Link style={mr10} to="/home">home</Link>
        <Link style={mr10} to="/hook">hook</Link>
        <Link style={mr10} to="/hash">hash</Link>
        <Link style={mr10} to="/reg">reg</Link>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hook" component={Hook} />
          <Route path="/hash" component={Hash} />
          <Route path="/reg" component={regulex} />
        </Switch>
      </HashRouter> */}
      <BrowserRouter>
        <Link style={mr10} to="/home">
          home
        </Link>
        <Link style={mr10} to="/hook">
          hook
        </Link>
        <Link style={mr10} to="/hash">
          hash
        </Link>
        <Link style={mr10} to="/reg">
          reg
        </Link>
        <Link style={mr10} to="/router">
          Router
        </Link>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hook" component={Hook} />
          <Route path="/hash" component={Hash} />
          <Route path="/reg" component={regulex} />
          <Route path="/router" component={Router} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
