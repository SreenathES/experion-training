CREATE DATABASE IF NOT EXISTS experion_software;
DROP DATABASE experion_software;
-- CREATE SCHEMA IF NOT EXISTS experion_software;
-- DROP SCHEMA experion_software;

USE experion_software;

CREATE TABLE `users`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(50) NOT NULL UNIQUE,
	`age` INT NOT NULL DEFAULT 18 CHECK(age >= 18),
	`country` VARCHAR(10) NOT NULL DEFAULT 'IN'
);

INSERT INTO users (name, email, age, country) VALUES
('Tony', 'ironman@mail.com', 22, 'IN'),
('Clint', 'hawkeye@mail.com', 21, 'UK'),
('Fury', 'director@mail.com', 23, 'UK'),
('Steve', 'captainamerica@mail.com', 24, 'IN'),
('Bruce', 'hulk@mail.com', 22, 'CAN'),
('Peter', 'spiderman@mail.com', 27, 'CAN'),
('loki', 'loki@mail.com', 23, 'UK'),
('Thor', 'thunderking@mail.com', 27, 'UK'),
('Quill', 'starlord@mail.com', 57, 'USA'),
('Scott', 'antman@mail.com', 47, 'USA'),
('Sam', 'falcon@mail.com', 37, 'IN'),
('Natasha', 'blackwidow@mail.com', 18, 'USA'),
('Strange', 'drstrange@mail.com', 26, 'UK'),
('Vision', 'vision@mail.com', 27, 'CAN'),
('Shuri', 'shuri@mail.com', 19, 'WAKANDA'),
('Ms.Marvel', 'mrmarvel@mail.com', 27, 'UK'),
('Gamora', 'gamora@mail.com', 32, 'Knowhere')
;

TRUNCATE TABLE users;

SELECT * FROM users limit 2 offset 2;