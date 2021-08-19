import React, { useEffect, useState, useReducer } from "react";

function Hash() {
  const [pathName, setPathName] = useState("/a");
  useEffect(() => {
    window.addEventListener("hashchange", event => {
      console.log("hash event", event);
      setPathName(window.location.hash.slice(1));
    });
  }, []);
  return (
    <div>
      <h3>hash</h3>
      <ul>
        <li>
          <a href="#/a">/a</a>
        </li>
        <li>
          <a href="#/b">/b</a>
        </li>
        <h3>{pathName}</h3>
      </ul>
    </div>
  );
}

export default Hash;
