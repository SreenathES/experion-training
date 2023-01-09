CREATE TABLE `students` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `register_no` BIGINT NOT NULL UNIQUE,
    `name` VARCHAR(25) NOT NULL,
    `total_mark` INT NOT NULL,
    `date_of_birth` DATE NOT NULL
);

SELECT * FROM students;