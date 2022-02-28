## Summary/Outline
1. Project Planning
2. Project Setup
3. Project Workflow
4. Project Development
5. Project Deployment
6. Project Presentation
___

## 1. Project Planning
### Project Description
- Project title: Workout_logs / My Workout / My Workout App
- Project description: An app that lets a user plan their workout and view their progression.
- Problem being solved: People need an easy way to plan/track workouts in some way other than a notepad
- Target audience: Anyone who goes to the gym or has an exercise routine
- Team members: Sonia Singh, Olga Shilenkova, Nikhil Tallapureddy 

### Stack/Frame works
1. FrontEnd - React.js, scss
2. BackEnd - Node.js, Express, TypeScript
3. DB - Postgres, prisma
4. deploy 

- Mobile App using create-react-app --template ...
-> take screenshots/recording

-restart server-side if we want with typescript

Data Sources:
user input:
  - user info
  - workout selection
  - reps/sets/time of exercises

API:
  - list of exercises searchable by => bodypart, muscle group

Seeded data:
  - 

### User Stories

-------------------------------LEVEL 1-------------------------------
- users can CREATE their own workout logs for a particular day 
- user can EDIT, DELETE their workout logs
- users have options to repeat the workout on daily basis (Mon,Tue,Wed,Thur,Fri,Sat,Sun)
- users can see the workout logs for the day by clicking on the day on calender 
- user can mark the workouts if complete or not - add color (red or green) 
- user can view the summary of all the workout logs.
- user can enter the duration of the workout or sets of the workout

// hardcode for demo. dont need to show in demo even.
- users can sign up to use the app 
- users should be able to login and logout the app

-------------------------------LEVEL 2-------------------------------
- user can see the calories burnt in a day - (look for API)
- user can set their goals per exercise or calories to be burn per day or duration of the exercise.-(50mins/ 60mins)
- users can search for a particular exercise - API add dropdown list of the exercise type(to choose from)
- users can set reminder for the workout routines
- user can invite family or friends to join the workout.
user can see the trend - workout duration or calories burnt per day or both
- user can share the workout plan with others or post it on social networking sites(whatsapp, facebook) 


#### (Stretch)
- connect app to fitbit via bluetooth.
- enable to control music system via app.
- user can log their meal plan and proportions 
- user can keep track of their daily intake of calories with respect to the recommended calories   
  per day as per human weight - APIs to fetch the calories info w.r.t food item
- user can fetch data like the number of steps per day, heart rate.
- use websocket.io to connect with other user


### ERD
https://app.sqldbm.com/PostgreSQL/Edit/p201969/#
Nouns:
- users

- days/calender
  - name
  - workout_id

- workouts
  - FK -> user_id
  - name
  - type/cardio/strength...etc
  - duration
  - sets
  - reps

from API:
- exercises
  - body_part
  - muscle_group aka target
  - name
  - url/gif


- workout
- workout_plan
- day
- week
- 
### Wireframes
https://www.figma.com/file/Higwzm4lNNAagBt18mxDrn/LHL-Final-My_Workout?node-id=0%3A1
...

### Routes:
/login
GET   '/'     -> Show login form
POST  '/'     -> authenticate user login/password

/signup
GET   '/'     -> show signup form
POST  '/'     -> create new user on submit

/users
GET   '/:id'  -> show user details/account
PUT   '/:id'  -> update user details

/exercises




___
## 2. Project Setup

### Github repo setup
https://github.com/sonia0409/workout-planner

### Project scaffold/boilerplate
Directory setup:
```
├── README.md
├── react-client
│   ├── public
│   └── src
│       ├── components
│       └── app.js
└── express-server
    ├── db
    ├── routes
    └── app.js
```
### Database setup

...

### Seed file

...


## TODO:
planning:
- create components/props/states framework
- make routes

Back-end:
- implement TypeScript for backend
- create database in psql individually and .env setup
- make db schema and seeds
- implement routes/routers
- implement Prisma

- create queries for the routes -> output to JSON

Front-end:
- code components
- use react useContext hook for global states/variables
- make useEffect hooks to get initial and consequent api requests
  -> hardcode ~5-10 sets of data for development
- import axios and use for requests
- look into MaterialUI for frontend UI design


Components:

Exercises tree -> SONIA

Notcool Dashboard & Calender trees -> NIKHIL

Forms -> OLGA

Rest -> 

CSS ->


notes:

- exercises search sections 
  => make whole section clickable as opposed to just the > icon?
  => make back button and aligned with heading
  => reformat the footer background or make container have margin-bottom
  => no back button when on main search screen
  => single exercise
    - add margin/padding for footer
    - remove the random dot
    - add spacing underneath exercise gif

- Dashboard
  => mark completed and show details 
  => STRETCH: weather? -> add location for user on signup -> use with api to show weather.
  => STRETCH: add random motivational quotes. Find an api?
  => STRETCH: 

- Calender
  => ALL edit/add/delete functionality available
  => fix UX for loading between dates -> add loading gif? or something else
  => dont show add button when date is in the past.



1.- LOGIN/SIGNUP PAGE
  - need component/functionality
2.- add noifications/reminders
- use emulator to 
- research if pwa can send notifications on phone/mobile
  -> set logos/icon
  -> or use setTimeout/interval mby?
3.- add inspirational quotes
4.Show weather

priority:
1->login!! -> TOP PRIORITY
2->quotes
3->reminder



Presentation:

5 mins.

Introductions: 45s - 60s
- intro group members
  - 15s
  - 15s
  - 15s

- intro to project / problem solved?

Demo: ~3 mins / 180s
  SKIT:

  Nik - knows app and can show us
  Sonia - Friend who is frustrated with planning workouts
  Olga - Friend who is frustrated with planning workouts

  Nik: Hi, im Nikhil, I have a background in Finance and Compliance and am now a Full Stack Developer looking to build products related to financial services. I can't wait to finish this bootcamp and step into the real world.

  -------START--------
  Nik: Hey Sonia, hey Olga, now that the bootcamp is coming to an end, what do you plan on doing?

  Sonia: Yay, im excited to get time for myself, i'll go to the gym?

  Olga: Oh, the gym? How do you plan your workouts Sonia? 
  
  Sonia: I use a diary. But its hard to carry everywhere. HBU? how bout u?

  Olga: Me personally, I use the notes app on my phone. But I don't really like the way its organized.

  Nik: Wait a second, I know a cool fitness app that lets you schedule your exercises in a simple and easy way. I use it everyday! Its called 'StayFit'!

  Sonia/Olga: Cool, can you show me how it works?

  Nik: Let me login on my phone and show you .

ACTION ... Login on screen

  Nik: This is home page. The app says its chilly today, so I should probably layer up before going on a jog.

  Nik: Under today's exercises, you can see what I planned for today. Since I already finished my deadlifts, french push ups and plank let me mark these completed.

  Sonia/Olga: Oh, thats good. How do you add a new exercise?

  Nik: You can go over to the calender page tab for that.

ACTION ... Go to calender

  Nik: I have to add some bicep curls for the next few days, so let me add that.
    -> Lets click the plus
    -> choose upper arms
    -> choose biceps
    -> add a name
    -> this doesnt need a duration
    -> 3 sets of 12 reps
    -> with 40lbs
    -> Since I wanna do this every thurs, fri and saturday let me just check those off.
  -> click add

  Olga: 40lbs? REALLY?

  Nik: Well that is a little too much, let me change it to 25lbs.

ACTION ... EDIT bicep curls to 25lbs.

  OLGA: Aren't you busy this Saturday? 

  Nik: Oh ya, in that case let me go over to that day.

ACTION ... Go to the next day and click delete

  Nik: I'll just delete exercises for that day.

  Nik: Let me just go back to today

  Sonia: The Air Bike exercise sounds cool. Where did you find an exercise like this?

  Nik: As a matter of fact, theres a search feature for that. I'll show you how I found it.

ACTION ... Go to Exercises -> Body Part: Cardio -> page 4: Skater Hops

  Nik: I searched for Body Part - Waist

  Nik: There it is. Lets see a preview of the air bike.
  
  Sonia: That was more simple than I thought.

  Nik: Yup, there are other filters too, which you can use to search for exercises as well.

  Olga: The hardest part of working out is to stay motivated.

  Nik: You might have missed it but the dashboard has a feature for that. 

ACTION ... Go to Dashboard

  Nik: There are other intricate features built in as well, you can get the app and check it out yourselves now.

Stacks/Challenges/Wrap-up/Stretch add ons: ~60s

- The stack used for this project is React for the front end and NodeJS and Express for the back end.
- One of the biggest challenges we faced was making sure there were clear Call-To-Actions so that users could have a better experience. 
- Some features we plan to add are connecting the app to fitness devices and show users the stats on their progression.





HEROKU:

postgres://zguzmfndtmxbxb:0b5cdc9af6e6385fe0065955eeaaacf5d07cdaa10f4209cabb9286864156688e@ec2-34-233-157-9.compute-1.amazonaws.com:5432/dajscp07kb6eg3

username: zguzmfndtmxbxb
password: 0b5cdc9af6e6385fe0065955eeaaacf5d07cdaa10f4209cabb9286864156688e
host: ec2-34-233-157-9.compute-1.amazonaws.com
port: 5432
database: dajscp07kb6eg3

psql -h ec2-34-233-157-9.compute-1.amazonaws.com -p 5432 -U zguzmfndtmxbxb -d dajscp07kb6eg3