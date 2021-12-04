import React from "react";
import "./navigation.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIcfBundle } from "../../redux/icf/icf.selector";

const Navigation = (icfBundle ) => {
  console.log(icfBundle);
//   const bundle = icfBundle.map((code) => 
//     <span>{code.title}</span>
//   );
  return (
    <div className="">
      {/* {icfBundle} */}
      <span>"asd"</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  icfBundle: selectIcfBundle,
});

export default connect(mapStateToProps)(Navigation);
