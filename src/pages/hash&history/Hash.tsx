import React, { useEffect, useState, useReducer } from "react";

function Hash() {
  const [pathName, setPathName] = useState("/a");
  useEffect(() => {
    const handle = () => setPathName(window.location.hash.slice(1));
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
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
