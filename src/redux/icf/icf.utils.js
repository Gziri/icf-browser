export const addCodeToStore = (state, icfCodeToAdd) => {
  const existingBundle = state.find(
    (code) => code.initial === icfCodeToAdd.initial
  );

  if (!existingBundle) {
    return [
      ...state,
      {
        title: icfCodeToAdd.title,
        initial: icfCodeToAdd.initial,
      },
    ];
  }
  return [...state];
};

export const removeCodeFromStore = (state, icfCodeToRemove) => {
  const newState = state.filter(
    (code) => code.initial !== icfCodeToRemove.initial
  )

  return [...newState];
};
