import React from "react";

export default function Regulex() {
  const { log } = console;
  log("1a".match(/\d([a-z])/)); // 捕获分组 0 匹配的值， 其他数字key是配置的分组，
  log("11-22 11-22".match(/(?<x>\d{2})-(?<y>\d{2})/)); // ?<x> 命名分组
  log("11-22 11-22".replace(/(?<x>\d{2})-(?<y>\d{2})/g, "$<y>-$<x>")); // $<x>  应用命名分组 交换位置
  log("1a".match(/\d(?:[a-z])/)); // ?: 不捕获分组
  log("1a".match(/\d(?=[a-z])[a-z]/)); // ?= 肯定前瞻 不消耗字符不捕获
  log("1a".match(/\d(?![a-z])[a-z]/)); // ?! 否定前瞻 不消耗字符不捕获
  log("a1a".match(/(?<=[a-z])\d[a-z]/)); // ?<= 肯定后顾 不消耗字符不捕获
  log("a1a".match(/(?<![a-z])\d[a-z]/)); // ?<= 否定后顾 不消耗字符不捕获

  return (
    <div>
      <h2>regulex</h2>
    </div>
  );
}
