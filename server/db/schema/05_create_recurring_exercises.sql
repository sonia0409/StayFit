-- schema/04_create_recurring_exercises.sql
DROP TABLE IF EXISTS recurring_exercises CASCADE;
-- CREATE EXERCISES
CREATE TABLE recurring_exercises (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  exercise_id integer REFERENCES exercises(id) ON DELETE CASCADE NOT NULL,
  date VARCHAR(255) NOT NULL,
  recurring_monday boolean DEFAULT false,
  recurring_tuesday boolean DEFAULT false,
  recurring_wednesday boolean DEFAULT false,
  recurring_thursday boolean DEFAULT false,
  recurring_friday boolean DEFAULT false,
  recurring_saturday boolean DEFAULT false,
  recurring_sunday boolean DEFAULT false
);
