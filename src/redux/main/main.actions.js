import { MAIN_TYPES } from "./main.types";

export const addIcfCode = (code) => {
  return { type: MAIN_TYPES.ADD_ICF_VALUE, code };
};
