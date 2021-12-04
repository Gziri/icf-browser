import React from "react";
import "./tree-view.styles.scss";

import { Tree } from "@geist-ui/react";
import DATA from "../../assets/icf_list copy.json";

const TreeView = () => {
  const mapICFData = (data) => {
    return data.map((branch) => {
      if (!branch.subCat) {
        return <Tree.File name={branch.catName} key={branch.id} />;
      } else {
        let subBranches = mapICFData(branch.subCat);
        return (
          <Tree.Folder name={branch.catName} key={branch.id}>
            {subBranches}
          </Tree.Folder>
        );
      }
    });
  };
  return <Tree className="tree-view">{mapICFData(DATA)}</Tree>;
};

export default TreeView;
