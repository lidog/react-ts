import React from 'react';
import { connect } from 'dva';
import NavBar from "../components/NavBar"
import {Layout} from 'antd'
import { Switch } from 'dva/router';
// import { Route, Redirect, Switch } from 'dva/router';
// import Home from './Home'
// import User from './User'
// import Profile from './Profile'
// import Login from './Login'
// import Register from './Register'
import {renderRoutes} from '../renderRoutes'

function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props}/>
      <Layout.Content>
          {/* <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} /> */}
          <Switch>
           {renderRoutes(props.routes)}
          </Switch>
      </Layout.Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
