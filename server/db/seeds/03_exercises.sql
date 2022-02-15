-- seeds/exercises.sql
-- exercises seeds

INSERT INTO exercises (
  name,
  muscleGroup,
  bodyPart,
  weight,
  duration,
  sets,
  reps
) VALUES (
  'sit-ups',
  'abs',
  'core',
  NULL,
  NULL,
  5,
  20
),
(
  'push-ups',
  'arms',
  'upper body',
  NULL,
  NULL,
  3,
  15
),
(
  'squats',
  'quads',
  'lower body',
  150,
  NULL,
  3,
  7
),
(
  'ankle circles',
  'calves',
  'lower legs',
  NULL,
  NULL,
  3,
  20
),
(
  'plank',
  'core',
  'upper body',
  NULL,
  1,
  1,
  3
);

-- ALTER SEQUENCE users_id_seq RESTART WITH 50;
