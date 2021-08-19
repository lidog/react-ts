import React from "react";
import State from "@comp/state";
import Css3 from "@comp/css3autofix";
import { RefString } from "@comp/ref/String";
import { Fun } from "@comp/ref/Fun";
import { ObjectRef } from "@comp/ref/Object";
import { ForwordRef } from "@comp/ref/ForwordRef";
import Counter from "@src/components/lifecycle";
import Context from "@src/components/Context";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>home</h2>
        <State></State>
        <Css3></Css3>
        <RefString></RefString>
        <Fun></Fun>
        <ObjectRef></ObjectRef>
        <ForwordRef></ForwordRef>
        <Counter></Counter>
        <Context></Context>
      </div>
    );
  }
}

export default Home;
