import React, { useEffect } from "react";
import Normal from "./normal";
import Effect from "./effect";
import Router from "./router";
import GoRouter from "./goRouter";

export default function () {
  useEffect(() => {
    Normal();
    Effect();
    Router();
    GoRouter();
  }, []);
  return (
    <div>
      <h2>dva</h2>
      <div id="normal"></div>
      <div id="effect"></div>
      <div id="router"></div>
      <div id="goRouter"></div>
    </div>
  );
}
