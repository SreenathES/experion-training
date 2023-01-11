use experion_software;

SELECT users.id, users.name, email, address, pin FROM users
INNER JOIN address
ON users.id = address.user_id;

CREATE VIEW user_with_address AS
SELECT users.id, users.name, email, address, pin FROM users
INNER JOIN address
ON users.id = address.user_id;

select * from user_with_address;
update user_with_address set name='Tonny' where name='tony';
