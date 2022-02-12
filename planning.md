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
1. FrontEnd - React.js, scss, react-calender, JavaScript
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
  - react-calender for calander
  - 

### User Stories

-------------------------------LEVEL 1-------------------------------
- users can CREATE their own workout logs for a particular day 
- user can EDIT,UPDATE, DELETE their workout logs
- users have options to repeat the workout on daily basis (Mon,Tue,Wed,Thur,Fri,Sat,Sun)
- users can see the workout logs for the day by clicking on the day on calender 
- user can mark the logs if complete or not - add color (red or green) 
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