import { createSelector } from "reselect";

const selectIcf = (state) => state.icf;

export const selectIcfBundle = createSelector([selectIcf], (icf) => icf.icfBundle);
