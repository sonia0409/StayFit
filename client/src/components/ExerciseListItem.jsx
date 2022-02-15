import Item from "./Item";

import ShowExercise from "./ShowExercise";

export default function ExerciseListItem(props) {
    const { name, gifUrl, onClick } = props;

    return (

        <div>
            <Item exerciseItem={name} onClick={onClick} />
            {props.show && <ShowExercise name={name} gifUrl={gifUrl} />}
        </div>

    );

}

