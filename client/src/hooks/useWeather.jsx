import { useState, useEffect } from "react";
import axios from "axios";


function useWeather() {

    const [todayWeather, setTodayWeather] = useState({})

    const API_KEY = process.env.REACT_APP_API_KEY_WEATHER
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: 'toronto',
            lat: 'toronto',
            lon: 'toronto',
            id: '2172797',
            lang: 'null',
            units: 'metric',
            mode: 'JSON'
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': `${API_KEY}`
        }
    };

    useEffect(() => {
        axios
            .request(options)
            .then((res) => {
                console.log("========API Calls========", res.data)
                setTodayWeather({...res.data})
                console.log("====after API call====",todayWeather.weather)
            }).catch((error) => {
                console.error(error);
            });
    }, [])
    console.log("before return===========>", todayWeather )
    return { todayWeather };
}

export default useWeather;