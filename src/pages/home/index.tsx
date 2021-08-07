import React from "react";
import State from "@Comp/state";
import Css3 from "@Comp/css3autofix";
import { RefString } from "@Comp/ref/String";
import { Fun } from "@Comp/ref/Fun";
import { ObjectRef } from "@Comp/ref/Object";
import { ForwordRef } from "@Comp/ref/ForwordRef";
import Counter from "@src/components/lifecycle";

class Home extends React.Component {
  render() {
    return (
      <div>
        <State></State>
        <Css3></Css3>
        <RefString></RefString>
        <Fun></Fun>
        <ObjectRef></ObjectRef>
        <ForwordRef></ForwordRef>
        <Counter></Counter>
      </div>
    );
  }
}

export default Home;
