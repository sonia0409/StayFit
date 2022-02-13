import ExerciseListItem from "./ExerciseListItem";


export default function ExerciseList(props) {
    const { exercises } = props
    const listOfExercises = exercises.map(exercise => <ExerciseListItem key={exercise.id} name={exercise.name} gifUrl={exercise.gifUrl} />)

    return (
        <div>
            <h2>Exercises</h2>
            <div>{listOfExercises}</div>
        </div>
    );
}