import { useState, useEffect } from "react";
import axios from "axios";
const hardcodedQuotes = [
    {
        "id": 71,
        "quote": "Self-discipline is about controlling your desires and impulses while staying focused on what needs to get done to achieve your goal.",
        "author": "Adam Sicinski",
        "category": "Self Discipline"
    },
    {
        "id": 72,
        "quote": "Rule of thumb: Eat for what you’re going to be doing and not for what you have done. Don’t take in more than you’re willing to burn off.",
        "author": "Lee Haney",
        "category": "Self Discipline"
    },
    {
        "id": 73,
        "quote": "Bodybuilding is an art, your body is the canvas, weights are your brush and nutrition is your paint. We all have the ability to turn a self-portrait into a masterpiece.",
        "author": "Kai Greene",
        "category": "Self Discipline"
    },
    {
        "id": 74,
        "quote": "Success is what comes after you stop making excuses.",
        "author": "Luis Galarza",
        "category": "Success"
    },
    {
        "id": 75,
        "quote": "You can have results or excuses. Not both",
        "author": "Arnold Schwarzenegger",
        "category": "Success"
    },
    {
        "id": 76,
        "quote": "When it gets difficult is often right before you succeed.",
        "author": "Jeffrey Walker",
        "category": "Success"
    },
    {
        "id": 77,
        "quote": "Successful people are not gifted; they just work hard, then succeed on purpose.",
        "author": "Unknown",
        "category": "Success"
    },
    {
        "id": 78,
        "quote": "Success is the sum of small efforts repeated day-in and day-out.",
        "author": "Robert Collier",
        "category": "Success"
    },
    {
        "id": 79,
        "quote": "If you train hard, you’ll not only be hard, you’ll be hard to beat.",
        "author": "Herschel Walker",
        "category": "Success"
    },
    {
        "id": 80,
        "quote": "If you can imagine it, you can achieve it; if you can dream it, you can become it.",
        "author": "William Arthur Ward",
        "category": "Success"
    }
]

function useQuotes() {
    const [quotes, setQuotes] = useState(hardcodedQuotes);

    // const randomPage = Math.floor((Math.random() * 20) + 1);

    const options = {
        method: 'GET',
        url: 'https://bodybuilding-quotes1.p.rapidapi.com/quotes',
        params: {page: `7`},
        headers: {
          'x-rapidapi-host': 'bodybuilding-quotes1.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
        }
      };

    // useEffect(() => {
    //     axios.request(options)
    //         .then((response) => {
    //             console.log(response.data)
    //         setQuotes(response.data)
    //         })
    //         .catch((error) => {
    //         console.error(error);
    //     });
    // }, [])

    return { quotes };
}

export default useQuotes;






