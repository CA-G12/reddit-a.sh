BEGIN;

DROP TABLE IF EXISTS votes CASCADE;

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES  users(id) ON DELETE CASCADE,
    post_id INTEGER NOT NULL REFERENCES  posts(id) ON DELETE CASCADE,
    created TIMESTAMP
);

COMMIT;

