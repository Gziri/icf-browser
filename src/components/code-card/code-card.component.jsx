import React from "react";
import "./code-card.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectIcfBundle } from "../../redux/icf/icf.selector";
import { removeIcfCode } from "../../redux/icf/icf.actions";
// import { removeCodeFromStore } from "../../redux/icf/icf.utils";
import { connect } from "react-redux";

const CodeCard = ({ icfBundle, removeCode }) => {
  const copyCodeHandler = (initial) => {
    navigator.clipboard.writeText(initial);
  };

  const cards = icfBundle.map((code) => (
    <div className="code-button" key={code.initial + "card"}>
      <button onClick={()=>copyCodeHandler(code.initial)} key={code.initial + "c"}>
        {code.title}
      </button>
      <button
        className="remove-button "
        key={code.initial + "r"}
        onClick={() => removeCode(code)}
      >
       &#x2715;
      </button>
    </div>
  ));
  return <div className="code-card">{cards}</div>;
};

const mapStateToProps = createStructuredSelector({
  icfBundle: selectIcfBundle,
});

const mapDispatchToProps = (dispatch) => ({
  removeCode: (code) => dispatch(removeIcfCode(code)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CodeCard);
