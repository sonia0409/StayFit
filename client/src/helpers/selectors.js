//function to filter the exercises based on the BodyPart and the partName
export const getExerciseByBodyPartName = (exercises, bodyPartName) => {
  //exercises is an array of objects
  const exercisesByBodyPart = exercises.filter(
    (exercise) => exercise.bodyPart === bodyPartName.toLowerCase()
  );
  //return filtered array of objects
  return exercisesByBodyPart;
};

//function to filter the exercise based on the Muscels and the muscelName
export const getExerciseByMuscelsName = (exercises, muscelName) => {
    const exercisesByMuscelsName = exercises.filter(
        (exercise) => exercise.target === muscelName.toLowerCase()
    )
    return exercisesByMuscelsName;
};
