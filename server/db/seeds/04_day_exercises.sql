-- seeds/day_exercises.sql
-- day_exercises seeds

INSERT INTO day_exercises (
  user_id,
  exercise_id,
  is_completed,
  date
) VALUES 
(
  1,
  1,
  false,
  'Mon Feb 14 2022'
),
(
  1,
  2,
  false,
  'Mon Feb 14 2022'
),
(
  1,
  3,
  false,
  'Mon Feb 14 2022'
),
(
  1,
  4,
  true,
  'Mon Feb 14 2022'
),
(
  1,
  5,
  true,
  'Mon Feb 14 2022'
);

INSERT INTO day_exercises (
  user_id,
  exercise_id,
  is_completed,
  date,
  is_deleted
) VALUES 
(
  1,
  5,
  false,
  'Tue Feb 15 2022',
  true
);
-- ALTER SEQUENCE users_id_seq RESTART WITH 50;
/*
select * from day_exercises join users ON user_id = users.id JOIN exercises on exercise_id = exercises.id where date = 'Mon Feb 14 2022' AND user_id = '1';
*/