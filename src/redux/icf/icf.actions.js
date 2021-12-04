import { ICF_TYPES } from "./icf.types";

export const addIcfCode = (code) => {
  return { type: ICF_TYPES.ADD_ICF_VALUE, payload: code };
};

export const removeIcfCode = (code) => {
  return { type: ICF_TYPES.ADD_ICF_VALUE, payload: code };
};