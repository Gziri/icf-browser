import { createSelector } from "reselect";

const selectBundle = (state) => state.icfBundle;

export const selectIcfBundle = createSelector([selectBundle], (icfBundle) => icfBundle);
