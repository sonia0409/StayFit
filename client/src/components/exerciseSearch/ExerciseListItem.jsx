import Item from "./Item";
import ShowExercise from "./ShowExercise";
import {useState} from 'react';

export default function ExerciseListItem(props) {
  const { name, gifUrl, onClick } = props;
  const [onClose, setOnClose] = useState('false')

  const handleClose = () => {
    setOnClose(!onClose)
  }
  const close = onClose;
  return (
    <div className="exerciseListItem">
      <Item exerciseItem={name} onClick={onClick} />
      {props.show && <ShowExercise name={name} gifUrl={gifUrl} close={close} onClose={handleClose}/>}
    </div>
  );
}
