CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image TEXT,
    diameter REAL,
    distance REAL,
    mass REAL,
    moons INTEGER
);