export const addCodeToStore = (icfBundle, icfCodeToAdd) => {
  const existingBundle = icfBundle.find(
    (icfCode) => icfCode.initial === icfCodeToAdd.initial
  );

  if (!existingBundle) {
    return [...icfBundle, { ...icfCodeToAdd }];
  }
  return [...icfBundle];
};
