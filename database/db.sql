CREATE DATABASE database_delovepers;

USE database_delovepers;

-- USERS TABLE --
CREATE TABLE users(
    id INT(11) NOT NULL,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

DESCRIBE users;

-- COURSES TABLE --
CREATE TABLE courses(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    user_id INT(11),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
)

ALTER TABLE courses
    ADD PRIMARY KEY (id);

ALTER TABLE courses 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;