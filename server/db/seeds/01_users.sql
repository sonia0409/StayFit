-- seeds/01_users.sql
-- users seeds
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('rick', 'sandchez', 20, 158, 150, 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('lisa', 'simpson', 21, 160, 161, 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('link', 'yahoo', 22, 150, 100, 'link@yahoo.com', 'hyrule');
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('simon', 'bel', 30, 163, 110, 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('all', 'might', 40, 200, 180, 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (firstName, lastName, age, height, weight, email, password) VALUES ('mario', 'mushroom', 50, 130, 105, 'mario@mushroomkindom.jp', 'plumber79');

-- ALTER SEQUENCE users_id_seq RESTART WITH 50;
