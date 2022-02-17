-- schema/04_create_day_exercises.sql
DROP TABLE IF EXISTS day_exercises CASCADE;
-- CREATE EXERCISES
CREATE TABLE day_exercises (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  exercise_id integer REFERENCES exercises(id) ON DELETE CASCADE NOT NULL,
  is_completed boolean DEFAULT false,
  date VARCHAR(255) NOT NULL,
  is_deleted boolean DEFAULT false
);
