-- seeds/day_exercises.sql
-- day_exercises seeds

INSERT INTO day_exercises (
  user_id,
  exercise_id,
  is_completed,
  date,
  recurring_monday,
  recurring_tuesday,
  recurring_wednesday,
  recurring_thursday,
  recurring_friday,
  recurring_saturday,
  recurring_sunday
) VALUES 
(
  1,
  1,
  false,
  'Mon Feb 14 2022',
  true,
  false,
  false,
  false,
  false,
  false,
  false
),
(
  1,
  2,
  false,
  'Mon Feb 14 2022',
  true,
  false,
  false,
  false,
  false,
  false,
  false
),
(
  1,
  3,
  false,
  'Mon Feb 14 2022',
  true,
  false,
  false,
  false,
  false,
  false,
  false
),
(
  1,
  4,
  true,
  'Mon Feb 14 2022',
  true,
  false,
  false,
  false,
  false,
  false,
  false
),
(
  1,
  5,
  true,
  'Mon Feb 14 2022',
  true,
  false,
  false,
  false,
  false,
  false,
  false
);

-- ALTER SEQUENCE users_id_seq RESTART WITH 50;
/*
select * from day_exercises join users ON user_id = users.id JOIN exercises on exercise_id = exercises.id where date = 'Mon Feb 14 2022' AND user_id = '1';
*/