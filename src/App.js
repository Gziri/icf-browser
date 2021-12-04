import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import TreeView from "./components/tree-view/tree-view.component";

function App() {
  // const treeStructure = () => {
  //   let mainBranches = DATA.map((branch) => {
  //     let branchName = branch.catName;
  //     let subBranches = mapSubCategories(branch.subCat);
  //     return (
  //       <Tree.Folder key={branch.id} name={branchName}>
  //         {subBranches}
  //       </Tree.Folder>
  //     );
  //   });
  //   // console.log(mainBranches);
  //   return mainBranches;
  // };

  // const mapSubCategories = (data) => {
  //   return data.map((subBranch) => {
  //     if (!subBranch.subCat) {
  //       // console.log(subBranch.catName, "NO SUBCATEGORY")
  //       return <Tree.File key={subBranch.id} name={subBranch.catName} />;
  //     } else {
  //       let subCategory = mapSubCategories(subBranch.subCat);
  //       // console.log(subBranch.catName,subBranch.subCat)
  //       return (
  //         <Tree.Folder key={subBranch.id} name={subBranch.catName}>
  //           {subCategory}
  //         </Tree.Folder>
  //       );
  //     }
  //   });
  // };
  // treeStructure();
  return (
    <div className="App">
      <Navigation />
      <TreeView />
    </div>
  );
}

export default App;
