import { useState, useEffect } from "react";
import axios from "axios";


function useWeather() {
    const [todayWeather, setTodayWeather] = useState({})
    useEffect(() => {
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
        axios
            .request(options)
            .then((res) => {
                setTodayWeather({...res.data})
            }).catch((error) => {
                console.error(error);
            });
    }, [])
    return { todayWeather };
}

export default useWeather;