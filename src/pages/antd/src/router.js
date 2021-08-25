import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import routeConfig  from './routeConfig'
import { renderRoutes } from './renderRoutes'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        { renderRoutes(routeConfig) }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
