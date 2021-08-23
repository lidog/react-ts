import React from "react";
import { Link } from "umi";

export default function List(props) {
  return (
    <div>
      <h2>list</h2>
      <ul>
        <li>
          <Link to="/user/detail/1">用户1</Link>
        </li>
        <li>
          <Link to="/user/detail/2">用户2</Link>
        </li>
      </ul>
    </div>
  );
}
