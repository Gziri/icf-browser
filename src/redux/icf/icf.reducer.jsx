import { ICF_TYPES } from "./icf.types";
import { addCodeToStore, removeCodeFromStore } from "./icf.utils";

const INITIAL_STATE = {
  text: "",
  icfBundle: [],
};

const icfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ICF_TYPES.ADD_ICF_VALUE:
      return {
        ...state,
        icfBundle: addCodeToStore(state.icfBundle, action.payload),
      };
    case ICF_TYPES.REMOVE_ICF_VALUE:
      return {
        ...state,
        icfBundle: removeCodeFromStore(state.icfBundle, action.payload),
      };
    default:
      return state;
  }
};

export default icfReducer;
