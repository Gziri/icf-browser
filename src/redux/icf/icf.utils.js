export const addCodeToStore = (state, icfCodeToAdd) => {
  console.log("icf", icfCodeToAdd);
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

export const removeCodeToStore = (state, icfCodeToRemove) => {
  
  const newState = state.filter(
    (code) => code.initial !== icfCodeToRemove.initial
  )

  return [...newState];
};
