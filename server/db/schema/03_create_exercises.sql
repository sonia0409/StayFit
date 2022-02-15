-- schema/03_create_exercises.sql
DROP TABLE IF EXISTS exercises CASCADE;
-- CREATE EXERCISES
CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  muscleGroup VARCHAR(255) NOT NULL,
  bodyPart VARCHAR(255) NOT NULL,
  weight INT,
  duration INT,
  sets INT,
  reps INT
);
