import { useState, useEffect } from "react";
import axios from "axios";


function useExercisesData() {
    const [exercises, setExercises] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': `${API_KEY}`
        }
    };

    useEffect(() => {
        axios
            .request(options)
            .then((res) => {
                setExercises([...res.data])
            }).catch((error) => {
                console.error(error);
            });
    }, [options])

    return { exercises };
}

export default useExercisesData;