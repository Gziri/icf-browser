import { MAIN_TYPES } from "./icf.types";
import { addCodeToStore } from "./icf.utils";

const INITIAL_STATE = {
  text: "",
  icfBundle: [],
};

const icfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAIN_TYPES.ADD_ICF_VALUE:
      return {
        ...state,
        icfBundle: addCodeToStore(state.icfBundle, action.payload),
      };
    default:
      return state;
  }
};

export default icfReducer;
