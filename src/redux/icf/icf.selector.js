import { createSelector } from "reselect";

const selectBundle = (state) => state.icf.icfBundle;

export const selectIcfBundle = createSelector(
  [selectBundle],
  (icf) => [...icf]
);
