import React from "react";
import "./navigation.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIcfBundle } from "../../redux/icf/icf.selector";

const Navigation = ({ icfBundle }) => {
  console.log("navigation", icfBundle);
  const bundle = icfBundle.map((code) => (
    <li key={code.initial}>{code.title}</li>
  ));
  return (
    <div className="navigation">
      <p>selectedList</p>
      <ul> {bundle}</ul>
      <p>search</p>
      <br />
      <p>Text editor</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  icfBundle: selectIcfBundle,
});

export default connect(mapStateToProps)(Navigation);
