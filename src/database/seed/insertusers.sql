
BEGIN;

INSERT INTO users (username,email,firstname,lastname,_password, img, created) values 
    ('user1', 'user1@user.com', 'johan', 'smith', 'L[hkdk99', 'img', now());
COMMIT;
