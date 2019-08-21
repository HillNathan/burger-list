DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250),
    devoured BOOLEAN DEFAULT false,
    deleted BOOLEAN DEFAULT false,
    PRIMARY KEY (ID)
);