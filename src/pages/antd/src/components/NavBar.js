import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'dva/router'
import styles from './NavBar.less'
const {Header} = Layout

let logo = require('../assets/yay.jpg')

const NavBar = (props) => {
  return (
    <Header className={styles.header}>
      <img src={logo} alt="logo"/>
      <Menu className={styles.menu} mode="horizontal" selectedKeys={[props.location.pathname]}>
        <Menu.Item key="/home"><Link to="/home">首页</Link></Menu.Item>
        <Menu.Item key="/user"><Link to="/user">用户管理</Link></Menu.Item>
        <Menu.Item key="/profile"><Link to="/profile">个人中心</Link></Menu.Item>
        <Menu.Item key="/login"><Link to="/login">登录</Link></Menu.Item>
        <Menu.Item key="/register"><Link to="/register">注册</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;

