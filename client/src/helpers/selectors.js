//function to filter the muscle group based on a selected body part
export const getMusclesByBodyPartName = (exercises, bodyPartName) => {
  if (!bodyPartName) {
    return [];
  }

  const filteredList = exercises.filter(exerciseObj => {
    return exerciseObj.bodyPart.toLowerCase() === bodyPartName.toLowerCase()
  })

  const listOfBodyParts = filteredList.map(obj => obj.target)
  const uniqueParts = [...new Set(listOfBodyParts)]

  return uniqueParts.map(part => 
    {
      return {
        value: part.toLowerCase(), 
        label: (part.charAt(0).toUpperCase() + part.slice(1))
      }
    })
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
