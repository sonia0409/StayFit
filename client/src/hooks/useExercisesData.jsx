import { useState, useEffect } from "react";
import axios from "axios";


function useExercisesData() {
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': `${API_KEY}`
            }
        };
        axios
            .request(options)
            .then((res) => {
                setExercises([...res.data])
            }).catch((error) => {
                console.error(error);
            });
    }, [])

    return { exercises };
}

export default useExercisesData;