import { useState, useEffect } from "react";
import axios from "axios";
const hardcodedQuotes = [
    {
        "id": 161,
        "quote": "There's no secrets or magic tricks to being successful in life. It's plain and simple. Work harder than everyone else and the only way to do that is to do it. It may sound silly but it's the truth and there aint nothing to it but to do it!",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 162,
        "quote": "It is important to have people believe in you. With this support, what you can achieve is limitless.",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 163,
        "quote": "Women really do pay attention to a man's glutes. A tight, compact ass is often voted even more desirable than muscular arms and chest. So, if you're lacking, start squatting!",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 164,
        "quote": "I loved challenging myself every day. The weight room was my therapy for everyday life stresses. No matter what I was doing I always wanted to be the best.",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 165,
        "quote": "Never underestimate the power of wide-grip pull-ups to develop width and size.",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 166,
        "quote": "I've been training so long, its second nature to push myself to the limit.\r\n",
        "author": "Ronnie Coleman",
        "category": null
    },
    {
        "id": 167,
        "quote": "Each workout is like a brick in a building, and every time you go in there and do a half-ass workout, you're not laying a brick down. Somebody else is.",
        "author": "Dorian Yates",
        "category": null
    },
    {
        "id": 168,
        "quote": "If I listened to my instincts, I'd be down at the pub chasing women, not under a 400 pound bar squatting",
        "author": "Dorian Yates",
        "category": null
    },
    {
        "id": 169,
        "quote": "If those guys with better genes trained as hard and intense as me, I wouldn`t stand a chance!",
        "author": "Dorian Yates",
        "category": null
    },
    {
        "id": 170,
        "quote": "The single biggest mistake that most beginners make is putting 100% of their effort into the positive (concentric) part of the rep, while paying no attention to the negative (eccentric) segment",
        "author": "Dorian Yates",
        "category": null
    }
  ]

function useQuotes() {
    const [quotes, setQuotes] = useState(hardcodedQuotes);

    const randomPage = Math.floor((Math.random() * 20) + 1);
    const API_KEY = process.env.REACT_APP_API_KEY

    const options = {
        method: 'GET',
        url: 'https://bodybuilding-quotes1.p.rapidapi.com/quotes',
        params: { page: `${randomPage}` },
        headers: {
            'x-rapidapi-host': 'bodybuilding-quotes1.p.rapidapi.com',
            'x-rapidapi-key': 'API_KEY'
        }
    };

    useEffect(() => {
        // axios.request(options)
        //   .then((response) => {
        //     console.log(response.data);
        //     setQuotes(response.data)
        //   })
        //   .catch((error) => {
        //     console.error(error);
        // });

    }, [])

    return { quotes };
}

export default useQuotes;






