import React from "react";
import "./icf-page.styles.scss";

import Toolbar from "../../components/toolbar/toolbar.component";
import TreeView from "../../components/tree-view/tree-view.component"

const IcfPage = () => (
  <div className="icf-page">
    <Toolbar />
    <TreeView />
  </div>
);

export default IcfPage;
