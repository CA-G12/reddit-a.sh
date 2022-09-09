BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    firstname VARCHAR(150) NOT NULL,
    lastname VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    _password VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    created TIMESTAMP
);

COMMIT;