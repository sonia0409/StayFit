import React, { useEffect, useState } from "react";
import DashboardExerciseList from "./Dashboard_exercise_list";
import "../styles/Dashboard.scss";
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

export default function Dashboard() {
  const [quotes, setQuotes] = useState(hardcodedQuotes);
  let displayQuoteNum = 0;
  const formatedDate = () => {
    const today = new Date();
    const splitDate = today.toDateString().split(' ');
    return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`;
  }

  useEffect(() => {
    const randomPage = Math.floor((Math.random() * 20) + 1);

    const options = {
      method: 'GET',
      url: 'https://bodybuilding-quotes1.p.rapidapi.com/quotes',
      params: {page: `${randomPage}`},
      headers: {
        'x-rapidapi-host': 'bodybuilding-quotes1.p.rapidapi.com',
        'x-rapidapi-key': '490c8aff1dmsh968e221e781c0b2p1313fejsnb290062d41c4'
      }
    };

    // axios.request(options)
    //   .then((response) => {
    //     console.log(response.data);
    //     setQuotes(response.data)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    // });

  }, []);

  return (
    <div className="container-dashboard" >
      <h2 className="dashboard-date">Dashboard</h2>
      <h2 className="dashboard-date">{formatedDate()}</h2>
      <section className="container-quote">
        <div className="quote-data" >{quotes[displayQuoteNum].quote}</div>
        <div className="quote-author" >
          Author:
          <div>{quotes[displayQuoteNum].author}</div> 
        </div>
        </section>
      
      <div className="db-titles">
      <h3> Today's Exercises:</h3>
      <h3> Status</h3>
      </div>
      <DashboardExerciseList
        selectedDate={new Date("Mon Feb 14 2022")}
        setEditObj={() => {}}
        onClick={() => {}}
      />
    </div>
  );
}
