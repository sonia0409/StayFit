//function to filter the exercises based on the BodyPart and the partName
export const getExerciseByBodyPartName = (exercises, bodyPartName) => {
  //exercises is an array of objects
  if (!bodyPartName) {
    return [];
  }
  const exercisesByBodyPart = exercises.filter(
    (exercise) => exercise.bodyPart === bodyPartName.toLowerCase()
  );
  //return filtered array of objects
  return exercisesByBodyPart;
};

//function to filter the exercise based on the Muscels and the muscelName
export const getExerciseByMusclesName = (exercises, muscleName) => {
  if (!muscleName) {
    return [];
  }
  const exercisesByMusclesName = exercises.filter(
    (exercise) => exercise.target === muscleName.toLowerCase()
  );
  return exercisesByMusclesName;
};

export const getExercises = (exercises, part, name) => {
  if (!name) {
    return [];
  }
  if (part === "Muscles") {
    part = "target";
  }
  if (part === "Body Parts") {
    part = "bodyPart";
  }
  return exercises.filter((exercise) => exercise[part] === name.toLowerCase());
};
