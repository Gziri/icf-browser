import React from "react";
import "./toolbar.styles.scss";

import CodeCard from "../code-card/code-card.component";
import SearchBar from "../search-bar/search-bar.component";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <SearchBar />
      <CodeCard className="code-card" />
    </div>
  );
};

export default Toolbar;
