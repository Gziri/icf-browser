import { MAIN_TYPES } from "./main.types";
import { addCodeToStore } from "./main.utils";

const INITIAL_STATE = {
  icfBundle: null,
};

const mainReducer = (state = INITIAL_STATE, action) => {
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

export default mainReducer;
