import React from "react";
import Hash from "./hash";
import History from "./History";
import HistoryPro from "./HistoryPro.jsx";

function Root() {
  return (
    <div>
      <h2>hash & history</h2>
      <Hash></Hash>
      <History></History>
      <HistoryPro></HistoryPro>
    </div>
  );
}

export default Root;
