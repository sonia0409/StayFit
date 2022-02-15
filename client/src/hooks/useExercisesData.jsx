import { useState, useEffect } from "react";
import axios from "axios";

function useExercisesData() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '45f6331b3amshc902a3bfc3518e1p142db4jsn8d53b2de128d'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setExercises(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return { exercises };
}

export default useExercisesData;