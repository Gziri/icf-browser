import React from "react";
import parse from "html-react-parser";
import "./description.styles.scss";

import { Button } from "antd";

import { connect } from "react-redux";
import { addIcfCode } from "../../../redux/icf/icf.actions";

const Description = ({addCode,...props}) => {
  
  var body = null;
  var inclusion = null;
  var exclusion = null;
  let description = null;

  if (props.node.description) {
    var [bod, inc, exc] = props.node.description.split("\n ");
    if (bod) {
      body = <span>{parse(bod)}</span>;
    }
    if (inc) {
      inclusion = (
        <i>
          <b>Inclusions:</b>
          <span>{parse(inc.replace("Inclusions:", ""))}</span>
        </i>
      );
    }
    if (exc) {
      exclusion = (
        <div>
          <b>Exclusions:</b>
          <span>{parse(exc.replace("Exclusions:", ""))}</span>
        </div>
      );
    }
  }

  if (props.node.initial) {
    description = (
      <div className="description-container ">
      
        <div className="title">{props.node.title}</div>
        <div className="body">{body}</div>
        <div className="inclusions">{inclusion}</div>
        <div className="exclusions">{exclusion}</div>

        <Button className="button" type="dashed" onClick={() => addCode(props.node)}>
          {props.node.initial}
        </Button>
      </div>
    
    );
  }

  return <div>{description}</div>;
};

const mapDispatchToProps = (dispatch) => ({
  addCode: (code) => dispatch(addIcfCode(code)),
});

export default connect(null, mapDispatchToProps)(Description);
