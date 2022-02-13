import Item from "./Item";

export default function ExerciseListItem(props) {
    const { name } = props;

    return (
        
        <div class="btn-group dropend">
            <Item exerciseItem={name}/>
        </div>
       
    );
}