import React from "react";
import { HashRouter, BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "@src/pages/home";
import Hook from "@src/pages/hook";
import Hash from "@src/pages/hash&history";
import regulex from "@pages/regulex";
import Router from "@pages/router";
import Redux from "@pages/redux";
import reactRedux from "@pages/react-redux";
import dva from "@pages/dva";
import Umi from "@pages/umi";

const App = () => {
  const mr10 = { marginRight: "10px" };
  return (
    <div>
      <h1>helle react</h1>
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
        <Link style={mr10} to="/redux">
          redux
        </Link>
        <Link style={mr10} to="/reactRedux">
          react-redux
        </Link>
        <Link style={mr10} to="/dva">
          dva
        </Link>
        <Link style={mr10} to="/umi">
          umi
        </Link>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hook" component={Hook} />
          <Route path="/hash" component={Hash} />
          <Route path="/reg" component={regulex} />
          <Route path="/router" component={Router} />
          <Route path="/redux" component={Redux} />
          <Route path="/reactRedux" component={reactRedux} />
          <Route path="/dva" component={dva} />
          <Route path="/umi" component={Umi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
