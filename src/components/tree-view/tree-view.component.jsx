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
