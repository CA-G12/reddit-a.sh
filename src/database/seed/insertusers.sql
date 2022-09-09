
BEGIN;

INSERT INTO users (username,email,firstname,lastname,_password, img) values 
    ('user1', 'user@user.com', 'us', 're', '123', 'img');
COMMIT;
