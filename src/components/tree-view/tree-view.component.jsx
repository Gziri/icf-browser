import React from "react";
import "./tree-view.styles.scss";

import "antd/dist/antd.css";
import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

import DATA from "../../assets/icf_list copy 2.json";
import Description from "./description/description.component";

const { DirectoryTree } = Tree;
const TreeView = () => {
  // const mapICFData = (data) => {
  //   return data.map((branch) => {
  //     if (!branch.subCat) {
  //       return <Tree.File name={branch.catName} key={branch.id} />;
  //     } else {
  //       let subBranches = mapICFData(branch.subCat);
  //       return (
  //         <Tree.Folder name={branch.catName} key={branch.id}>
  //           {subBranches}
  //         </Tree.Folder>
  //       );
  //     }
  //   });
  // };

  let [info, setInfo] = useState("");

  const selectedNode = (key, info) => {
    setInfo(info.node);
  };

  return (
    <div className="tree-view">
      <DirectoryTree
        className="directory-tree"
        switcherIcon={<DownOutlined />}
        treeData={DATA}
        onSelect={selectedNode}
      />
      <div className="description">
        <Description  node={info}></Description>
      </div>
    </div>
  );
};

export default TreeView;
