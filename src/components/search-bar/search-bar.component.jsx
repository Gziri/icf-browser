import React, { useState } from "react";
import BarItself from "./bar-itself/bar-itself.component";
import "./search-bar.styles.scss";
import codes from "../../assets/flatCodes.json";

import { connect } from "react-redux";
import { addIcfCode } from "../../redux/icf/icf.actions";

const SearchBar = ({ addCode }) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredCodes = filterCodes(codes, searchQuery);

  const codeButtons =
    filteredCodes.length > 0 ? (
      <div className="dropdown">
        {filteredCodes.map((code) => {
          if (code === null) {
            return {};
          }
          return (
            <div key={code.initial + "s"}>
              <button onClick={() => addCode(code)}>{code.title}</button>
            </div>
          );
        })}
      </div>
    ) : null;
  return (
    <div className="search-bar">
      <BarItself searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {codeButtons}
    </div>
  );
};

const filterCodes = (codes, query) => {
  if (!query || query === "") {
    return [];
  }
  const filteredCodes = codes.filter((code) => {
    const codeTitle = code.title.toLowerCase();
    return codeTitle.includes(query);
  });

  const filterResult = [];
  for (let i = 0; i < 10; i++) {
    if (filteredCodes[i]) {
      filterResult.push(filteredCodes[i]);
    }
  }
  return filterResult;
};

const mapDispatchToProps = (dispatch) => ({
  addCode: (code) => dispatch(addIcfCode(code)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
