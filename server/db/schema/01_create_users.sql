-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  height INT NOT NULL,
  weight INT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);